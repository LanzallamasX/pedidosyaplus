"use client";
import Link from "next/link";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from "../components/Footer/Footer";
import Image from "next/image";



export default function Home({ }) {

  return (
    <>
      <section className="min-h-screen flex flex-col font-texta">

      <div className="bg-[#100423] text-white py-12 flex justify-center  items-center ">
        <div className="flex items-center">
            <Image src="/images/pedidosyaplus.svg" alt="Pedidos Ya Plus" width={212} height={27} />
          </div>
      </div>



        <div className=" px-6 py-8 flex justify-center items-center flex-1 h-full ">
          <div className="container flex flex-wrap w-full justify-center items-center gap-24 ">
                <Link
                  href={"/ar/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-ar h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Argentina</div>
                  </div>
                </Link>
                <Link
                  href={"/cl/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                      <span className="fi fi-cl h-10 rounded-peya text-4xl"></span>
                      <div >Chile</div>
                  </div>
                </Link>
                <Link
                  href={"/bo/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-bo h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Bolivia</div>
                  </div>
                </Link>  
                <Link
                  href={"/pe/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-pe h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Perú</div>
                  </div>
                </Link>
                <Link
                  href={"/ec/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-ec h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Ecuador</div>
                  </div>
                </Link>  
                <Link
                  href={"/gt/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-gt h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Guatemala</div>
                  </div>
                </Link> 
                <Link
                  href={"/sv/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-sv h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >El Salvador</div>
                  </div>
                </Link>   
                <Link
                  href={"/hn/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-hn h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Honduras</div>
                  </div>
                </Link>   
                <Link
                  href={"/pa/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-pa h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Panama</div>
                  </div>
                </Link>                                                   
                <Link
                  href={"/do/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-do h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >República Dominicana</div>
                  </div>
                </Link>
                <Link
                  href={"/py/"}
                  className="flex justify-center items-center w-full md:w-2/12"
                >
                  <div className="flex gap-2 items-center">
                    <span className="fi fi-py h-10 rounded-peya text-4xl"></span>
                    <div className="text-wrap" >Paraguay</div>
                  </div>
                </Link>                
            </div>
        </div>
        <div className="bg-[#100423] text-white py-9 "></div>

    
      </section>
  
  

      </>
  );
}
