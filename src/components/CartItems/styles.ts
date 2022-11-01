import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
  zIndex: 2,
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'fixed',
  zIndex: 10,
  top: 0,
  right: 0,
  height: '100vh',
  width: '30rem',
  background: '$gray800',
  padding: '0 3rem',


  '#title': {
    marginTop: '4.5rem',
    fontSize: '$lg',
    lineHeight: '160%',
  }
})

export const CloseButton = styled('button', {
  position: 'absolute',
  background: 'transparent',
  border: 'none',
  top: '1.5rem',
  right: '1.5rem',
  color: '$gray500',
  cursor: 'pointer',
})

export const MainContent = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '23rem',
  overflow: 'auto',
  gap: '1.5rem',
  marginTop: '2rem',

  'div:first-child': {
    marginTop: 6,
  },

  'div:last-child': {
    marginBottom: 6,
  },

  '&::-webkit-scrollbar': {
    width: 4,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$green500',
    borderRadius: 20,
  }
})

export const ProductOnCart = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'flex-start',

  'div#productNameAndPrice': {
    div: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: '160%',
      marginBottom: '0.5rem',

      'span:first-child': {
        fontSize: '$md',
        lineHeight: '160%',
      },

      'span:last-child': {
        fontWeight: 'bold',
        fontSize: '$md',
        lineHeight: '160%',
      }
    },

    button: {
      border: 'none',
      backgroundColor: 'transparent',
      color: '$green500',
      lineHeight: '160%',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  }
})

export const ImageContainer = styled('figure', {
  height: 95,
  width: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  img: {
    objectFit: 'cover',
  }
})

export const ProductAmount = styled('span', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  color: '$white',
  width: '1.650rem',
  height: '1.650rem',
  borderRadius: 1000,
  top: -7,
  right: -7,
  backgroundColor: '$green500',
  border: '3px solid $gray800',
})

export const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  marginBottom: '3rem',

  '#amountAndValue': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'flex-start',

    div: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',

      'p:first-child': {
        lineHeight: '160%',
        color: '$gray100',
      },

      'p:last-child': {
        fontSize: '$md',
        lineHeight: '160%',
        color: '$gray300',
      },

      strong: {
        fontSize: '$md',
        lineHeight: '160%',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        lineHeight: '140%',
        color: '$gray100',
        fontWeight: 'bold',
      }
    },
  },
})

export const CheckoutButton = styled('button', {
  border: 'none',
  borderRadius: 8,
  padding: '1.25rem 0',
  color: 'white',
  backgroundColor: '$green500',
  cursor: 'pointer',

  fontSize: '$md',
  lineHeight: '160%',
  fontWeight: 'bold',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
    transition: 'backgroundColor 0.2s'
  },
})