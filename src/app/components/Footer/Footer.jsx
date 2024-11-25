import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useTranslations } from 'next-intl';


const Footer = ({section}) => {
  const t = useTranslations('HomePage.footerSection');



  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    return (

      <>
    <footer className="bg-[#100423] text-white py-12 ">
      <div className="container mx-auto flex flex-col justify-between items-center gap-8 px-5">
        
        <div className="flex items-center">
           <Image src="/images/pedidosyaplusIso.svg" alt="Pedidos Ya Plus" width={85} height={54} />
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center textaRegular font-18">
          <p className='font-14 text-center'>© 2024  PedidosYa</p>
          <a href={t('TyC')} target='_blank' className="font-14 text-center hover:text-gray-400 cursor-pointer">Términos y Condiciones</a>
          <a href={t('PP')} target='_blank' className="font-14 text-center hover:text-gray-400 cursor-pointer">Politica de privacidad</a>
        </div>
        
      </div>
    </footer>

    <Modal isOpen={isModalOpen} onClose={closeModal} content={t('disclaimer')} logo={t('logo')} />
    </>
  );
}


export default Footer;