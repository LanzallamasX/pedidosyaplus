import Image from 'next/image';

const Footer = () => {
    return (
    <nav className="bg-[#100423] text-white py-12 ">
      <div className="container mx-auto flex flex-col justify-between items-center gap-8 px-5">
        
        <div className="flex items-center">
           <Image src="/images/pedidosyaplusIso.svg" alt="Pedidos Ya Plus" width={85} height={54} />
        </div>

        <div className="flex items-center space-x-6 textaRegular font-18">
          <p className='font-14'>© 2024  PedidosYa</p>
          <a href="#" className="font-14 hover:text-gray-400">Términos y Condiciones</a>
          <a href="#" className="font-14 hover:text-gray-400">Politica de privacidad</a>
        </div>
        
      </div>
    </nav>
  );
}


export default Footer;
