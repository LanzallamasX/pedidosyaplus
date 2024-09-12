import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-[#100423] text-white py-12 ">
      <div className="container mx-auto flex justify-center md:justify-between items-center px-5">
        
        <div className="flex items-center">
           <Image src="/images/pedidosyaplus.svg" alt="Pedidos Ya Plus" width={212} height={27} />
        </div>

        <div className="hidden md:flex items-center space-x-6 textaRegular font-18">
          <Link href="#benefits" className="hover:text-gray-400">BENEFICIOS</Link>
          <Link href="#faq" className="hover:text-gray-400">PREGUNTAS FRECUENTES</Link>
          <Link href="#" className="hover:text-gray-400">SUSCRIBITE</Link>
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
