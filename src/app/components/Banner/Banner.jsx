import styles from './Banner.module.css'; 
import Image from 'next/image';
import BgPromo from '../BgPromo/BgPromo';
import MainButton from '../MainButton/MainButton';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useTranslations } from 'next-intl';

const BannerData = [
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

const Banner = ({ locales }) => {
  const t = useTranslations('HomePage');


  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (

    <>
    <section id="banner" className={`bg-[#090017] text-white ${styles.gradientBg} flex flex-col md:flex-row px-5 pt-20 overflow-hidden`}>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-6 md:gap-4 relative'>
                <div>
                  <BgPromo >
                    <span className='font-40 textaBlackItalic'>{t('bannerSection.promo.value')}</span>
                  </BgPromo>
                </div>
                <Image className='mix-blend-lighten' src={t('bannerSection.promo.imagePromo')} alt="girl" width={260} height={30} />
                <p className='font-14 textaAltaMedium w-8/12 md:w-4/12 text-center pb-9'>
                <a onClick={openModal} className="font-14 text-center cursor-pointer hover:text-gray-400">{t('bannerSection.promo.disclaimer')}</a>
                </p>
            </div>

            <div className='w-full md:w-1/2 flex justify-center md:justify-start relative'>
                <Image className='absolute top-[80px] left-[0px] md:left-[250px] w-full md:w-6/12' src="/images/tramaBanner.svg" alt="Uruguay" width={463} height={294} />
                <Image className='z-10' src={t('bannerSection.promo.imageSrc')} alt="girl" width={506} height={390} />

            </div>
    </section>

    <div className='flex justify-center items-center py-16 bg-green' >
        <MainButton textButton={t('bannerSection.cta')} />
    </div>

    <Modal isOpen={isModalOpen} onClose={closeModal} content={t('bannerSection.disclaimer')} logo={t('bannerSection.logo')} />

    </>

  );
}

export default Banner;
