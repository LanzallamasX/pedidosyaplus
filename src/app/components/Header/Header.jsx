import Image from 'next/image';
import BgPromo from '../BgPromo/BgPromo';
import styles from './Header.module.css'; 
import MainButton from '../MainButton/MainButton';

import { pageData } from '@/app/data/data';

const Header = ({section}) => {

    const { title, promo, imageSrc, cta, } = pageData[section];


  return (

    <>
    <div className={`bg-[#090017] text-white ${styles.gradientBg} px-5`}>

        <div className='container mx-auto flex flex-col md:flex-row md:gap-4 px-5'>

            <div className='w-full md:w-1/2 justify-center items-center md:items-start flex gap-12 flex-col pb-6 md:pb-20'>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='textaBlack text-center md:text-left font-56 text-white xl:w-11/12 pb-6 md:pr-8'>
                        {title}
                    </h1>
                    <BgPromo >
                        por <span className='font-32 textaBlackItalic'>{promo.value}</span> al mes
                    </BgPromo>
                </div>

                <div className='hidden md:block'>
                    <MainButton textButton={cta} />
                </div>

            </div>

            <div className='w-full md:w-1/2 flex justify-center relative'>
                <Image className='absolute w-10/12 top-[-8px] md:top-[0px] ' src="/images/trama.svg" alt="Uruguay" width={489} height={550} />
                <Image className='z-10 w-4/5 md:w-[489px] pb-0 md:pt-2' src={imageSrc} alt="Pedidos Ya Plus" width={489} height={550} />
                <div className='block md:hidden absolute bottom-10 z-50'>
                    <MainButton textButton={cta} />
                </div>
            </div>

        </div>

    </div>
    </>
  );
}


export default Header;
