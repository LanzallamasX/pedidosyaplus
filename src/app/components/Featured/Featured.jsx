import CardFeatured from '../CardFeatured/CardFeatured';
import { useTranslations } from 'next-intl';


const Featured = ({}) => {
  const t = useTranslations('HomePage');
  const keys = Object.keys(t.raw('featuresSection.cards'));
 

  return (
      <div className=' mx-auto flex flex-col gap-4 '>
          <div className='flex flex-col md:flex-row'>
            
              {keys.map((key) => (
                    <CardFeatured 
                      key={key}
                      imageSrc={t(`featuresSection.cards.${key}.imageSrc`)}
                      alt={t(`featuresSection.cards.${key}.alt`)}
                      title={t(`featuresSection.cards.${key}.title`)}
                      description={t(`featuresSection.cards.${key}.description`)}
                      bgColor={t(`featuresSection.cards.${key}.bgColor`)}
                      textColor={t(`featuresSection.cards.${key}.textColor`)}
                    />
                  ))}
                     
            </div>
      </div>
  );
}

export default Featured;
