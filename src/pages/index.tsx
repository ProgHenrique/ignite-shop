import Image from "next/image";

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y } from "swiper";
import { HomeContainer, Product, SwiperContainer } from "../styles/pages/home";

import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { useWindowSize } from "../hooks/use-window-size";

interface Product {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
  priceId: string;
  unitAmount: number;
  description: string;
  defaultPriceId: string;
  currency: string;
}

interface HomeProps {
  products: Product[]
}

interface IProductOnCart {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
  priceId: string;
  currency: string;
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()
  const windowSize = useWindowSize()
  const productImageWidth = windowSize > 600 ? 520 : 280 
  const isMobileScreen = windowSize < 600

  // Add product on cart
  async function handleAddProductToCart(product: Product) {
    const productOnCart: IProductOnCart = {
      id: product.id,
      name: product.name,
      price: product.unitAmount,
      currency: product.currency,
      priceId: product.defaultPriceId,
      imageUrl: product.imageUrl,
    }
    addItem(productOnCart)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
        <HomeContainer>
          <SwiperContainer
            navigation = {!isMobileScreen}
            modules = {[Navigation, A11y]}
            spaceBetween = {isMobileScreen ? 38  : 48}
            slidesPerView = {isMobileScreen ? 'auto'  : 2}
            draggable = {true}
            centeredSlides = {isMobileScreen}
          >
          {products.map(product => {
            return (
              <SwiperSlide key={product.id}>
                <Product>
                  <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                    <Image src={product.imageUrl} width={productImageWidth} height={480} alt='' />
                  </Link>
                  {windowSize > 600 && (
                    <footer>
                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                      </div>
                      <div onClick={()=> handleAddProductToCart(product)}>
                        <Handbag size={16} weight="bold" />
                      </div>
                    </footer>
                  )}
                  
                </Product>
              </SwiperSlide>
            )
          })}
        </SwiperContainer>
        </HomeContainer>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Get the Products on Stripe API
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      unitAmount: price.unit_amount!,
      description: product.description,
      defaultPriceId: price.id,
      currency: price.currency,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
