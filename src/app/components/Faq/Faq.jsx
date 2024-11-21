import Accordion from '../Accordion/Accordion';
import styles from './Faq.module.css'; 
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const Faq = () => {
  const t = useTranslations('HomePage');
  
  return (
    <section id="faq" className={` container mx-auto px-5  my-6`}>

        <h2 className="font-26 textaHeavy text-black text-center font-semibold my-12">{t('faqsSection.title')}</h2>


        <Accordion />

    </section>
  );
}

export default Faq;
