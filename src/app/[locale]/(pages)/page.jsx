"use client";
import Header from "../../components/Header/Header";
import Benefits from "../../components/Benefits/Benefits";
import Featured from "../../components/Featured/Featured";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Menu from "../../components/Menu/Menu";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { countries, zones } from "moment-timezone/data/meta/latest.json";
import { useLocale } from 'next-intl';

export default function Home({ }) {
  const landings = ["AR", "CL", "BO", "PE", "EC", "GT", "SV", "HN", "PA", "DO", "PY", "EN"];
  const router = useRouter();
  const pathname = usePathname();
  const [userCountry, setUserCountry] = useState(null);
  const locale = useLocale();

  useEffect(() => {
    const getGeoInfo = () => {
      const timeZoneToCountry = {};
  
      Object.keys(zones).forEach(z => {
        const cityArr = z.split('/');
        const city = cityArr[cityArr.length-1];
        timeZoneToCountry[city] = countries[zones[z].countries[0]];
      });
  
      let userCity, userCountry, userTimeZone;
      if (Intl) {
        userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const tzArr = userTimeZone.split('/');
        userCity = tzArr[tzArr.length-1];
        userCountry = timeZoneToCountry[userCity];
      } else {
        console.log('No Intl');
      }

      setUserCountry(userCountry);  
    };

    getGeoInfo();
  }, []);  

  useEffect(() => {
    // Solo  si estamos en la página /landing o en la raíz (/)
    if (userCountry && (pathname === '/' || pathname === '/landing')) {
      console.log('userCountry:', userCountry);
      console.log('Is userCountry.abbr in landings?', landings.includes(userCountry?.abbr));

      if (landings.includes(userCountry.abbr)) {
        if (userCountry.abbr === 'DO') {
          router.push('/do');
        } else {
          router.push(`/${userCountry.abbr.toLowerCase()}`);
        }
      } else {
        router.push('/landing'); 
      }
    }
  }, [userCountry, pathname, router]);

  return (
    <>
      {locale === 'landing' ? (
        <Menu />
      ) : (
        <>
          <NavBar />
          <Header section="heroSection" />
          <Benefits section="benefitSection" />
          <Featured section="featuresSection" />
          {locale === 'hn' || locale === "bo" ? (
            ""
          ) : (
            <Banner section="bannerSection" />
          )}
          <Faq section="faqsSection" />
          <Footer/>
        </>
      )}
    </>
  );
}
