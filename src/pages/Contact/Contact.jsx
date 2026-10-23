import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  UserRound,
  Mail,
  Stethoscope,
  CheckCircle2,
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

const PHONE = "+93787654751";

const content = {
  en: {
    eyebrow: "CONTACT & APPOINTMENTS",
    title: "Your next step toward better care.",
    description:
      "For appointment enquiries, consultation information, or questions about available services, contact the clinic directly.",
    call: "Call the Doctor",
    whatsapp: "WhatsApp Enquiry",
    introLabel: "GET IN TOUCH",
    introTitle: "How can we help you?",
    introText:
      "Send an enquiry using the form. Your message will be prepared in WhatsApp so you can review and send it directly.",
    phoneLabel: "Phone & WhatsApp",
    phoneDescription: "Contact the doctor using the number below.",
    locationLabel: "Practice Location",
    locationName: "Rifah Medical Complex",
    locationDescription: "Kabul, Afghanistan",
    availabilityLabel: "Appointments",
    availabilityDescription:
      "Contact the clinic to ask about available consultation times.",
    formTitle: "Send an enquiry",
    formDescription: "Complete the fields below to prepare your message.",
    name: "Full name",
    namePlaceholder: "Enter your full name",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    subject: "Enquiry type",
    subjects: [
      "Appointment request",
      "Consultation information",
      "Clinic location",
      "General enquiry",
    ],
    message: "Your message",
    messagePlaceholder: "How can the clinic assist you?",
    submit: "Continue with WhatsApp",
    privacy:
      "Please do not include sensitive medical records or emergency information in this form.",
    directTitle: "Prefer to contact the clinic directly?",
    directText:
      "Use the phone or WhatsApp option for appointment-related enquiries.",
    directButton: "Open WhatsApp",
    locationButton: "View location",
    locationNote:
      "Confirm the clinic's current address and consultation schedule before visiting.",
    footer: "Dr. Khalid Khan Zadran · Consultant Neurosurgeon",
    required: "Please complete your name and message.",
    invalidEmail: "Please enter a valid email address or leave it blank.",
    whatsappError:
      "WhatsApp could not be opened automatically. Please use the phone number shown on this page.",
  },
  fa: {
    eyebrow: "تماس و نوبت‌دهی",
    title: "گامی دیگر به‌سوی مراقبت بهتر.",
    description:
      "برای درخواست نوبت، معلومات درباره مشوره طبی یا پرسش درباره خدمات موجود، مستقیماً با کلینیک تماس بگیرید.",
    call: "تماس با داکتر",
    whatsapp: "پیام واتساپ",
    introLabel: "با ما در تماس شوید",
    introTitle: "چگونه می‌توانیم کمک کنیم؟",
    introText:
      "از طریق فورم زیر پیام خود را آماده کنید. پیام در واتساپ باز می‌شود تا آن را بررسی و ارسال نمایید.",
    phoneLabel: "تلفن و واتساپ",
    phoneDescription: "از طریق شماره زیر با داکتر تماس بگیرید.",
    locationLabel: "محل فعالیت",
    locationName: "مجتمع طبی رفاه",
    locationDescription: "کابل، افغانستان",
    availabilityLabel: "نوبت‌دهی",
    availabilityDescription:
      "برای آگاهی از زمان‌های موجود مشوره با کلینیک تماس بگیرید.",
    formTitle: "ارسال پیام",
    formDescription: "برای آماده‌سازی پیام، معلومات زیر را وارد کنید.",
    name: "نام کامل",
    namePlaceholder: "نام کامل خود را بنویسید",
    email: "آدرس ایمیل",
    emailPlaceholder: "you@example.com",
    subject: "موضوع درخواست",
    subjects: [
      "درخواست نوبت",
      "معلومات درباره مشوره طبی",
      "آدرس کلینیک",
      "پرسش عمومی",
    ],
    message: "پیام شما",
    messagePlaceholder: "کلینیک چگونه می‌تواند کمک کند؟",
    submit: "ادامه در واتساپ",
    privacy:
      "لطفاً اسناد حساس طبی یا معلومات مربوط به وضعیت اضطراری را در این فورم درج نکنید.",
    directTitle: "می‌خواهید مستقیماً تماس بگیرید؟",
    directText:
      "برای پرسش‌های مربوط به نوبت، از تلفن یا واتساپ استفاده کنید.",
    directButton: "بازکردن واتساپ",
    locationButton: "مشاهده موقعیت",
    locationNote:
      "پیش از مراجعه، آدرس فعلی کلینیک و زمان مشوره را تأیید کنید.",
    footer: "داکتر خالد خان ځدراڼ · متخصص جراحی اعصاب",
    required: "لطفاً نام و پیام خود را وارد کنید.",
    invalidEmail: "ایمیل معتبر وارد کنید یا این بخش را خالی بگذارید.",
    whatsappError:
      "واتساپ به‌صورت خودکار باز نشد. لطفاً از شماره تلفن درج‌شده استفاده کنید.",
  },
  ps: {
    eyebrow: "اړیکه او وخت اخیستل",
    title: "د غوره پاملرنې پر لور بل ګام.",
    description:
      "د وخت اخیستلو، طبي مشورې یا شته روغتیايي خدمتونو په اړه د معلوماتو لپاره له کلینیک سره مستقیمه اړیکه ونیسئ.",
    call: "له ډاکټر سره اړیکه",
    whatsapp: "د واټساپ پیغام",
    introLabel: "اړیکه ونیسئ",
    introTitle: "څنګه مرسته درسره کولی شو؟",
    introText:
      "د فورم له لارې خپل پیغام چمتو کړئ. پیغام به په واټساپ کې پرانیستل شي، څو یې وګورئ او واستوئ.",
    phoneLabel: "تلیفون او واټساپ",
    phoneDescription: "د لاندې شمېرې له لارې له ډاکټر سره اړیکه ونیسئ.",
    locationLabel: "د فعالیت ځای",
    locationName: "رفاه طبي کمپلکس",
    locationDescription: "کابل، افغانستان",
    availabilityLabel: "د وخت اخیستل",
    availabilityDescription:
      "د مشورې د شته وختونو لپاره له کلینیک سره اړیکه ونیسئ.",
    formTitle: "د پوښتنې پیغام",
    formDescription: "د پیغام چمتو کولو لپاره لاندې معلومات ولیکئ.",
    name: "بشپړ نوم",
    namePlaceholder: "خپل بشپړ نوم ولیکئ",
    email: "برېښنالیک",
    emailPlaceholder: "you@example.com",
    subject: "د غوښتنې موضوع",
    subjects: [
      "د وخت غوښتنه",
      "د طبي مشورې معلومات",
      "د کلینیک پته",
      "عمومي پوښتنه",
    ],
    message: "ستاسو پیغام",
    messagePlaceholder: "کلینیک څنګه مرسته درسره کولی شي؟",
    submit: "په واټساپ کې دوام ورکړئ",
    privacy:
      "مهرباني وکړئ حساس طبي اسناد یا د بېړني حالت معلومات په دې فورم کې مه لیکئ.",
    directTitle: "غواړئ مستقیمه اړیکه ونیسئ؟",
    directText:
      "د وخت اخیستلو اړوند پوښتنو لپاره له تلیفون یا واټساپ څخه کار واخلئ.",
    directButton: "واټساپ پرانیزئ",
    locationButton: "ځای وګورئ",
    locationNote:
      "له ورتګ مخکې د کلینیک اوسنی ادرس او د مشورې وختونه تایید کړئ.",
    footer: "ډاکټر خالد خان ځدراڼ · د اعصابو متخصص جراح",
    required: "مهرباني وکړئ خپل نوم او پیغام ولیکئ.",
    invalidEmail: "سم برېښنالیک ولیکئ یا دا برخه تشه پرېږدئ.",
    whatsappError:
      "واټساپ په اتومات ډول پرانیستل نه شو. مهرباني وکړئ د تلیفون له شمېرې کار واخلئ.",
  },
};

