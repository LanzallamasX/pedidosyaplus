  // components/AccordionItem.js
  import { useRef, useEffect } from 'react';
  import { gsap } from 'gsap';
  import styles from './AccordionItem.module.css';

  const AccordionItem = ({ title, content, id, isOpen, toggleAccordion, className  }) => {
    const contentRef = useRef(null);
    const openOloseRef = useRef(null);
    const rowRef = useRef(null);
    const animationRowRef = useRef(null);


    useEffect(() => {
      const contentElement = contentRef.current;
      

      if (isOpen) {
        gsap.to(contentElement, {
          height: contentElement.scrollHeight,
          duration: 0.5,
          ease: 'power2.inOut',
        });
        gsap.to(openOloseRef.current, { rotation: 180, duration: 0.5, ease: "power3.inOut" }, "<")

      } else {
        gsap.to(contentElement, {
          height: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });
        gsap.to(openOloseRef.current, { rotation: 0, duration: 0.5, ease: "power3.inOut" }, "<")

      }
    }, [isOpen]);


    const handleRowMouseEnter = () => {
      animationRowRef.current.play();
    };
  
    const handleRowMouseLeave = () => {
      animationRowRef.current.reverse();
    };
  

    return (
      <div ref={rowRef} className={`${styles.accordion} ${className}`} >
        <div className='container w-full md:w-11/12 mx-auto px-5 md:px-5  md:py-4  border-b '>

          <div className='flex justify-between items-start md:items-center' onClick={toggleAccordion}>
              <div className='flex flex-row md:flex-row md:justify-start gap-2 md:gap-4'>
                    <span className='textaAltaMedium font-18 self-center text-gray-300 pt-2 pr-2'>{id}</span>
                    <button className={`${styles.accordionHeader}`} onClick={toggleAccordion}>
                      <h3 className='text-left textaAltaMedium text-black font-22'>{title}</h3>
                    </button>
                  
              </div>
              <div className='flex justify-center self-center items-center'>          
                  <button className="p-2 text-black-400 hover:text-black-500 hover:border-gray-500 ">
                    <svg ref={openOloseRef} className="w-6 h-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron">
                    <path id="Arrow 1 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M16.7659 20.7704C16.3416 21.1946 15.6537 21.1944 15.2296 20.77L8.31797 13.8543C7.89384 13.4299 7.89404 12.7421 8.31841 12.318C8.74279 11.8938 9.43065 11.894 9.85478 12.3184L15.9984 18.4657L22.1457 12.322C22.57 11.8979 23.2579 11.8981 23.682 12.3224C24.1062 12.7468 24.106 13.4347 23.6816 13.8588L16.7659 20.7704Z" fill="black"/>
                    </g>
                    </svg>
                  </button>
              </div>   
          </div>  

            <div
              className={`${styles.accordionContent} flex flex-col`}
              ref={contentRef}
              style={{ height: 0, overflow: 'hidden' }}
            >
              <div className={`${styles.accordionInnerContent} textaRegular font-20 w-full text-gray-400 pl-9 md:pl-12 pr-12 pb-6 pt-6`}>
                {content}
              </div>
    
            </div>

        </div>
      </div>
    );
  };

  export default AccordionItem;
