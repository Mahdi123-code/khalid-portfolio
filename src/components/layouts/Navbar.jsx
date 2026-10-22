
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Brain,
  Menu,
  X,
  CalendarCheck,
  ArrowUpRight,
  ChevronRight,
  ChevronDown,
  Languages,
  Check,
} from "lucide-react";

const navLinks = [
  { key: "home", href: "/", type: "route" },
  { key: "about", href: "/about", type: "route" },
  { key: "specialties", href: "#specialties", type: "section" },
  { key: "experience", href: "/experience", type: "route" },
  { key: "research", href: "#research", type: "section" },
  { key: "contact", href: "#contact", type: "section" },
];

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "fa", label: "Dari", native: "دری" },
  { code: "ps", label: "Pashto", native: "پښتو" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const currentLanguage = languages.find(
    (language) => language.code === i18n.resolvedLanguage
  ) || languages[0];

  const isRTL = currentLanguage.code === "fa" || currentLanguage.code === "ps";

  const changeLanguage = async (code) => {
    await i18n.changeLanguage(code);
    setLanguageOpen(false);
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLanguageOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter((item) => item.type === "section")
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) {
          const matched = navLinks.find(
            (item) => item.href === `#${section.id}`
          );

          if (matched) current = matched.key;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
    setLanguageOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLanguageOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const linkClass = (key) =>
    `relative whitespace-nowrap py-2 text-[13px] font-semibold transition-colors duration-300 ${
      activeSection === key
        ? "text-teal-700"
        : "text-slate-600 hover:text-teal-700"
    }`;

  const renderLanguageOptions = (mobile = false) => (
    <div className={mobile ? "grid grid-cols-3 gap-2" : "space-y-1"}>
      {languages.map((language) => {
        const selected = currentLanguage.code === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            aria-pressed={selected}
            className={
              mobile
                ? `flex min-h-[76px] flex-col items-center justify-center gap-2 rounded-2xl border px-2 transition-all ${
                    selected
                      ? "border-teal-200 bg-teal-50 text-teal-800"
                      : "border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-slate-50"
                  }`
                : `flex w-full items-center justify-between gap-4 rounded-xl px-3 py-3 text-left transition-colors ${
                    selected
                      ? "bg-teal-50 text-teal-800"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                  }`
            }
          >
            <span className={mobile ? "text-center" : "flex flex-col"}>
              <span className="block text-sm font-bold">
                {language.native}
              </span>

              <span
                className={`block text-[11px] ${
                  mobile ? "mt-1" : "mt-0.5"
                } ${selected ? "text-teal-700" : "text-slate-400"}`}
              >
                {language.label}
              </span>
            </span>

            {selected && (
              <Check
                size={16}
                className={mobile ? "hidden" : "shrink-0 text-teal-700"}
              />
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/95 shadow-[0_8px_30px_rgba(20,43,69,0.06)] backdrop-blur-xl"
          : "border-slate-100 bg-white"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-7 lg:h-[84px] lg:px-10"
      >
        {/* BRAND */}
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            setActiveSection("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Dr. Khalid Khan Zadran home"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white sm:h-12 sm:w-12">
            <Brain size={25} strokeWidth={1.8} />

            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-teal-500" />
          </span>

          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[12px] font-extrabold tracking-tight text-[#142B45] sm:text-base">
              Dr. Khalid Khan Zadran
            </span>

            <span className="mt-1 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-teal-700 sm:text-[10px] sm:tracking-[0.12em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              {t("nav.title")}
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-7">
          {navLinks.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => {
                  setActiveSection(item.key);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={linkClass(item.key)}
              >
                {t(`nav.${item.key}`)}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-teal-600 transition-all duration-300 ${
                    activeSection === item.key ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ) : (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setActiveSection(item.key)}
                className={linkClass(item.key)}
              >
                {t(`nav.${item.key}`)}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-teal-600 transition-all duration-300 ${
                    activeSection === item.key ? "w-full" : "w-0"
                  }`}
                />
              </a>
            )
          )}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageOpen((open) => !open)}
              aria-label={t("nav.language")}
              aria-expanded={languageOpen}
              className="flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-[#142B45] transition-all duration-300 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
            >
              <Languages size={18} />

              <span className="text-xs font-bold">
                {currentLanguage.native}
              </span>

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  languageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {languageOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close language menu"
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setLanguageOpen(false)}
                />

                <div className="absolute right-0 top-[calc(100%+12px)] z-50 w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_18px_55px_rgba(20,43,69,0.14)]">
                  <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    {t("nav.language")}
                  </p>

                  {renderLanguageOptions()}
                </div>
              </>
            )}
          </div>

          <a
            href="#appointment"
            onClick={() => setActiveSection("contact")}
            className="group flex h-11 items-center gap-2 rounded-full bg-teal-600 px-4 text-[12px] font-bold text-white shadow-sm shadow-teal-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-700/20 xl:px-5 xl:text-[13px]"
          >
            <CalendarCheck size={16} />
            <span>{t("nav.appointment")}</span>
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setMenuOpen((open) => !open);
            setLanguageOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#142B45] transition-all duration-300 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE BACKDROP */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={closeMenu}
          className="fixed inset-0 top-[76px] z-40 cursor-default bg-[#142B45]/30 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 right-0 top-full z-50 overflow-y-auto border-t border-slate-100 bg-white shadow-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[calc(100dvh-76px)] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-5 pb-6 pt-4 sm:px-8">
          <div className="mb-3 flex items-center justify-between px-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </span>

            <span className="rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold text-teal-700">
              Brain & Spine Care
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.key}
                  to={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => {
                    closeMenu();
                    setActiveSection(item.key);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors ${
                    activeSection === item.key
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                  }`}
                >
                  <span className="text-sm font-semibold">
                    {t(`nav.${item.key}`)}
                  </span>
                  <ChevronRight size={17} />
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={item.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => {
                    closeMenu();
                    setActiveSection(item.key);
                  }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-colors ${
                    activeSection === item.key
                      ? "bg-teal-50 text-teal-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                  }`}
                >
                  <span className="text-sm font-semibold">
                    {t(`nav.${item.key}`)}
                  </span>
                  <ChevronRight size={17} />
                </a>
              )
            )}
          </div>

          {/* MOBILE LANGUAGE SELECTOR */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-[#F8FAFB] p-4">
            <div className="mb-4 flex items-center gap-2">
              <Languages size={17} className="text-teal-700" />

              <span className="text-xs font-extrabold text-[#142B45]">
                {t("nav.language")}
              </span>

              <span className="ml-auto rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-teal-700">
                {currentLanguage.label}
              </span>
            </div>

            {renderLanguageOptions(true)}
          </div>

          {/* APPOINTMENT */}
          <a
            href="#appointment"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-600 px-3 text-sm font-bold text-white transition-colors hover:bg-teal-700"
          >
            <CalendarCheck size={17} />
            {t("nav.appointment")}
            <ArrowUpRight size={15} />
          </a>

          <p className="mt-4 text-center text-xs text-slate-400">
            {t("nav.location")}
          </p>
        </div>
      </div>
    </header>
  );
}
