'use client'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";


export default function RootLayout({ children }) {

  useEffect(() => {
    // Obtener la zona horaria del usuario
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Establecer la zona horaria en una cookie
    document.cookie = `x-user-timezone=${timezone}; path=/`;
  }, []);  

  return (
    <>
        <NavBar />
        <main className="overflow-hidden">
          {children}
        </main>
        <Footer/>  
    </>
  )
}
