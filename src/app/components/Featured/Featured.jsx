import CardFeatured from '../CardFeatured/CardFeatured';
import { useTranslations } from 'next-intl';


const Featured = ({}) => {
  const t = useTranslations('HomePage');


  return (
      <div className=' mx-auto flex flex-col gap-4 '>
          <div className='flex flex-col md:flex-row'>
            {/*
              {cards.map((card) => (
                    <CardFeatured 
                      key={t('featuresSection.cards.id')}
                      imageSrc={t('featuresSection.cards.imageSrc')}
                      alt={t('featuresSection.cards.alt')}
                      title={t('featuresSection.cards.title')}
                      description={t('featuresSection.cards.description')}
                      bgColor={t('featuresSection.cards.bgColor')}
                      textColor={t('featuresSection.cards.textColor')}
                    />
                  ))}
                     */}
            </div>
      </div>
  );
}

export default Featured;
