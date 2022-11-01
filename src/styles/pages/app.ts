import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  variants: {
    justifyContent: {
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
    }
  },
})

export const ButtonCart = styled('button', {
  variants: {
    displayScreen: {
      center: { display: 'hidden', opacity: 0, position: 'absolute' },
      spaceBetween: { display: 'flex', opacity: 1 },
    }
  },
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: 6,
  border: 0,
  color: '$gray500',
  cursor: 'pointer',
  position: 'relative',

  '&:disabled': {
    cursor: 'default',
  },

  span: {
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
    border: '3px solid $gray900',
  }
})