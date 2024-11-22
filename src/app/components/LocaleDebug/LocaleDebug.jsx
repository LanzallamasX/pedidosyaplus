'use client';
import {useLocale} from 'next-intl';

export default function LocaleDebug() {
  const locale = useLocale();

  return (
    <div>
      <p>Current locale: {locale}</p>
    </div>
  );
}
