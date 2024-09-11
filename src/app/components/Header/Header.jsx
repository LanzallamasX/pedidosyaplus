import Image from 'next/image';
import BgPromo from '../BgPromo/BgPromo';
import styles from './Header.module.css'; 
import MainButton from '../MainButton/MainButton';

import { pageData } from '@/app/data/data';

const Header = ({section}) => {

  return (

    <>
    <div className={`bg-[#090017] text-white ${styles.gradientBg} px-5`}>

        <div className='container mx-auto flex flex-col md:flex-row gap-4 px-5'>

            <div className='w-full md:w-1/2 justify-around items-center md:items-start flex gap-8 flex-col'>
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className='textaBlack text-center md:text-left font-48 text-white xl:w-2/3 pb-6'>
                        Envíos gratis ilimitados y descuentos exclusivos en miles de locales    
                    </h1>
                    <BgPromo >
                        por <span className='font-32 textaBlackItalic'>$3990</span> al mes
                    </BgPromo>
                </div>
                <div className='hidden md:block'>
                    <MainButton />
                </div>
            </div>

            <div className='w-full md:w-1/2 flex justify-center relative'>
                <Image className='absolute w-10/12  ' src="/images/trama.svg" alt="Uruguay" width={489} height={550} />
                <Image className='z-10 w-4/5 md:w-[489px]' src="/images/girlHero.png" alt="girl" width={489} height={550} />
                <div className='block md:hidden absolute bottom-10 z-50'>
                    <MainButton />
                </div>
            </div>

        </div>

    </div>
    </>
  );
}


export default Header;
