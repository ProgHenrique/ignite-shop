import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

export const Cart = ({ children }: { children: ReactNode }) => (
  <CartProvider
    mode="payment"
    cartMode='client-only'
    successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
    cancelUrl={`${process.env.NEXT_URL}/`}
    stripe={process.env.STRIPE_PUBLIC_KEY as string}
    currency='BRL'
    language='pt-BR'
  >
    <>{children}</>
  </CartProvider >
);