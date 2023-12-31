import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import golbal_es from "./translations/es/global.json";
import golbal_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: golbal_es,
    },
    en: {
      global: golbal_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
