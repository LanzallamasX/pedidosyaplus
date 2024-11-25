import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|cl|bo|pe|ec|gt|sv|hn|pa|do|py|en)/:path*']
};