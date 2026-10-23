
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  ArrowUpRight,
  Brain,
  HeartPulse,
  Activity,
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Mail,
  ArrowDownLeft,
  Stethoscope,
} from "lucide-react";

const translations = {
  en: {
    eyebrow: "PERSONALIZED NEUROSURGICAL CARE",
    title1: "Let's Connect",
    title2: "With Me",
    intro:
      "Your health deserves thoughtful attention. Reach out to learn more about consultations and neurological care.",
    emailPlaceholder: "Enter your email address",
    emailLabel: "Your email address",
    subscribe: "Submit email",
    newsletterNote:
      "Stay informed with professional updates and information about brain and spine care.",
    emailRequired: "Please enter a valid email address.",
    emailSuccess:
      "Thank you! The form is ready to connect to the newsletter service.",
    profile: "Consultant Neurosurgeon",
    description:
      "Dedicated to brain and spine care, neurological research, and advancing neurosurgical practice in Afghanistan.",
    explore: "Explore",
    quickLinks: "Quick Links",
    focus: "Areas of Focus",
    contact: "Get in Touch",
    home: "Home",
    about: "About Dr. Khalid",
    specialties: "Specialties",
    experience: "Experience",
    research: "Research",
    contactLink: "Contact",
    services: "Neurosurgical Care",
    brainDisorders: "Brain & Neurological Disorders",
    brainSurgery: "Brain Surgery",
    spineSurgery: "Spine Conditions & Surgery",
    researchArea: "Neurosurgical Research",
    locationTitle: "Clinic Location",
    location1: "Rifah Medical Complex",
    location2: "Kabul, Afghanistan",
    phoneTitle: "Contact Number",
    appointmentTitle: "Appointments",
    appointmentText:
      "Contact the clinic to confirm available consultation times.",
    disclaimer:
      "This website provides general educational information and does not replace professional medical advice, diagnosis, or treatment. For a medical emergency, seek immediate medical assistance.",
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    backTop: "Back to top",
    footerNote: "Expertise. Compassion. Better care.",
    instagram: "Instagram",
    facebook: "Facebook",
    linkedin: "LinkedIn",
  },

  fa: {
    eyebrow: "مراقبت تخصصی جراحی اعصاب",
    title1: "با من در",
    title2: "ارتباط باشید",
    intro:
      "سلامتی شما شایسته توجه دقیق و دلسوزانه است. برای آگاهی از مشاوره‌ها و خدمات مراقبت از مغز و ستون فقرات با ما تماس بگیرید.",
    emailPlaceholder: "آدرس ایمیل خود را وارد کنید",
    emailLabel: "آدرس ایمیل شما",
    subscribe: "ثبت ایمیل",
    newsletterNote:
      "برای دریافت معلومات حرفه‌ای درباره مراقبت از مغز و ستون فقرات، با ما در ارتباط باشید.",
    emailRequired: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
    emailSuccess:
      "تشکر! فورم آماده اتصال به سیستم خبرنامه است.",
    profile: "متخصص جراحی اعصاب",
    description:
      "متعهد به مراقبت از مغز و ستون فقرات، تحقیقات عصبی و پیشرفت خدمات جراحی اعصاب در افغانستان.",
    explore: "بیشتر بدانید",
    quickLinks: "لینک‌های سریع",
    focus: "حوزه‌های تخصصی",
    contact: "با ما در تماس شوید",
    home: "صفحه اصلی",
    about: "درباره داکتر خالد",
    specialties: "تخصص‌ها",
    experience: "تجربه کاری",
    research: "تحقیقات",
    contactLink: "تماس با ما",
    services: "خدمات جراحی اعصاب",
    brainDisorders: "بیماری‌های مغز و سیستم عصبی",
    brainSurgery: "جراحی مغز",
    spineSurgery: "بیماری‌ها و جراحی ستون فقرات",
    researchArea: "تحقیقات جراحی اعصاب",
    locationTitle: "موقعیت کلینیک",
    location1: "مجتمع طبی رفاه",
    location2: "کابل، افغانستان",
    phoneTitle: "شماره تماس",
    appointmentTitle: "نوبت‌دهی",
    appointmentText:
      "برای تأیید زمان‌های موجود مشاوره با کلینیک تماس بگیرید.",
    disclaimer:
      "معلومات این وب‌سایت صرفاً برای آگاهی عمومی است و جایگزین مشاوره، تشخیص یا درمان تخصصی طبی نمی‌شود. در موارد عاجل طبی، فوراً به خدمات صحی مراجعه کنید.",
    copyright: "تمامی حقوق محفوظ است.",
    privacy: "حریم خصوصی",
    backTop: "بازگشت به بالا",
    footerNote: "تخصص، دلسوزی و مراقبت بهتر",
    instagram: "اینستاگرام",
    facebook: "فیسبوک",
    linkedin: "لینکدین",
  },

  ps: {
    eyebrow: "د عصبي جراحۍ تخصصي پاملرنه",
    title1: "راځئ چې",
    title2: "اړیکه ونیسو",
    intro:
      "ستاسو روغتیا پاملرنې او دقت ته اړتیا لري. د مشورې او د مغز او ملا تیر د پاملرنې په اړه د معلوماتو لپاره له موږ سره اړیکه ونیسئ.",
    emailPlaceholder: "خپل برېښنالیک ولیکئ",
    emailLabel: "ستاسو برېښنالیک",
    subscribe: "برېښنالیک ثبت کړئ",
    newsletterNote:
      "د مغز او ملا تیر د پاملرنې په اړه مسلکي معلومات ترلاسه کړئ.",
    emailRequired: "مهرباني وکړئ یو معتبر برېښنالیک ولیکئ.",
    emailSuccess:
      "مننه! فورمه د خبرپاڼې له خدمت سره نښلولو ته چمتو ده.",
    profile: "د عصبي جراحۍ متخصص",
    description:
      "په افغانستان کې د مغز او ملا تیر پاملرنې، عصبي څېړنو او د عصبي جراحۍ د پرمختګ لپاره ژمنتیا.",
    explore: "نور معلومات",
    quickLinks: "چټک لینکونه",
    focus: "د تخصص برخې",
    contact: "اړیکه ونیسئ",
    home: "کور پاڼه",
    about: "د ډاکټر خالد په اړه",
    specialties: "تخصصونه",
    experience: "کاري تجربه",
    research: "څېړنې",
    contactLink: "اړیکه",
    services: "د عصبي جراحۍ پاملرنه",
    brainDisorders: "د مغز او عصبي سیستم ناروغۍ",
    brainSurgery: "د مغز جراحي",
    spineSurgery: "د ملا تیر ناروغۍ او جراحي",
    researchArea: "د عصبي جراحۍ څېړنې",
    locationTitle: "د کلینیک موقعیت",
    location1: "رفاه طبي کمپلکس",
    location2: "کابل، افغانستان",
    phoneTitle: "د اړیکې شمېره",
    appointmentTitle: "د ملاقات وخت",
    appointmentText:
      "د مشورې د شته وختونو د تایید لپاره له کلینیک سره اړیکه ونیسئ.",
    disclaimer:
      "د دې وېب‌پاڼې معلومات د عمومي پوهاوي لپاره دي او د مسلکي طبي مشورې، تشخیص یا درملنې ځای نه نیسي. په بیړني طبي حالت کې سمدستي طبي مرسته وغواړئ.",
    copyright: "ټول حقوق خوندي دي.",
    privacy: "د محرمیت تګلاره",
    backTop: "بېرته پورته",
    footerNote: "تخصص، خواخوږي او غوره پاملرنه",
    instagram: "انسټاګرام",
    facebook: "فېسبوک",
    linkedin: "لینکډین",
  },
};

