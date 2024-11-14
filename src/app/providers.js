// app/providers.js
'use client';

import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/navigation';
// import nextI18NextConfig from '../next-i18next.config.js'

function Providers({ children }) {
  return children;
}

export default appWithTranslation(Providers, /*, nextI18NextConfig */);
