// components/Accordion.js
import { useState } from 'react';
import AccordionItem from './AccordionItem/AccordionItem';
import styles from './Accordion.module.css'; 
import { useTranslations } from 'next-intl';



const Accordion = ({  }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const t = useTranslations('HomePage');
  const faqs = t.raw('faqsSection.accordion');

//  const { accordion } = pageData[section];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.test} `}>
      {faqs.map(({ id, title, content }) => (
        <AccordionItem
          key={id}
          title={title}
          content={content}
          id={id}
          isOpen={openIndex === id}
          toggleAccordion={() => handleToggle(id)}
        />
      ))} 
    </div>
  );
};

export default Accordion;
