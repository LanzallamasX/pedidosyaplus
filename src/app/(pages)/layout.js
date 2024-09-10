'use client'
import NavBar from "../components/NavBar/NavBar"

export default function RootLayout({ children }) {


  return (
    <>
        <NavBar />

          <main>
            {children}
          </main>

     </>
  )
}
