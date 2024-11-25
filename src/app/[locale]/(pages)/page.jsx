"use client";
import Header from "../../components/Header/Header";
import Benefits from "../../components/Benefits/Benefits";
import Featured from "../../components/Featured/Featured";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { countries, zones } from "moment-timezone/data/meta/latest.json";

import { useLocale } from 'next-intl';


export default function Home({ locales }) {
  const landings = ["ar", "cl", "bo", "pe", "pe", "ec", "gt", "sv", "hn", "pa", "do", "py", "en"];
  const router = useRouter();
  const pathname = usePathname();
  const timeZoneToCountry = {};

  const locale = useLocale();

  const getGeoInfo = () => {
   // alert("test");
    // Si ya estás en una ruta válida, no redirigir
    const currentPath = pathname.slice(1); // Elimina la barra inicial "/"
    if (landings.includes(currentPath.toLowerCase())) {
      return; // No hacer nada si ya estás en una ruta válida 
    }



    Object.keys(zones).forEach((z) => {
      const cityArr = z.split("/");
      const city = cityArr[cityArr.length - 1];
      timeZoneToCountry[city] = countries[zones[z].countries[0]];
      console.log(timeZoneToCountry)

    });

    let userCity, userCountry, userTimeZone;

    if (Intl) {
      userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const tzArr = userTimeZone.split("/");
      userCity = tzArr[tzArr.length - 1];
      userCountry = timeZoneToCountry[userCity];
    } else {
      console.log("No Intl available");
    }

    // Redirigir solo si no estás en una ruta válida
    if (userCountry && landings.includes(userCountry.abbr.toLowerCase())) {
      const destination =
        userCountry.abbr === "DO" ? "/rd" : `/${userCountry.abbr.toLowerCase()}`;
      router.push(destination);
    } else {
      // Redirección predeterminada si no se puede detectar la ubicación
      router.push("/en");
    }



  };

  useEffect(() => {

    getGeoInfo();
  }, []);

  return (
    <>
      <Header section="heroSection" />
      <Benefits section="benefitSection" />
      <Featured section="featuresSection" />
      {
        locale === 'hn' || locale === "bo" ? ( 
          ""
        )
        :
        ( 
          <Banner section="bannerSection" />
        )
      }
      
      <Faq section="faqsSection" />
    </>
  );
}
