import styles from './Benefits.module.css'; 
import CardBenefits from '../CardBenefits/CardBenefits';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';  // Importar estilos de paginación
import 'swiper/css/autoplay';    // Importar estilos de autoplay (opcional)
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import { pageData } from '@/app/data/data';


const Benefits = ({section}) => {

  const { title, cards } = pageData[section];


  return (
    <section id="benefits" className={`px-5 bg-green md:bg-white`}>
      <div className='container mx-auto flex flex-col gap-4 py-12'>

      <h2 className="font-26 textaHeavy text-center text-black mb-4">{title}</h2>

        <div className=" w-10/12 sm:8/12 md:w-full lg:w-11/12 xl:w-8/12 mx-auto gap-4">
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

          750: {
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


          760: {
            slidesPerView: 3,
            centeredSlides: false,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
          },


          960: {
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



      {cards.map((card) => (
        <SwiperSlide key={card.id} className={`${styles.shadow}`}>
          <CardBenefits 
            imageSrc={card.imageSrc} 
            alt={card.alt} 
            title={card.title} 
            description={card.description} 
          />
        </SwiperSlide>
      ))}


        
      </Swiper>
    </div>





      </div>
    </section>
  );
}

export default Benefits;
