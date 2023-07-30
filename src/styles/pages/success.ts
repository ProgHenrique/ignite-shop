import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 556,
  '@mobile': {padding: '0 1.5rem'},

  h1: {
    marginTop: '4rem',
    fontSize: '$2xl',
    lineHeight: '140%',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },

  a: {
    display: 'block',
    marginTop: '4rem',
    fontSize: '$lg',
    lineHeight: '160%',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  'div#imageProducts': {
    display: 'flex',
  },
})

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0 6px 20px 0 rgba(0, 0, 0, .8)',
  borderRadius: 1000,
  padding: '0.25rem',
  marginLeft: -52,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '&:first-child': {
    marginLeft: 0,
  }
})

