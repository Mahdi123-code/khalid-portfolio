
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import {
  Brain,
  Search,
  Menu,
  X,
  CalendarDays,
  ChevronDown,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  {
    to: "/",
    label: "Home",
    fa: "صفحه اصلی",
    ps: "کور",
  },
  {
    to: "/about",
    label: "About",
    fa: "درباره ما",
    ps: "زموږ په اړه",
  },
  {
    to: "/services",
    label: "Specialties",
    fa: "تخصص‌ها",
    ps: "تخصصونه",
  },
  {
    to: "/research",
    label: "Research",
    fa: "تحقیقات",
    ps: "څېړنې",
  },
  {
    to: "/contact",
    label: "Contact",
    fa: "تماس",
    ps: "اړیکه",
  },
];

const languages = [
  { code: "en", short: "EN", label: "English" },
  { code: "fa", short: "دری", label: "فارسی / دری" },
  { code: "ps", short: "پښتو", label: "پښتو" },
];

const navLabels = {
  en: { appointment: "Book Appointment", search: "Search" },
  fa: { appointment: "درخواست نوبت", search: "جستجو" },
  ps: { appointment: "د ملاقات غوښتنه", search: "لټون" },
};

export default function Navbar() {
  const { i18n } = useTranslation();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const language = (
    i18n.resolvedLanguage || i18n.language || "en"
  )
    .split("-")[0]
    .toLowerCase();

  const currentLanguage = languages.some(
    (item) => item.code === language
  )
    ? language
    : "en";

  const isRTL = ["fa", "ps"].includes(currentLanguage);
  const labels = navLabels[currentLanguage];

  const getLabel = (item) => {
    if (currentLanguage === "fa") return item.fa;
    if (currentLanguage === "ps") return item.ps;
    return item.label;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLanguageOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [isRTL, currentLanguage]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguageOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchValue.trim();

    if (!query) return;

    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/70 bg-white/95 shadow-[0_6px_30px_rgba(15,55,80,0.08)] backdrop-blur-2xl"
          : "border-b border-white/20 bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1510px] items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-7 lg:px-10 xl:px-12 ${
          scrolled ? "h-[66px]" : "h-[82px]"
        }`}
      >
        {/* BRAND */}
        <Link
          to="/"
          aria-label="Dr. Khalid Khan Zadran home"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center text-[#07878B] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            <Brain
              size={43}
              strokeWidth={2.3}
              className="h-full w-full"
            />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap text-[13px] font-extrabold tracking-[-0.45px] text-[#123C52] sm:text-base lg:text-[18px]">
              Dr. Khalid Zadran
            </span>

            <span className="mt-1 text-[10px] font-medium tracking-wide text-slate-500 sm:text-xs">
              Consultant Neurosurgeon
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-3 text-[13px] font-semibold transition-all duration-200 2xl:px-5 ${
                  isActive
                    ? "bg-[#DDF3F3]/90 text-[#007F83]"
                    : "text-[#173C55] hover:bg-white/65 hover:text-[#00858A]"
                }`
              }
            >
              {getLabel(item)}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          {/* SEARCH */}
          <button
            type="button"
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen((value) => !value);
              setLanguageOpen(false);
              setMobileOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#174A60] transition hover:bg-white/70 sm:h-10 sm:w-10"
          >
            {searchOpen ? (
              <X size={19} />
            ) : (
              <Search size={19} />
            )}
          </button>

          {/* LANGUAGE SELECTOR */}
          <div className="relative">
            <button
              type="button"
              aria-label="Choose language"
              aria-expanded={languageOpen}
              onClick={() => {
                setLanguageOpen((value) => !value);
                setSearchOpen(false);
              }}
              className="flex h-9 items-center gap-1.5 rounded-full border border-white/80 bg-white/80 px-2.5 text-xs font-semibold text-[#244B60] shadow-sm backdrop-blur-md transition hover:bg-white sm:h-10 sm:gap-2 sm:px-3"
            >
              <Globe size={15} />
            </button>

            {languageOpen && (
              <div className="absolute end-0 top-12 z-[60] w-44 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1.5 shadow-[0_15px_45px_rgba(15,55,80,0.16)]">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => changeLanguage(item.code)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-start text-xs transition ${
                      currentLanguage === item.code
                        ? "bg-[#E6F6F5] font-bold text-[#007F83]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {currentLanguage === item.code && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00878B]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* APPOINTMENT */}
          <Link
            to="/contact"
            className="hidden group md:inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/80 bg-[#00878B] px-3 text-[11px] font-bold text-white shadow-[0_5px_18px_rgba(0,119,126,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#006E74] sm:gap-2.5 sm:px-4 sm:text-xs lg:px-5"
          >
            <CalendarDays size={16} />
            <span className="hidden sm:inline">
              {labels.appointment}
            </span>
            
            <ArrowUpRight
              size={14}
              className="hidden sm:block"
            />
          </Link>

          {/* MOBILE MENU */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((value) => !value);
              setSearchOpen(false);
              setLanguageOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/75 text-[#16465B] transition hover:bg-white xl:hidden sm:h-10 sm:w-10"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* SEARCH PANEL */}
      {searchOpen && (
        <div className="border-t border-slate-100 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-xl">
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-2xl gap-2"
          >
            <input
              autoFocus
              type="search"
              value={searchValue}
              onChange={(event) =>
                setSearchValue(event.target.value)
              }
              placeholder={
                currentLanguage === "fa"
                  ? "جستجو..."
                  : currentLanguage === "ps"
                    ? "لټون..."
                    : "Search doctors and services..."
              }
              className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#00878B] focus:bg-white"
            />
            <button
              type="submit"
              className="rounded-full bg-[#00878B] px-5 text-sm font-semibold text-white transition hover:bg-[#006E74]"
            >
              {labels.search}
            </button>
          </form>
        </div>
      )}

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white/95 px-4 pb-5 pt-3 shadow-xl backdrop-blur-2xl xl:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-2xl space-y-1"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition ${
                    isActive
                      ? "bg-[#E5F5F4] font-bold text-[#007F83]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#007F83]"
                  }`
                }
              >
                {getLabel(item)}
                <ArrowUpRight
                  size={16}
                  className="opacity-50"
                />
              </NavLink>
            ))}
          </nav>

          <div className="mx-auto mt-4 flex max-w-2xl flex-wrap gap-2 border-t border-slate-100 pt-4">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => changeLanguage(item.code)}
                className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                  currentLanguage === item.code
                    ? "border-teal-200 bg-teal-50 text-teal-800"
                    : "border-slate-200 text-slate-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
