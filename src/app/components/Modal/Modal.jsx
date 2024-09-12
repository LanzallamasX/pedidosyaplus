import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, content, logo }) => {


  const modalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      gsap.to(modalRef.current, {
        autoAlpha: 0,
        y: -50,
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white flex flex-col p-8 rounded-lg shadow-lg w-1/2 max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
          <Image className='self-center mb-6' src={logo} alt="Pedidos ya plus" width={145} height={63} />
        {/* Contenedor de texto scrolleable */}
        <div className="overflow-y-auto max-h-72 whitespace-pre-line text-left">
          {content}
          
        </div>
        <div className='self-center mt-9 cursor-pointer' onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
