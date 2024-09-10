import Image from 'next/image';
import BgPromo from '../BgPromo/BgPromo';
import styles from './Header.module.css'; 
import MainButton from '../MainButton/MainButton';

const Header = () => {

  return (

    <>
    <div className={`bg-[#090017] text-white ${styles.gradientBg} px-5`}>

        <div className='container mx-auto flex gap-4 px-5'>

            <div className='w-1/2 justify-around items-start flex gap-8 flex-col'>
                <div className=''>
                    <h1 className='textaBlack font-48 text-white xl:w-2/3 pb-6'>
                        Envíos gratis ilimitados y descuentos exclusivos en miles de locales    
                    </h1>
                    <BgPromo >
                        por <span className='font-32 textaBlackItalic'>$3990</span> al mes
                    </BgPromo>
                </div>
                <div>
                    <MainButton />
                </div>
            </div>

            <div className='w-1/2 flex justify-center relative'>
                <Image className='absolute w-10/12  ' src="/images/trama.svg" alt="Uruguay" width={489} height={550} />
                <Image className='z-10' src="/images/girlHero.png" alt="girl" width={489} height={550} />

            </div>

        </div>

    </div>
    </>
  );
}


export default Header;
