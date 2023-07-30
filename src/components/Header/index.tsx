import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { Handbag } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg';
import { ButtonCart, HeaderContainer } from '../../styles/pages/app'
import { CartItems } from "../CartItems";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useWindowSize } from "../../hooks/use-window-size";

export function Header() {
  const { cartCount } = useShoppingCart()
  const { pathname } = useRouter()
  const [headerPosition, setHeaderPosition] = useState<'center' | 'spaceBetween'>('spaceBetween')
  const [open, setOpen] = useState(false)
  const isCartEmpty = !cartCount
  const windowSize = useWindowSize()

  // set is cart checkout open or closed
  useEffect(() => {
    if (cartCount! < 1) {
      setOpen(false)
    }
  }, [cartCount])

  // positon header case Stripe sucess payment
  useEffect(() => {

    if (pathname === '/success') {
      setHeaderPosition('center')
    } else {
      setHeaderPosition('spaceBetween')
    }
  }, [pathname])

  return (
    <HeaderContainer justifyContent={headerPosition}>
      <Link href={'/'} prefetch={false}>
        <Image src={logoImg.src} alt='' width={logoImg.width} height={logoImg.height} />
      </Link>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <ButtonCart displayScreen={headerPosition} disabled={isCartEmpty}>
            <Handbag size={24} weight="bold" />

            {cartCount! > 0 && (
              <span>
                {cartCount}
              </span>
            )}
          </ButtonCart>
        </Dialog.Trigger>
        <CartItems />
      </Dialog.Root>
    </HeaderContainer>
  )
}