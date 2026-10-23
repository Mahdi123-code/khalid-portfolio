import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Brain,
  Building2,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const translations = {
  en: {
    badge: "Consultant Neurosurgeon",
    location: "Kabul, Afghanistan",
    line1: "Advanced expertise.",
    line2: "A more personal",
    line3: "approach.",
    description:
      "Dr. Khalid Khan Zadran is a consultant neurosurgeon based in Kabul, Afghanistan, focused on brain and spine care through specialist assessment, surgical expertise, and thoughtful patient communication.",
    appointment: "Request an Appointment",
    profile: "Explore Profile",
    excellence: "Professional Excellence",
    qualification: "FCPS",
    qualificationSub: "Neurosurgery",
    expertise: "Clinical Expertise",
    expertiseSub: "Advanced Care",
    city: "Kabul, Afghanistan",
    hospital: "Rifah Medical Complex",
    doctor: "Dr. Khalid Khan Zadran",
    role: "Consultant Neurosurgeon",
  },

  fa: {
    badge: "متخصص جراحی اعصاب",
    location: "کابل، افغانستان",
    line1: "مراقبت پیشرفته.",
    line2: "راهی بهتر",
    line3: "به سوی بهبودی.",
    description:
     "داکتر خالد خان ځدراڼ متخصص جراحی اعصاب در کابل، افغانستان است که بر مراقبت مغز و ستون فقرات، ارزیابی تخصصی و ارتباط روشن با بیماران تمرکز دارد.",
    appointment: "درخواست نوبت",
    profile: "مشاهده پروفایل",
    excellence: "برتری حرفه‌ای",
    qualification: "FCPS",
    qualificationSub: "جراحی اعصاب",
    expertise: "تخصص بالینی",
    expertiseSub: "مراقبت پیشرفته",
    city: "کابل، افغانستان",
    hospital: "مجتمع طبی رفاه",
    doctor: "داکتر خالد خان زدران",
    role: "متخصص جراحی اعصاب",
  },

  ps: {
    badge: "د اعصابو جراح متخصص",
    location: "کابل، افغانستان",
    line1: "پرمختللې درملنه.",
    line2: "ښه لاره",
    line3: "د روغتیا پر لور.",
    description:
      "د دقیق تشخیص، عصري عصبي جراحۍ او له ناروغانو سره د مهربانې پاملرنې له لارې د مغز او ملا تیر روغتیا ته ژمنتیا.",
    appointment: "د ملاقات غوښتنه",
    profile: "پروفایل وګورئ",
    excellence: "مسلکي غوره‌والی",
    qualification: "FCPS",
    qualificationSub: "عصبي جراحي",
    expertise: "کلینیکي تخصص",
    expertiseSub: "پرمختللې پاملرنه",
    city: "کابل، افغانستان",
    hospital: "رفاه طبي کمپلکس",
    doctor: "ډاکټر خالد خان ځدراڼ",
    role: "د اعصابو جراح متخصص",
  },
};

