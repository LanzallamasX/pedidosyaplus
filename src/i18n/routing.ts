import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'ar', 'pe'], // Aquí 'ar' es para Argentina
  defaultLocale: 'es', // El idioma predeterminado es español
});

// Enlaces y navegación en la app
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
