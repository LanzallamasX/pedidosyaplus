// data.js
export const pageData = {
    heroSection: {
      title: 'Envíos gratis ilimitados y descuentos exclusivos en miles de locales',
      promo: [
        {
          textIntro: `por`,
          value: `$3990`,
          textEnd: `al mes`,
        },
      ],
      imageSrc: `/images/girlHero.png`,
    },

    benefitSection: {
        title: `Con Plus disfrutá:`,
        cards: [
          {
            id: 1,
            imageSrc: '/images/icon1.png',
            alt: 'Envios',
            title: 'Envíos gratis ilimitados',
            description: 'en miles de locales'
          },
          {
            id: 2,
            imageSrc: '/images/icon2.png',
            alt: 'Promociones',
            title: 'Promociones exclusivas',
            description: 'en restaurantes y supermercados'
          },
          {
            id: 3,
            imageSrc: '/images/icon3.png',
            alt: 'Descuentos',
            title: 'Descuentos y beneficios',
            description: 'con medios de pago'
          }
        ],
      },


    featuresSection: {
        cards: [
          {
            id: 1,
            imageSrc: '/images/icon4.png',
            alt: 'Envios',
            title: 'Envíos gratis ilimitados',
            description: 'En tus pedidos de restaurantes, supermercados, farmacias, bebidas y más. Disfrutá este beneficio en tus locales preferidos.',
            bgColor: 'bg-red',
            textColor: 'text-white'
          },
          {
            id: 2,
            imageSrc: '/images/icon3.png',
            alt: 'Promociones',
            title: 'Descuentos Exclusivos',
            description: 'Descuentos exclusivos en los locales que más te gustan y promociones nuevas todas las semanas.',
            bgColor: 'bg-green',
            textColor: 'text-black'
          },
        ],
      },

      bannerSection: {
        title: 'Envíos gratis ilimitados y descuentos exclusivos en miles de locales',
        promo: [
          {
            textIntro: ``,
            value: `4 MESES GRATIS`,
            textEnd: ``,
            imageSrc: `/images/girlHero.png`,
            disclaimer: `* Válido para nuevos usuarios de Spotify Premium. Aplican Términos y Condiciones`
          },
        ],
        
        imageSrc: `/images/girlHero.png`,
      },

  };
  