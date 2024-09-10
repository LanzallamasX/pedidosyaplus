import styles from './Featured.module.css'; 
import Image from 'next/image';
import CardFeatured from '../CardFeatured/CardFeatured';

const FeaturedData = [
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

];

const Featured = () => {
  return (
      <div className=' mx-auto flex flex-col gap-4 '>
          <div className='flex'>
              {FeaturedData.map((featuredCard) => (
                    <CardFeatured 
                      key={featuredCard.id} 
                      imageSrc={featuredCard.imageSrc} 
                      alt={featuredCard.alt} 
                      title={featuredCard.title} 
                      description={featuredCard.description} 
                      bgColor={featuredCard.bgColor}
                      textColor={featuredCard.textColor}
                    />
                  ))}
            </div>
      </div>
  );
}

export default Featured;
