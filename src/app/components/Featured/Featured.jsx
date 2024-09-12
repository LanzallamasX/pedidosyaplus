import CardFeatured from '../CardFeatured/CardFeatured';
import { pageData } from '@/app/data/data';


const Featured = ({section}) => {

  const {cards} = pageData[section]

  return (
      <div className=' mx-auto flex flex-col gap-4 '>
          <div className='flex flex-col md:flex-row'>
              {cards.map((card) => (
                    <CardFeatured 
                      key={card.id} 
                      imageSrc={card.imageSrc} 
                      alt={card.alt} 
                      title={card.title} 
                      description={card.description} 
                      bgColor={card.bgColor}
                      textColor={card.textColor}
                    />
                  ))}
            </div>
      </div>
  );
}

export default Featured;
