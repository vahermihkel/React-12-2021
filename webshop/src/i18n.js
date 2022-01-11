import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    EN: {
      translation: {
        "navbar": {
          "admin-link": "Administration view",
          "cart-link": "Cart"
        },
        "home": {
          "add-cart-button": "Add to cart"
        }
      }
    },
    EE: {
      translation: {
        "navbar": {
          "admin-link": "Administraatori vaatesse",
          "cart-link": "Ostukorv"
        },
        "home": {
          "add-cart-button": "Lisa ostukorvi"
        }
      }
    },
    RU: {
      translation: {
        "navbar": {
          "admin-link": "RU Administraatori vaatesse",
          "cart-link": "RU Ostukorv"
        },
        "home": {
          "add-cart-button": "RU Lisa ostukorvi"
        }
      }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("language"), 
    fallbackLng: "EE",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;