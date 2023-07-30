import { Swiper } from 'swiper/react';
import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
});

export const SwiperContainer = styled( Swiper, {
  width: '100%',

  '@mobile': {
    ".swiper-slide": {
      width: 300
    },
  },

  '@desktop': {
    ".swiper-slide": {
      maxWidth: 520
    },
  },

  '.swiper-button-prev': {
    color: '$white',
  },
  '.swiper-button-next': {
    color: '$white',
  },
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      '&:first-child': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },

      '&:last-child': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '$white',
        backgroundColor: '$green500',
        padding: '1rem',
        borderRadius: 6,
      }
    },

    strong: {
      fontSize: '$md',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})