const quickLinks = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "specialties", to: "/specialties" },
  { key: "experience", to: "/experience" },
  { key: "research", to: "/research" },
  { key: "contactLink", to: "/contact" },
];

const specialtyKeys = [
  "brainDisorders",
  "brainSurgery",
  "spineSurgery",
  "researchArea",
];

function FooterLink({ to, children, isRTL }) {
  return (
    <li>
      <Link
        to={to}
        className="group inline-flex items-center gap-2 text-sm leading-6 text-[#63798A] transition-colors duration-300 hover:text-[#087F86]"
      >
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full bg-[#8CBAC1] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#087F86] ${
            isRTL ? "order-2" : ""
          }`}
        />
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  const { i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const rawLanguage = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).toLowerCase();

  const language = rawLanguage.startsWith("ps")
    ? "ps"
    : rawLanguage.startsWith("fa") ||
        rawLanguage.startsWith("dr")
      ? "fa"
      : "en";

  const t = translations[language];
  const isRTL = language === "fa" || language === "ps";
  const currentYear = new Date().getFullYear();

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage(t.emailRequired);
      return;
    }

    setMessage(t.emailSuccess);
  }

  const socialLinks = [
    {
      label: t.facebook,
      href: "https://www.facebook.com/DrKhalidkhanzadran/",
      icon: FaFacebookF,
    },
    {
      label: t.linkedin,
      href: "https://af.linkedin.com/in/dr-khalid-khan-zadran-67597036",
      icon: FaLinkedinIn,
    },
    {
      label: t.instagram,
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
  ];

  return (
    <footer
      id="footer"
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="relative overflow-hidden bg-[#EAF5F9] px-2 pb-2 pt-2 font-sans text-[#10233C] sm:px-4 sm:pb-4 sm:pt-4"
    >
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-[#7899A5]/35 bg-[#607F8C] p-2 shadow-[0_25px_80px_-40px_rgba(16,35,60,0.35)] sm:rounded-[36px] sm:p-3 lg:rounded-[42px] lg:p-3.5">
        {/* Decorative heartbeat */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 hidden h-[330px] w-[56%] text-[#EAF5F9]/15 lg:block ${
            isRTL ? "left-[4%]" : "right-[4%]"
          }`}
        >
          <Activity
            className="h-full w-full"
            strokeWidth={0.65}
          />
        </div>

        {/* Contact headline and newsletter */}
        <div className="relative grid gap-8 px-5 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-14 lg:pb-16 lg:pt-14 xl:px-[5%]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-[9px] font-bold tracking-[0.17em] text-[#EAF5F9] sm:text-[10px]">
              <HeartPulse size={15} />
              {t.eyebrow}
            </div>

            <h2 className="max-w-[580px] text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-[#F1FAFC] sm:text-5xl lg:text-[clamp(46px,4.3vw,72px)]">
              {t.title1}
              <br />
              {t.title2}
              <span className="text-[#B7E4E5]">.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#EAF5F9]/80 sm:text-[15px]">
              {t.intro}
            </p>
          </div>

          <div className="relative min-w-0 lg:pt-5">
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold text-[#EAF5F9]/85">
              <Mail size={15} />
              {t.emailLabel}
            </div>

            <form
              onSubmit={handleSubscribe}
              className="group flex min-w-0 items-center gap-3 border-b border-[#EAF5F9]/60 transition-colors duration-300 focus-within:border-white"
            >
              <label htmlFor="footer-email" className="sr-only">
                {t.emailLabel}
              </label>

              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder={t.emailPlaceholder}
                required
                dir={isRTL ? "rtl" : "ltr"}
                className="min-w-0 flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-[#EAF5F9]/80 sm:text-base"
              />

              <button
                type="submit"
                aria-label={t.subscribe}
                className="group/button flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[#EAF5F9] transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {isRTL ? (
                  <ArrowDownLeft
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover/button:-translate-x-1 group-hover/button:translate-y-1"
                  />
                ) : (
                  <ArrowUpRight
                    size={25}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                  />
                )}
              </button>
            </form>

            {message && (
              <p
                role="status"
                className="mt-3 flex items-start gap-2 text-xs leading-6 text-[#F1FAFC]"
              >
                <CheckCircle2
                  size={15}
                  className="mt-1 shrink-0 text-[#B7E4E5]"
                />
                {message}
              </p>
            )}

            <p className="mt-4 max-w-md text-xs leading-6 text-[#EAF5F9]/65">
              {t.newsletterNote}
            </p>
          </div>
        </div>

        {/* Main inset panel */}
        <div className="relative overflow-hidden rounded-[22px] bg-[#EAF5F9] px-5 pb-6 pt-8 sm:rounded-[28px] sm:px-8 sm:pb-8 sm:pt-10 md:px-10 lg:rounded-[32px] lg:px-12 lg:pb-9 lg:pt-12 xl:px-[4%]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 xl:gap-10">
            {/* Doctor identity */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link
                to="/"
                aria-label="Dr. Khalid Khan Zadran home"
                className="group inline-flex max-w-full items-center gap-3.5"
              >
                <span className="relative flex h-[62px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-[17px] border border-[#BDD8E1] bg-[#D8EDF1] text-[#087F86] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-[#087F86]/10 sm:h-[70px] sm:w-[70px]">
                  <Brain size={35} strokeWidth={1.45} />
                  <span className="absolute bottom-1.5 right-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#D8EDF1] bg-[#087F86]" />
                </span>

                <span className="min-w-0">
                  <span className="block text-lg font-bold leading-snug tracking-tight text-[#10233C] sm:text-xl xl:text-[22px]">
                    Dr. Khalid Khan Zadran
                  </span>
                  <span className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#71829F] sm:text-sm">
                    <Stethoscope
                      size={14}
                      className="shrink-0 text-[#087F86]"
                    />
                    {t.profile}
                  </span>
                </span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#63798A]">
                {t.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[#9AB7C1] bg-transparent text-[#10233C] transition-all duration-300 hover:-translate-y-1 hover:border-[#087F86] hover:bg-[#087F86] hover:text-white hover:shadow-md hover:shadow-[#087F86]/15"
                  >
                    <Icon
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#C6DFE6] bg-white/60 px-3 py-2 text-[10px] font-semibold text-[#587583]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D7EBF0] text-[#087F86]">
                  <ShieldCheck size={13} />
                </span>
                {t.footerNote}
              </div>
            </div>

            {/* Explore */}
            <div className="lg:col-span-2">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold text-[#10233C] sm:text-base">
                <span className="h-5 w-1 rounded-full bg-[#087F86]" />
                {t.explore}
              </h3>

              <ul className="space-y-3">
                {[
                  { key: "specialties", to: "/specialties" },
                  { key: "experience", to: "/experience" },
                  { key: "research", to: "/research" },
                  { key: "about", to: "/about" },
                ].map((item) => (
                  <FooterLink
                    key={item.key}
                    to={item.to}
                    isRTL={isRTL}
                  >
                    {t[item.key]}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Quick links */}
            <div className="lg:col-span-2">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold text-[#10233C] sm:text-base">
                <span className="h-5 w-1 rounded-full bg-[#087F86]" />
                {t.quickLinks}
              </h3>

              <ul className="space-y-3">
                {quickLinks
                  .filter((item) =>
                    ["home", "about", "contactLink"].includes(item.key)
                  )
                  .map((item) => (
                    <FooterLink
                      key={item.key}
                      to={item.to}
                      isRTL={isRTL}
                    >
                      {t[item.key]}
                    </FooterLink>
                  ))}
              </ul>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-4">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold text-[#10233C] sm:text-base">
                <span className="h-5 w-1 rounded-full bg-[#087F86]" />
                {t.contact}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D0E4E9] bg-white/75 text-[#087F86]">
                    <MapPin size={17} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-bold text-[#10233C]">
                      {t.locationTitle}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-[#71829F]">
                      {t.location1}
                      <br />
                      {t.location2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D0E4E9] bg-white/75 text-[#087F86]">
                    <Phone size={17} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-bold text-[#10233C]">
                      {t.phoneTitle}
                    </p>
                    <a
                      href="tel:+93787654751"
                      dir="ltr"
                      className="mt-1.5 inline-block text-sm text-[#71829F] transition-colors hover:text-[#087F86]"
                    >
                      +93 78 765 4751
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D0E4E9] bg-white/75 text-[#087F86]">
                    <Clock size={17} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-bold text-[#10233C]">
                      {t.appointmentTitle}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-[#71829F]">
                      {t.appointmentText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specialty strip */}
          <div className="mt-10 border-t border-[#C9DDE4] pt-6">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D7EBF0] text-[#087F86]">
                <ShieldCheck size={16} />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#10233C]">
                {t.focus}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {specialtyKeys.map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full border border-[#C9DDE4] bg-white/60 px-3 py-2 text-xs leading-5 text-[#63798A] transition-colors duration-200 hover:border-[#087F86]/50 hover:text-[#087F86]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#087F86]" />
                  {t[key]}
                </span>
              ))}
            </div>
          </div>

          {/* Medical disclaimer */}
          <div className="mt-7 rounded-xl border border-[#C9DDE4] bg-white/45 px-4 py-4 sm:px-5">
            <p className="text-xs leading-6 text-[#71829F]">
              {t.disclaimer}
            </p>
          </div>

          {/* Copyright and legal links */}
          <div className="mt-6 flex flex-col gap-4 border-t border-[#C9DDE4] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-xs leading-6 text-[#71829F] sm:text-start">
              © {currentYear} Dr. Khalid Khan Zadran. {t.copyright}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-end">
              <Link
                to="/privacy"
                className="text-xs text-[#71829F] transition-colors hover:text-[#087F86]"
              >
                {t.privacy}
              </Link>

              <Link
                to="/contact"
                className="text-xs text-[#71829F] transition-colors hover:text-[#087F86]"
              >
                {t.contactLink}
              </Link>

              <a
                href="#home"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#087F86] transition-colors hover:text-[#10233C]"
              >
                {t.backTop}
                <ArrowUpRight
                  size={14}
                  className={`transition-transform duration-300 group-hover:-translate-y-0.5 ${
                    isRTL
                      ? "group-hover:-translate-x-0.5"
                      : "group-hover:translate-x-0.5"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
