import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { countries } from 'moment-timezone/data/meta/latest.json';

export default function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // Obtener la zona horaria del usuario desde un encabezado (si se proporciona)
  const timezone = request.headers.get('x-user-timezone'); // Suponiendo que el cliente o proxy proporciona este header.

  // Si se detecta la zona horaria, determinar el país y redirigir
  if (timezone) {
    const country = Object.keys(countries).find((countryCode) =>
      countries[countryCode].zones.includes(timezone)
    );

    if (country === 'AR' && !pathname.startsWith('/ar')) {
      url.pathname = '/ar';
      return NextResponse.redirect(url);
    } else if (country === 'PE' && !pathname.startsWith('/pe')) {
      url.pathname = '/pe';
      return NextResponse.redirect(url);
    }
  }

  // Redirigir /es-AR a /ar
  if (pathname.startsWith('/es-AR')) {
    url.pathname = pathname.replace('/es-AR', '/ar');
    return NextResponse.redirect(url);
  }

  // Redirigir /es-PE a /pe
  if (pathname.startsWith('/es-PE')) {
    url.pathname = pathname.replace('/es-PE', '/pe');
    return NextResponse.redirect(url);
  }

  // Llama al middleware de next-intl para otros idiomas
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/', '/(es|en|es-AR|es-PE|ar|pe)/:path*'], // Asegúrate de que 'ar', 'pe', 'es-AR', y 'es-PE' estén capturados
};
