import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-[#100423] text-white py-12 ">
      <div className="container mx-auto flex justify-between items-center px-5">
        
        <div className="flex items-center">
           <Image src="/images/pedidosyaplus.svg" alt="Pedidos Ya Plus" width={212} height={27} />
        </div>

        <div className="flex items-center space-x-6 textaRegular font-18">
          <a href="#" className="hover:text-gray-400">BENEFICIOS</a>
          <a href="#" className="hover:text-gray-400">PREGUNTAS FRECUENTES</a>
          <a href="#" className="hover:text-gray-400">SUSCRIBITE</a>
          {/* Country Selector */}
          <div className="flex items-center space-x-1">
            <Image src="/images/flag-uy.png" alt="Uruguay" width={24} height={16} />
            <span>▼</span>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
