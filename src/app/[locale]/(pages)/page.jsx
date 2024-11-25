"use client";
import Header from "../../components/Header/Header";
import Benefits from "../../components/Benefits/Benefits";
import Featured from "../../components/Featured/Featured";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { countries, zones } from "moment-timezone/data/meta/latest.json";
import { useLocale } from 'next-intl';

import moment from "moment-timezone";

export default function Home({ }) {
  const landings = ["ar", "cl", "bo", "pe", "pe", "ec", "gt", "sv", "hn", "pa", "do", "py", "en"];
  const router = useRouter();
  const pathname = usePathname();

  console.log('Current pathname:', pathname); // Verifica el valor de pathname


  const [userCountry, setUserCountry] = useState(null);

  const locale = useLocale();

  

  useEffect(() => {
    console.log('Executing getGeoInfo...'); // Verificar si el useEffect se ejecuta

    const getGeoInfo = () => {
      const currentPath = pathname.slice(1); // Elimina la barra inicial "/"
      if (landings.includes(currentPath.toLowerCase())) {
        return; // No hacer nada si ya estás en una ruta válida
      }
  
      const timeZoneToCountry = {};
      console.log('User TimeZone:', moment.tz.guess()); // Log para depuración
  
  
      // Crear un mapa de zonas horarias a países
      Object.keys(zones).forEach((z) => {
        const cityArr = z.split("/");
        const city = cityArr[cityArr.length - 1];
        timeZoneToCountry[city] = countries[zones[z].countries[0]];
        console.log(city, timeZoneToCountry[city]); // Log para depuración
        
      });
  
  
      let userCity, detectedCountry;
  
      // Usar moment-timezone para obtener la zona horaria
      const userTimeZone = moment.tz.guess();
      const tzArr = userTimeZone.split("/");
      userCity = tzArr[tzArr.length - 1];
      detectedCountry = timeZoneToCountry[userCity];
  
      // Si detectamos un país, actualizar el estado
      if (detectedCountry) {
        setUserCountry(detectedCountry);
      }
    };

    getGeoInfo();
    console.log('Zones:', zones);

  }, []);

  useEffect(() => {
    if (userCountry) {
      console.log('User country detected:', userCountry); // Log para depuración
      const countryAbbr = userCountry.abbr.toLowerCase();
      const destination =
        countryAbbr === "do" ? "/rd" : `/${countryAbbr}`;

      console.log('Redirecting to:', destination); // Log para depuración
      if (landings.includes(countryAbbr)) {
        if (typeof window !== "undefined") {
          router.push(destination);
        }
      } else {
        console.log('Redirecting to /en'); // Log para depuración
        if (typeof window !== "undefined") {
          router.push("/en");
        }
      }
    }
  }, [userCountry, router]);

  return (
    <>
      <Header section="heroSection" />
      <Benefits section="benefitSection" />
      <Featured section="featuresSection" />
      {locale === 'hn' || locale === "bo" ? (
        ""
      ) : (
        <Banner section="bannerSection" />
      )}
      <Faq section="faqsSection" />
    </>
  );
}
