import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { useWindowSize } from "../../hooks/use-window-size"
import { useRouter } from "next/router"
import { redirect } from "next/navigation"

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
    currency: string;
  }
}

interface IProductOnCart {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
  priceId: string;
  currency: string;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter()
  const { addItem } = useShoppingCart()
  const windowSize = useWindowSize()
  const productImageWidth = windowSize > 1024 ? 520 : 280
  const productImageHeight = windowSize > 1024 ? 480 : 380

  if(!product) {
    router.push('/')
    redirect('/')
  }
  const productOnCart: IProductOnCart = {
    id: product.id,
    name: product.name,
    price: product.price,
    currency: product.currency,
    priceId: product.defaultPriceId,
    imageUrl: product.imageUrl,
  }

  const { isFallback } = router
  if (isFallback) {
    return <p>loading...</p>
  }

  // Add product on cart
  async function handleAddProductToCart() {
    addItem(productOnCart)
  }

  // Format product price
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price! / 100)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={productImageWidth} height={productImageHeight} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{price}</span>

          <p>{product.description}</p>

          <button
            onClick={handleAddProductToCart}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>

  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_Mh20Ec9HJcizjd' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  // Get product on Stripe API
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount!,
        description: product.description,
        defaultPriceId: price.id,
        currency: price.currency,
      }
    },
    revalidate: 60 * 60 * 1,
  }

}