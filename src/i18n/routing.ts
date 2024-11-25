import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ["ar", "cl", "bo", "pe", "ec", "gt", "sv", "hn", "pa", "do", "py", "en"], // Aquí 'ar' es para Argentina
  defaultLocale: 'en', // El idioma predeterminado es español
});

// Enlaces y navegación en la app
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
