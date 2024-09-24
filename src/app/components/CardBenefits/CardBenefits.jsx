import Image from 'next/image';
import styles from './CardBenefits.module.css'; 

const CardBenefits = ({ imageSrc, alt, title, description }) => {

  return (

    <>
     <div className='mx-2'>
        <div className="bg-white p-6 rounded-[30px] border border-[#D6D6D6] shadow-md flex flex-col items-center justify-center text-center w-full h-64">
          <div className='flex flex-col justify-stretch h-full '>
              <div className='flex flex-col items-center pt-6 pb-0 '>
                <Image src={imageSrc} alt={alt} width={90} height={64} className="mb-4" />
              </div>
              <div className='flex flex-col '>
                  <h3 className="font-22 textaBlack text-black">{title}</h3>
                <p className="font-22 textaRegular text-gray-600 pt-0">{description}</p>
              </div>
              <div className='h-2 w-full'></div>
          </div>
        </div>
      </div>
    </>
  );
}


export default CardBenefits;
