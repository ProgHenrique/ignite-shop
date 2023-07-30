import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { CheckoutButton, CloseButton, Content, FooterContainer, ImageContainer, MainContent, Overlay, ProductAmount, ProductOnCart } from './styles';

export function CartItems() {
  const { cartDetails, removeItem, totalPrice, clearCart, cartCount} = useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  // Format price product
  const ProductTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice! / 100)

  const products = Object.values(cartDetails!)
  const itensOnCart = cartCount

  // Remove Product of cart
  function handleRemoveProduct(productId: string) {
    removeItem(productId)
  }

  // redirect to Stripe for checkout
  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const productsCheckout = products.map((product) => {
        return {
          price: product.priceId,
          quantity: product.quantity,
        }
      })

      const response = await axios.post('/api/checkout', {
        products: productsCheckout
      })

      const { checkoutUrl } = response.data
      clearCart()

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <div>
          <Dialog.Title id='title'>Sacola de compras</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <MainContent>
            {products.map((product) => {
              return (
                <ProductOnCart key={product.id}>
                  <ImageContainer>
                    <Image src={product.imageUrl!} width={95} height={95} alt='' />
                    {product.quantity > 1 && (<ProductAmount>{product.quantity}</ProductAmount>)}
                  </ImageContainer>
                  <div id='productNameAndPrice'>
                    <div>
                      <span>{product.name}</span>
                      <span>{product.formattedPrice}</span>
                    </div>
                    <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                  </div>
                </ProductOnCart>
              )
            })}
          </MainContent>
        </div>

        <FooterContainer>
          <div id='amountAndValue'>
            <div>
              <p>Quantidade</p>
              <p>{itensOnCart} itens</p>
            </div>

            <div>
              <strong>Valor total</strong>
              <span>{ProductTotalPrice}</span>
            </div>
          </div>

          <CheckoutButton onClick={handleBuyProduct} disabled={isCreatingCheckoutSession || !products.length}>
            {isCreatingCheckoutSession ? 'Redirecionando...' :'Finalizar compra'}
          </CheckoutButton>
        </FooterContainer>
      </Content>
    </Dialog.Portal>
  )
}