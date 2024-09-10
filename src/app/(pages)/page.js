import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Benefits from "../components/Benefits/Benefits";
import Featured from "../components/Featured/Featured";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Header />   
    <Benefits /> 
    <Featured />
    <Banner />
    <Footer />
    </>
  );
}
