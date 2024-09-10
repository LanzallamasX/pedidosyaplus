import Accordion from '../Accordion/Accordion';
import styles from './Faq.module.css'; 
import Image from 'next/image';

const FaqData = [
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

const Faq = () => {
  return (
    <div className={` container mx-auto px-5  my-6`}>

        <h2 className="font-26 textaHeavy text-black text-center font-semibold my-12">Preguntas frecuentes</h2>


        <Accordion />

    </div>
  );
}

export default Faq;
