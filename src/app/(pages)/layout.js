'use client'
import NavBar from "../components/NavBar/NavBar"

export default function RootLayout({ children }) {


  return (
    <>
        <NavBar />

          <main className="overflow-hidden">
            {children}
          </main>

     </>
  )
}