export default function Contact() {
  const { i18n } = useTranslation();

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

  const isRTL = language !== "en";
  const t = content[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: t.subjects[0],
    message: "",
  });

  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setError("");
  }

  function submitToWhatsApp(event) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      setError(t.required);
      return;
    }

    const email = formData.email.trim();

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError(t.invalidEmail);
      return;
    }

    const message = [
      "Website enquiry — Dr. Khalid Khan Zadran",
      `Name: ${formData.name.trim()}`,
      ...(email ? [`Email: ${email}`] : []),
      `Subject: ${formData.subject}`,
      `Message: ${formData.message.trim()}`,
    ].join("\n");

    const url = `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="overflow-hidden bg-[#f3fafc] text-[#102b43]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#d4e5ef] bg-[#e3f0f0]">
        <div className="absolute -end-16 -top-20 h-64 w-64 rounded-full border border-[#087f86]/10" />
        <div className="absolute -end-5 -top-9 h-40 w-40 rounded-full border border-[#087f86]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#b9dadd] bg-white/70 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#087f86]">
              <MessageCircle size={15} />
              {t.eyebrow}
            </span>

            <h1 className="mt-6 text-[clamp(2.35rem,5vw,4.5rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#102b43]">
              {t.title}
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#526d86] sm:text-base sm:leading-8">
              {t.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#06676e]"
              >
                <Phone size={17} />
                {t.call}
              </a>

              <a
                href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#bcd5df] bg-white/65 px-5 py-3 text-sm font-bold text-[#102b43] transition hover:border-[#087f86] hover:bg-white"
              >
                <MessageCircle size={17} />
                {t.whatsapp}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 sm:py-18 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:px-10 lg:py-20">
        {/* CONTACT INFORMATION */}
        <aside>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087f86]">
            {t.introLabel}
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] text-[#102b43] sm:text-4xl">
            {t.introTitle}
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#526d86]">
            {t.introText}
          </p>

          <div className="mt-7 space-y-3">
            <a
              href={`tel:${PHONE}`}
              className="group flex items-start gap-4 rounded-2xl border border-[#d4e5ef] bg-white p-4 transition hover:border-[#9dcfd0] hover:shadow-md sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ddf1f3] text-[#087f86] transition group-hover:bg-[#087f86] group-hover:text-white">
                <Phone size={21} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-extrabold text-[#102b43]">
                  {t.phoneLabel}
                </span>
                <span className="mt-1 block text-sm text-[#526d86]" dir="ltr">
                  +93 78 765 4751
                </span>
                <span className="mt-2 block text-xs leading-5 text-[#758ba2]">
                  {t.phoneDescription}
                </span>
              </span>
              <ArrowUpRight size={17} className="mt-1 shrink-0 text-[#9bb1c0]" />
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-[#d4e5ef] bg-white p-4 sm:p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ddf1f3] text-[#087f86]">
                <MapPin size={21} />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-[#102b43]">
                  {t.locationLabel}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#315c70]">
                  {t.locationName}
                </p>
                <p className="mt-1 text-xs text-[#758ba2]">
                  {t.locationDescription}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-[#d4e5ef] bg-white p-4 sm:p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ddf1f3] text-[#087f86]">
                <CalendarDays size={21} />
              </span>
              <div>
                <h3 className="text-sm font-extrabold text-[#102b43]">
                  {t.availabilityLabel}
                </h3>
                <p className="mt-1 text-xs leading-6 text-[#758ba2]">
                  {t.availabilityDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#e3f0f0] p-4">
            <ShieldCheck size={19} className="mt-0.5 shrink-0 text-[#087f86]" />
            <p className="text-xs leading-6 text-[#526d86]">
              {t.privacy}
            </p>
          </div>
        </aside>

        {/* WHATSAPP FORM */}
        <div className="rounded-3xl border border-[#d4e5ef] bg-white p-5 shadow-[0_18px_50px_rgba(16,43,67,0.05)] sm:p-8 lg:p-9">
          <div className="mb-7 flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087f86] text-white">
              <Send size={22} />
            </span>
            <div>
              <h2 className="text-xl font-black tracking-tight text-[#102b43] sm:text-2xl">
                {t.formTitle}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#758ba2]">
                {t.formDescription}
              </p>
            </div>
          </div>

          <form onSubmit={submitToWhatsApp} className="space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-bold text-[#315c70]"
              >
                {t.name}
                <span className="ms-1 text-[#087f86]">*</span>
              </label>
              <div className="relative">
                <UserRound
                  size={17}
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#9bb1c0] ${
                    isRTL ? "right-4" : "left-4"
                  }`}
                />
                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  required
                  autoComplete="name"
                  placeholder={t.namePlaceholder}
                  className={`min-h-12 w-full rounded-xl border border-[#d4e5ef] bg-[#f8fbfc] py-3 text-sm text-[#102b43] outline-none transition placeholder:text-[#9aafbc] focus:border-[#087f86] focus:ring-4 focus:ring-[#087f86]/10 ${
                    isRTL ? "pr-11 pl-4" : "pl-11 pr-4"
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-bold text-[#315c70]"
              >
                {t.email}
              </label>
              <div className="relative">
                <Mail
                  size={17}
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-[#9bb1c0] ${
                    isRTL ? "right-4" : "left-4"
                  }`}
                />
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={updateField}
                  autoComplete="email"
                  placeholder={t.emailPlaceholder}
                  className={`min-h-12 w-full rounded-xl border border-[#d4e5ef] bg-[#f8fbfc] py-3 text-sm text-[#102b43] outline-none transition placeholder:text-[#9aafbc] focus:border-[#087f86] focus:ring-4 focus:ring-[#087f86]/10 ${
                    isRTL ? "pr-11 pl-4" : "pl-11 pr-4"
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-bold text-[#315c70]"
              >
                {t.subject}
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={updateField}
                className="min-h-12 w-full rounded-xl border border-[#d4e5ef] bg-[#f8fbfc] px-4 py-3 text-sm text-[#102b43] outline-none transition focus:border-[#087f86] focus:ring-4 focus:ring-[#087f86]/10"
              >
                {t.subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-bold text-[#315c70]"
              >
                {t.message}
                <span className="ms-1 text-[#087f86]">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={updateField}
                required
                rows={5}
                placeholder={t.messagePlaceholder}
                className="w-full resize-y rounded-xl border border-[#d4e5ef] bg-[#f8fbfc] px-4 py-3 text-sm leading-7 text-[#102b43] outline-none transition placeholder:text-[#9aafbc] focus:border-[#087f86] focus:ring-4 focus:ring-[#087f86]/10"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#06676e] hover:shadow-lg"
            >
              <MessageCircle size={18} />
              {t.submit}
              <ArrowRight
                size={16}
                className={`transition-transform group-hover:translate-x-1 ${
                  isRTL ? "rotate-180" : ""
                }`}
              />
            </button>

            <p className="text-center text-xs leading-5 text-[#758ba2]">
              {t.privacy}
            </p>
          </form>
        </div>
      </section>

      {/* FINAL CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#102b43] p-6 text-white sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-10">
          <div className="absolute -end-12 -top-16 h-44 w-44 rounded-full border border-white/10" />
          <div className="relative max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#a9e6e4]">
              {t.directTitle}
            </span>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {t.directText}
            </p>
          </div>

          <div className="relative mt-5 flex flex-wrap gap-3 lg:mt-0">
            <a
              href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b959a]"
            >
              <MessageCircle size={17} />
              {t.directButton}
              <ArrowUpRight size={16} />
            </a>

            <Link
              to="/about"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              {t.aboutButton}
              <ArrowRight
                size={16}
                className={isRTL ? "rotate-180" : ""}
              />
            </Link>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-center text-xs text-[#758ba2] sm:flex-row sm:items-center sm:justify-between sm:text-start">
          <span>{t.footer}</span>
          <span className="inline-flex items-center justify-center gap-2">
            <Stethoscope size={14} className="text-[#087f86]" />
            {t.locationName} · {t.locationDescription}
          </span>
        </div>
      </section>
    </main>
  );
}