import styles from './Benefits.module.css'; 
import CardBenefits from '../CardBenefits/CardBenefits';
import Image from 'next/image';

const benefitsData = [
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
];

const Benefits = () => {
  return (
    <div className={`px-5`}>
      <div className='container mx-auto flex flex-col gap-4 py-12'>

      <h2 className="font-26 textaHeavy text-center font-semibold mb-9">Con Plus disfrutá:</h2>

        <div className="flex mx-auto justify-center space-x-8">
          {benefitsData.map((benefit) => (
            <CardBenefits 
              key={benefit.id} 
              imageSrc={benefit.imageSrc} 
              alt={benefit.alt} 
              title={benefit.title} 
              description={benefit.description} 
            />
          ))}
        </div>  


      </div>
    </div>
  );
}

export default Benefits;
