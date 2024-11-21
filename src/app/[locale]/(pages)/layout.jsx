'use client'
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer";

export default function RootLayout({ children }) {

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
