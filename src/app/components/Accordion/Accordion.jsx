// components/Accordion.js
import { useState } from 'react';
import AccordionItem from './AccordionItem/AccordionItem';
import styles from './Accordion.module.css'; 
import { pageData } from '@/app/data/data';

const faqData = [
  {
    id: '01',
    title: '¿Qué tener en cuenta para los envíos  gratis o con descuento?',
    content: 'Tu pedido debe cumplir con los montos mínimos establecidos tanto para restaurantes como para mercados, el pago puede ser online o en efectivo y la entrega debe estar a cargo de PedidosYa. La mayoría de los locales disponibles en la app cumplen con estas condiciones.'
  },
  {
    id: '02',
    title: '¿Qué tener en cuenta para los beneficios de PedidosYa Market?',
    content: 'en restaurantes y supermercados'
  },
  {
    id: '03',
    title: '¿Puedo cancelar cuando quiera?',
    content: 'con medios de pago'
  },
  {
    id: '04',
    title: '¿Cuales son los requisitos para acceder al beneficio de hasta 4 meses gratis de Spotify Premium?',
    content: 'con medios de pago'
  }
  ,
  {
    id: '05',
    title: 'Soy usuario Plus. ¿Cómo puedo activar mi beneficio de Spotify Premium?',
    content: 'con medios de pago'
  }
];

const Accordion = ({ section }) => {
  const [openIndex, setOpenIndex] = useState(null);
//  const { accordion } = pageData[section];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.test} `}>
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          id={item.id}
          isOpen={openIndex === index}
          toggleAccordion={() => handleToggle(index)}
        />
      ))} 
    </div>
  );
};

export default Accordion;
