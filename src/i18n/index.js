
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        specialties: "Specialties",
        experience: "Experience",
        research: "Research",
        contact: "Contact",
        appointment: "Book Appointment",
        language: "Language",
        location: "Rifah Medical Complex · Kabul, Afghanistan",
        title: "Consultant Neurosurgeon",
      },
    },
  },

  fa: {
    translation: {
      nav: {
        home: "صفحه اصلی",
        about: "درباره داکتر",
        specialties: "تخصص‌ها",
        experience: "تجربه کاری",
        research: "تحقیقات",
        contact: "تماس با ما",
        appointment: "گرفتن وقت ملاقات",
        language: "زبان",
        location: "مجتمع طبی رفاه · کابل، افغانستان",
        title: "متخصص جراحی مغز و اعصاب",
      },
    },
  },

  ps: {
    translation: {
      nav: {
        home: "کور",
        about: "د ډاکټر په اړه",
        specialties: "تخصصونه",
        experience: "کاري تجربه",
        research: "څېړنې",
        contact: "اړیکه",
        appointment: "د ملاقات وخت واخلئ",
        language: "ژبه",
        location: "رفاه طبي کمپلکس · کابل، افغانستان",
        title: "د عصبي جراحۍ متخصص",
      },
    },
  },
};

const languageDirections = {
  en: "ltr",
  fa: "rtl",
  ps: "rtl",
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "fa", "ps"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

function updateDocumentLanguage(language) {
  const supportedLanguage = languageDirections[language] ? language : "en";

  document.documentElement.lang =
    supportedLanguage === "fa"
      ? "fa-AF"
      : supportedLanguage === "ps"
        ? "ps-AF"
        : "en";

  document.documentElement.dir = languageDirections[supportedLanguage];
}

updateDocumentLanguage(i18n.language);

i18n.on("languageChanged", updateDocumentLanguage);

export default i18n;
