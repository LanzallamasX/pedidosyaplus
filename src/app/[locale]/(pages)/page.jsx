"use client";
import Header from "../../components/Header/Header";
import Benefits from "../../components/Benefits/Benefits";
import Featured from "../../components/Featured/Featured";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { countries, zones } from "moment-timezone/data/meta/latest.json";
import { useLocale } from "next-intl";

export default function Home() {
  const landings = ["AR", "CL", "BO", "PE", "EC", "GT", "SV", "HN", "PA", "DO", "PY", "EN"];
  const router = useRouter();
  const pathname = usePathname();
  const [redirectHandled, setRedirectHandled] = useState(false); // Controlar redirección
  const locale = useLocale();

  useEffect(() => {
    // Verificar si ya se manejó la redirección o si estamos en una ruta válida
    if (redirectHandled || landings.some((code) => pathname.includes(`/${code.toLowerCase()}`))) {
      return;
    }

    const getGeoInfo = () => {
      const timeZoneToCountry = {};

      Object.keys(zones).forEach((z) => {
        const cityArr = z.split("/");
        const city = cityArr[cityArr.length - 1];
        timeZoneToCountry[city] = countries[zones[z].countries[0]];
      });

      let userCity, userCountry, userTimeZone;
      if (Intl) {
        userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const tzArr = userTimeZone.split("/");
        userCity = tzArr[tzArr.length - 1];
        userCountry = timeZoneToCountry[userCity];
      } else {
        console.log("No Intl");
      }

      console.log('userCountry:', userCountry);
      console.log('userCountry.abbr:', userCountry?.abbr);

      console.log('Is userCountry.abbr in landings?', landings.includes(userCountry?.abbr));

      if (userCountry && landings.includes(userCountry.abbr)) {
        const targetPath = userCountry.abbr === "DO" ? "/rd" : `/${userCountry.abbr.toLowerCase()}`;

        // Solo redirigir si no estamos en la ruta correcta
        if (pathname !== targetPath) {
          router.push(targetPath);
        }
        setRedirectHandled(true); // Marcar que la redirección fue manejada
      }
    };

    getGeoInfo();
  }, [redirectHandled, pathname, router, landings]);

  return (
    <>
      <Header section="heroSection" />
      <Benefits section="benefitSection" />
      <Featured section="featuresSection" />
      {locale === "hn" || locale === "bo" ? (
        ""
      ) : (
        <Banner section="bannerSection" />
      )}
      <Faq section="faqsSection" />
    </>
  );
}
