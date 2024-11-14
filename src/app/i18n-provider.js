// app/i18n-provider.js
"use client"; // Asegúrate de incluir esto para permitir el uso de hooks en el cliente
import { appWithTranslation } from "next-i18next";

function I18nProvider({ children }) {
  return children;
}

export default appWithTranslation(I18nProvider);
