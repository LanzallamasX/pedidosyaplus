import Image from 'next/image';
import styles from './CardFeatured.module.css'; 

const CardFeatured = ({ imageSrc, alt, title, description, bgColor, textColor }) => {

  return (

    <>
            <div className={`flex flex-col ${bgColor} justify-between w-full md:w-1/2 items-center px-12 `}>
                <div className='flex flex-col items-center justify-start w-full md:w-1/2 py-20'>
                    <Image src={imageSrc} alt={alt} width={90} height={64} className="mb-4" />
                    <h3 className={`font-26 textaBlack ${textColor} text-center`}>
                        {title}
                    </h3>
                    <p className={`font-22 textaRegular ${textColor} text-center mt-2`}>
                      {description}                    
                    </p>
                </div>
                <div className='h-2 w-full'></div>
            </div>
    </>
  );
}


export default CardFeatured;
