import { styled } from ".."

export const ProductContainer = styled('main', {
  display: 'grid',
  '@mobile': {gridTemplateRows: '1fr 1fr',},
  '@desktop': {gridTemplateColumns: '1fr 1fr',},
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
  padding: '0 1.5rem',
  paddingBottom: '1.5rem',
  paddingTop: '8rem',
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  '@desktop': {minHeight: 'calc(2rem - 100vh)'},
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xl',
    color: '$green300'
  },

  p: {
    marginTop: '2.5rem',
    '@desktop': {fontSize: '$md'},
    '@mobile': {fontSize: '1rem'},
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    '@desktop': {marginTop: 'auto'},
    '@mobile': {marginTop: '2.5rem'},
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
});