export default function Hero() {
  const { i18n } = useTranslation();

  const language = (
    i18n.resolvedLanguage || i18n.language || "en"
  )
    .split("-")[0]
    .toLowerCase();

  const t = translations[language] || translations.en;
  const isRTL = language === "fa" || language === "ps";

  return (
    <section
      id="home"
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="relative isolate overflow-hidden bg-[#EAF5F9]"
    >
      {/* BACKGROUND IMAGE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero_bg.png')",
        }}
      />

      {/* READABILITY OVERLAY: FLIPS WITH THE LANGUAGE */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-20 ${
          isRTL
            ? "bg-gradient-to-l from-white/95 via-white/80 to-white/15"
            : "bg-gradient-to-r from-white/95 via-white/80 to-white/15"
        }`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-white/10 via-transparent to-[#E7F5FA]/40"
      />

      {/* AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-24 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-[100px] sm:h-96 sm:w-96 ${
          isRTL ? "right-[-140px]" : "left-[-140px]"
        }`}
      />

      {/* MAIN CONTENT */}
      <div
        className={`relative mx-auto grid min-h-[760px] max-w-[1510px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-[min(924px,calc(100svh-74px))] lg:grid-cols-2 lg:gap-5 lg:px-10 lg:pb-12 lg:pt-16 xl:gap-0 xl:px-12 ${
          isRTL ? "lg:[direction:rtl]" : "lg:[direction:ltr]"
        }`}
      >
        {/* TEXT COLUMN
            English: LEFT
            Persian/Pashto: RIGHT */}
        <div
          className={`relative z-20 w-full min-w-0 max-w-[680px] ${
            isRTL
              ? "text-right lg:col-start-2 lg:justify-self-end"
              : "text-left lg:col-start-1 lg:justify-self-start"
          }`}
        >
          {/* SPECIALTY BADGE */}
          <div
            className={`inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[#BCD8E8] bg-white/75 px-3 py-2 shadow-sm backdrop-blur-md sm:px-4 ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <ShieldCheck
              size={21}
              className="shrink-0 fill-[#00858A] text-white"
            />

            <span className="text-[11px] font-semibold text-[#294D6B] sm:text-[13px]">
              {t.badge}
            </span>

            <span className="hidden text-slate-400 sm:inline">·</span>

            <span className="text-[11px] font-medium text-[#294D6B] sm:text-[13px]">
              {t.location}
            </span>
          </div>

          {/* HEADLINE */}
          <h1
            className={`mt-6 max-w-[680px] text-[clamp(2.5rem,5vw,5.4rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#10233C] sm:mt-7 sm:leading-[1.04] ${
              isRTL ? "ms-auto" : ""
            }`}
          >
            <span className="block">{t.line1}</span>

            <span className="mt-1 block">{t.line2}</span>

            <span className="relative mt-1 inline-block pb-3 text-[#07868A]">
              {t.line3}

              <span
                aria-hidden="true"
                className={`absolute bottom-0 h-[4px] w-[62%] rounded-full bg-[#07868A] ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`mt-5 max-w-[455px] text-[13px] font-medium leading-7 text-[#71829F] sm:mt-6 sm:text-[15px] sm:leading-[1.8] ${
              isRTL ? "ms-auto" : ""
            }`}
          >
            {t.description}
          </p>

          {/* ACTION BUTTONS */}
          <div
            className={`mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 ${
              isRTL ? "sm:flex-row-reverse sm:justify-end" : ""
            }`}
          >
            <Link
              to="/contact"
              className="group inline-flex min-h-[54px] w-full items-center justify-between gap-4 rounded-full bg-[#00858A] py-1 ps-5 pe-1.5 text-[13px] font-bold text-white shadow-[0_8px_22px_rgba(0,119,126,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#006F75] hover:shadow-[0_12px_28px_rgba(0,119,126,0.23)] sm:w-auto sm:justify-center sm:ps-6 sm:pe-3"
            >
              <span className="flex items-center gap-3">
                <CalendarDays size={21} />
                {t.appointment}
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <ArrowRight
                  size={19}
                  className={isRTL ? "rotate-180" : ""}
                />
              </span>
            </Link>

            <Link
              to="/about"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full border border-[#B6D2E7] bg-white/45 px-5 text-[13px] font-semibold text-[#426184] backdrop-blur-sm transition duration-300 hover:border-[#00858A] hover:bg-white/85 hover:text-[#007E83] sm:w-auto sm:min-w-[190px]"
            >
              <UserRound size={20} className="shrink-0 text-[#00858A]" />

              <span>{t.profile}</span>

              <ArrowRight
                size={17}
                className={`transition-transform group-hover:translate-x-1 ${
                  isRTL
                    ? "rotate-180 group-hover:-translate-x-1"
                    : ""
                }`}
              />
            </Link>
          </div>

          {/* CREDENTIALS */}
          <div className="mt-8 grid max-w-[710px] grid-cols-1 divide-y divide-[#DCEAF1] overflow-hidden rounded-[22px] border border-white/85 bg-white/80 px-4 py-2 shadow-[0_12px_40px_rgba(28,76,110,0.08)] backdrop-blur-xl sm:mt-9 sm:grid-cols-3 sm:divide-y-0 sm:px-3 sm:py-4">
            {/* QUALIFICATION */}
            <div
              className={`flex min-w-0 items-center gap-3 py-3 sm:px-3 sm:py-2 ${
                isRTL ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DFF3F4] text-[#00858A] sm:h-14 sm:w-14">
                <Brain size={27} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-[#152E4B] sm:text-[15px]">
                  {t.qualification}
                </p>
                <p className="mt-1 text-[11px] text-[#788BA5] sm:text-xs">
                  {t.qualificationSub}
                </p>
              </div>
            </div>

            {/* CLINICAL EXPERTISE */}
            <div
              className={`flex min-w-0 items-center gap-3 py-3 sm:px-3 sm:py-2 ${
                isRTL ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DFF3F4] text-[#00858A] sm:h-14 sm:w-14">
                <Building2 size={27} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-[#152E4B] sm:text-[14px]">
                  {t.expertise}
                </p>
                <p className="mt-1 text-[11px] text-[#788BA5] sm:text-xs">
                  {t.expertiseSub}
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div
              className={`flex min-w-0 items-center gap-3 py-3 sm:px-3 sm:py-2 ${
                isRTL ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DFF3F4] text-[#00858A] sm:h-14 sm:w-14">
                <MapPin size={27} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-bold text-[#152E4B] sm:text-[13px]">
                  {t.city}
                </p>
                <p className="mt-1 text-[11px] text-[#788BA5] sm:text-xs">
                  {t.hospital}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DOCTOR COLUMN
            English: RIGHT
            Persian/Pashto: LEFT */}
        <div
          className={`relative z-10 mx-auto flex min-h-[410px] w-full min-w-0 max-w-[620px] items-end justify-center sm:min-h-[510px] lg:col-span-1 lg:row-start-1 lg:min-h-[650px] lg:self-stretch ${
            isRTL
              ? "lg:col-start-1 lg:justify-self-start"
              : "lg:col-start-2 lg:justify-self-end"
          }`}
        >
          {/* GLOW BEHIND PORTRAIT */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[4%] h-[75%] w-[90%] rounded-t-full bg-[#72C6D5]/25 blur-3xl"
          />

          {/* DOCTOR IMAGE */}
          <img
            src="/images/hero_image.png"
            alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
            fetchPriority="high"
            decoding="async"
            onError={(event) => {
              console.error(
                "Doctor image failed to load:",
                event.currentTarget.src
              );
            }}
            className="relative z-10 block h-[410px] w-full object-contain object-bottom sm:h-[510px] md:h-[570px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-[96%] lg:w-full lg:object-contain lg:object-bottom xl:h-full"
          />

          {/* PROFESSIONAL EXCELLENCE BADGE
              Kept inside the portrait area */}
          <div
            className={`absolute top-[8%] z-20 hidden max-w-[90%] items-center gap-3 rounded-full border border-white/90 bg-white/90 px-4 py-3 shadow-[0_8px_25px_rgba(30,80,110,0.10)] backdrop-blur-xl xl:flex ${
              isRTL ? "left-0" : "right-0"
            }`}
          >
            <ShieldCheck
              size={25}
              className="shrink-0 fill-[#00858A] text-white"
            />

            <span className="text-[12px] font-bold text-[#087F84]">
              {t.excellence}
            </span>
          </div>

          {/* DOCTOR INFORMATION CARD */}
          <div
            className={`absolute bottom-3 z-20 w-[min(94%,370px)] rounded-[22px] border border-white/90 bg-white/95 p-4 shadow-[0_16px_45px_rgba(26,69,106,0.16)] backdrop-blur-2xl sm:bottom-5 sm:p-5 lg:bottom-[12%] ${
              isRTL ? "left-0" : "right-0"
            }`}
          >
            <div
              className={`flex items-center gap-3 ${
                isRTL ? "flex-row-reverse text-right" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E0F4F4] text-[#00858A]">
                <Brain size={27} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="break-words text-sm font-extrabold text-[#18324D]">
                  {t.doctor}
                </h2>

                <p className="mt-1 text-xs text-[#7A8BA3]">
                  {t.role}
                </p>
              </div>

              <Sparkles
                size={20}
                className="shrink-0 text-[#00858A]"
              />
            </div>

            <div
              className={`mt-3 flex items-center gap-2 text-[11px] text-[#7486A0] sm:text-xs ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#07898C]" />
              <span>
                {t.hospital} · {t.city}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM EDGE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9ED8E2] to-transparent" />
    </section>
  );
}
