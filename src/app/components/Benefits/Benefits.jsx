import styles from './Benefits.module.css'; 
import CardBenefits from '../CardBenefits/CardBenefits';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';  // Importar estilos de paginación
import 'swiper/css/autoplay';    // Importar estilos de autoplay (opcional)
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

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
    <div className={`px-5 bg-green md:bg-white`}>
      <div className='container mx-auto flex flex-col gap-4 py-12'>

      <h2 className="font-26 textaHeavy text-center font-semibold mb-9">Con Plus disfrutá:</h2>


{/*
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
*/
        }




        <div className="w-8/12 mx-auto gap-4">
      <Swiper
        spaceBetween={10}
        effect="coverflow"
        grabCursor={false}
        centeredSlides={false}
        slidesPerView={3} 
        pagination={{
          clickable: true, 
        }}
        autoplay={{
          delay: 200000000, 
          disableOnInteraction: false, 
        }}
        loop={false}
        modules={[EffectCoverflow, Pagination, Autoplay]} 
        className="swiper-container"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
          },
          1024: {
            slidesPerView: 3,
            centeredSlides: false,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 0,
              slideShadows: false,
            },
          },
        }}
      >



      {benefitsData.map((benefit) => (
        <SwiperSlide key={benefit.id} className={`${styles.shadow}`}>
          <CardBenefits 
            imageSrc={benefit.imageSrc} 
            alt={benefit.alt} 
            title={benefit.title} 
            description={benefit.description} 
          />
        </SwiperSlide>
      ))}


        
      </Swiper>
    </div>





      </div>
    </div>
  );
}

export default Benefits;
