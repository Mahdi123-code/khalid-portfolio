import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  BookOpen,
  Microscope,
  Users,
  GraduationCap,
  Network,
  ShieldCheck,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const content = {
  en: {
    eyebrow: "RESEARCH & INNOVATION",
    title: "Advancing neurosurgical knowledge through research.",
    description:
      "Exploring brain disorders, sharing medical knowledge, and supporting the continued development of specialist neurosurgical care in Afghanistan.",
    primary: "Contact the Doctor",
    secondary: "About the Doctor",
    badge: "Research · Education · Collaboration",
    focusLabel: "AREAS OF INTEREST",
    focusTitle: "A commitment to medical progress",
    focusDescription:
      "Research and professional collaboration help strengthen clinical knowledge and improve understanding of complex neurological conditions.",
    areas: [
      {
        number: "01",
        title: "Brain Disorder Research",
        text: "An interest in understanding brain disorders and contributing to the development of neurological knowledge.",
        icon: Brain,
      },
      {
        number: "02",
        title: "Neurosurgical Education",
        text: "Supporting the exchange of specialist knowledge and continued learning within the medical community.",
        icon: BookOpen,
      },
      {
        number: "03",
        title: "Clinical Collaboration",
        text: "Recognizing the value of professional collaboration in sharing experience and advancing specialist care.",
        icon: Network,
      },
      {
        number: "04",
        title: "Medical Development",
        text: "Contributing to conversations about strengthening neurosurgical services and expertise in Afghanistan.",
        icon: GraduationCap,
      },
    ],
    visionEyebrow: "A BROADER PERSPECTIVE",
    visionTitle: "Research is part of better care.",
    visionText:
      "Neurosurgery continues to evolve through clinical experience, scientific inquiry, professional education, and collaboration. Developing these areas is important for improving specialist knowledge and supporting the future of brain and spine care.",
    principles: [
      "Continued professional learning",
      "Knowledge sharing among medical professionals",
      "Interest in brain and nervous system disorders",
      "Development of specialist care in Afghanistan",
    ],
    collaborationEyebrow: "WORKING TOGETHER",
    collaborationTitle: "Stronger knowledge through collaboration.",
    collaborationText:
      "Professional exchange, medical education, and cooperation between healthcare professionals can help build a stronger foundation for neurosurgical practice.",
    collaborationNote:
      "This page describes professional interests, not a list of verified publications or completed clinical trials.",
    bannerEyebrow: "BRAIN & SPINE CARE",
    bannerTitle: "Interested in learning more about the doctor's work?",
    bannerText:
      "Get in touch for enquiries about professional activities, consultations, and available medical services.",
    bannerButton: "Get in Touch",
    aboutButton: "Professional Profile",
    footer: "Dr. Khalid Khan Zadran · Kabul, Afghanistan",
  },
  fa: {
    eyebrow: "تحقیق و نوآوری",
    title: "گسترش دانش جراحی اعصاب از راه تحقیق.",
    description:
      "بررسی اختلالات مغزی، تبادل دانش طبی و حمایت از رشد خدمات تخصصی جراحی اعصاب در افغانستان.",
    primary: "تماس با داکتر",
    secondary: "درباره داکتر",
    badge: "تحقیق · آموزش · همکاری",
    focusLabel: "حوزه‌های مورد علاقه",
    focusTitle: "تعهد به پیشرفت دانش طبی",
    focusDescription:
      "تحقیق و همکاری مسلکی به تقویت دانش بالینی و درک بهتر بیماری‌های پیچیده عصبی کمک می‌کند.",
    areas: [
      {
        number: "۰۱",
        title: "تحقیق اختلالات مغزی",
        text: "علاقه‌مندی به شناخت اختلالات مغزی و سهم‌گیری در گسترش دانش عصبی.",
        icon: Brain,
      },
      {
        number: "۰۲",
        title: "آموزش جراحی اعصاب",
        text: "حمایت از تبادل دانش تخصصی و یادگیری دوام‌دار در جامعه طبی.",
        icon: BookOpen,
      },
      {
        number: "۰۳",
        title: "همکاری کلینیکی",
        text: "توجه به اهمیت همکاری مسلکی برای تبادل تجربه و توسعه خدمات تخصصی.",
        icon: Network,
      },
      {
        number: "۰۴",
        title: "توسعه خدمات طبی",
        text: "سهم‌گیری در بحث‌های مربوط به تقویت خدمات جراحی اعصاب در افغانستان.",
        icon: GraduationCap,
      },
    ],
    visionEyebrow: "دیدگاه گسترده‌تر",
    visionTitle: "تحقیق بخشی از مراقبت بهتر است.",
    visionText:
      "جراحی اعصاب از طریق تجربه کلینیکی، تحقیق علمی، آموزش مسلکی و همکاری پیوسته پیشرفت می‌کند. توسعه این حوزه‌ها برای تقویت دانش تخصصی و حمایت از آینده مراقبت‌های مغز و ستون فقرات اهمیت دارد.",
    principles: [
      "یادگیری مسلکی دوام‌دار",
      "تبادل دانش میان متخصصان طبی",
      "علاقه‌مندی به بیماری‌های مغز و سیستم عصبی",
      "توسعه خدمات تخصصی در افغانستان",
    ],
    collaborationEyebrow: "همکاری مسلکی",
    collaborationTitle: "دانش قوی‌تر از راه همکاری.",
    collaborationText:
      "تبادل تجربه، آموزش طبی و همکاری میان متخصصان صحی می‌تواند پایه‌های جراحی اعصاب را تقویت کند.",
    collaborationNote:
      "این صفحه علایق مسلکی را معرفی می‌کند، نه فهرست مقالات علمی یا آزمایش‌های بالینی تأییدشده.",
    bannerEyebrow: "مراقبت مغز و ستون فقرات",
    bannerTitle: "می‌خواهید درباره فعالیت‌های داکتر بیشتر بدانید؟",
    bannerText:
      "برای پرسش درباره فعالیت‌های مسلکی، مشوره و خدمات طبی موجود با ما تماس بگیرید.",
    bannerButton: "تماس با ما",
    aboutButton: "معرفی مسلکی",
    footer: "داکتر خالد خان ځدراڼ · کابل، افغانستان",
  },
  ps: {
    eyebrow: "څېړنه او نوښت",
    title: "د څېړنې له لارې د اعصابو جراحي پوهې ته پرمختګ ورکول.",
    description:
      "د مغزي اختلالاتو څېړنه، د طبي پوهې شریکول او په افغانستان کې د تخصصي عصبي جراحي د پرمختګ ملاتړ.",
    primary: "له ډاکټر سره اړیکه",
    secondary: "د ډاکټر په اړه",
    badge: "څېړنه · زده کړه · همکاري",
    focusLabel: "د لېوالتیا برخې",
    focusTitle: "د طبي پرمختګ لپاره ژمنتیا",
    focusDescription:
      "څېړنه او مسلکي همکاري د کلینیکي پوهې په پیاوړتیا او د پېچلو عصبي ناروغیو په ښه درک کې مرسته کوي.",
    areas: [
      {
        number: "۰۱",
        title: "د مغزي اختلالاتو څېړنه",
        text: "د مغزي اختلالاتو د پېژندنې او د عصبي پوهې د پراختیا لپاره لېوالتیا.",
        icon: Brain,
      },
      {
        number: "۰۲",
        title: "د اعصابو جراحي زده کړه",
        text: "د طبي ټولنې ترمنځ د تخصصي پوهې تبادلې او دوامدارې زده کړې ملاتړ.",
        icon: BookOpen,
      },
      {
        number: "۰۳",
        title: "کلینیکي همکاري",
        text: "د تجربو شریکولو او تخصصي خدمتونو د پرمختګ لپاره د مسلکي همکارۍ ارزښت.",
        icon: Network,
      },
      {
        number: "۰۴",
        title: "د طبي خدمتونو پرمختګ",
        text: "په افغانستان کې د عصبي جراحي د خدمتونو د پیاوړتیا په اړه ونډه اخیستل.",
        icon: GraduationCap,
      },
    ],
    visionEyebrow: "پراخ لید",
    visionTitle: "څېړنه د غوره پاملرنې یوه برخه ده.",
    visionText:
      "د اعصابو جراحي د کلینیکي تجربې، علمي څېړنې، مسلکي زده کړې او همکارۍ له لارې پرمختګ کوي. د دې برخو پراختیا د تخصصي پوهې او د مغز او ملا تیر د پاملرنې د راتلونکي لپاره مهمه ده.",
    principles: [
      "دوامداره مسلکي زده کړه",
      "د طبي متخصصانو ترمنځ د پوهې شریکول",
      "د مغز او عصبي سیستم د ناروغیو په اړه لېوالتیا",
      "په افغانستان کې د تخصصي خدمتونو پراختیا",
    ],
    collaborationEyebrow: "مسلکي همکاري",
    collaborationTitle: "د همکارۍ له لارې پیاوړې پوهه.",
    collaborationText:
      "د تجربو تبادله، طبي زده کړه او د روغتیايي متخصصانو همکاري د عصبي جراحۍ لپاره پیاوړی بنسټ جوړولی شي.",
    collaborationNote:
      "دا پاڼه مسلکي لېوالتیاوې بیانوي، نه د تایید شویو علمي مقالو یا بشپړو شویو کلینیکي ازموینو لېست.",
    bannerEyebrow: "د مغز او ملا تیر پاملرنه",
    bannerTitle: "غواړئ د ډاکټر د فعالیتونو په اړه نور معلومات ترلاسه کړئ؟",
    bannerText:
      "د مسلکي فعالیتونو، مشورو او شته طبي خدمتونو په اړه د پوښتنو لپاره اړیکه ونیسئ.",
    bannerButton: "اړیکه ونیسئ",
    aboutButton: "مسلکي پېژندنه",
    footer: "ډاکټر خالد خان ځدراڼ · کابل، افغانستان",
  },
};

export default function Research() {
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

  const t = content[language];
  const isRTL = language !== "en";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="overflow-hidden bg-[#f3fafc] text-[#102b43]"
    >
      {/* HERO */}
      <section className="relative border-b border-[#d4e5ef] bg-[#e3f0f0]">
        <div className="absolute -end-20 -top-20 h-72 w-72 rounded-full border border-[#087f86]/10" />
        <div className="absolute -end-8 -top-8 h-48 w-48 rounded-full border border-[#087f86]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9dadd] bg-white/65 px-4 py-2">
              <Microscope size={15} className="text-[#087f86]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#315c70]">
                {t.eyebrow}
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#102b43]">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#526d86] sm:text-base sm:leading-8">
              {t.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#06676e]"
              >
                {t.primary}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-1 ${
                    isRTL ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#bcd5df] bg-white/60 px-5 py-3 text-sm font-bold text-[#102b43] transition hover:border-[#087f86] hover:bg-white"
              >
                {t.secondary}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#526d86]">
              <span className="h-px w-8 bg-[#087f86]" />
              {t.badge}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#b9dadd]" />

            <div className="relative overflow-hidden rounded-[1.6rem] bg-[#d5e9e9] p-6 sm:p-8">
              <div className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />

              <div className="relative grid grid-cols-2 gap-3">
                <div className="col-span-2 rounded-2xl bg-[#102b43] p-5 text-white sm:p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#a9e6e4]">
                    <Brain size={26} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a9e6e4]">
                    {t.focusLabel}
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold leading-snug sm:text-2xl">
                    {t.focusTitle}
                  </h2>
                </div>

                <div className="rounded-2xl border border-white bg-white/75 p-4 sm:p-5">
                  <Microscope size={23} className="text-[#087f86]" />
                  <p className="mt-4 text-sm font-extrabold text-[#102b43]">
                    {t.areas[0].title}
                  </p>
                </div>

                <div className="rounded-2xl border border-white bg-white/75 p-4 sm:p-5">
                  <Users size={23} className="text-[#087f86]" />
                  <p className="mt-4 text-sm font-extrabold text-[#102b43]">
                    {t.areas[2].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087f86]">
            {t.focusLabel}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] text-[#102b43] sm:text-4xl">
            {t.focusTitle}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#526d86] sm:text-base">
            {t.focusDescription}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.areas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group rounded-2xl border border-[#d4e5ef] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#9dcfd0] hover:shadow-[0_18px_45px_rgba(16,43,67,0.07)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ddf1f3] text-[#087f86] transition group-hover:bg-[#087f86] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-extrabold tracking-widest text-[#9bb1c0]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-extrabold leading-snug text-[#102b43]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#526d86]">
                  {item.text}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#9bd6d5] transition-all group-hover:w-16 group-hover:bg-[#087f86]" />
              </article>
            );
          })}
        </div>
      </section>

      {/* PROFESSIONAL APPROACH */}
      <section className="bg-[#e3f0f0]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087f86] text-white shadow-lg shadow-[#087f86]/15">
              <ShieldCheck size={27} />
            </div>

            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#087f86]">
              {t.visionEyebrow}
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight tracking-[-0.045em] text-[#102b43] sm:text-4xl">
              {t.visionTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#526d86] sm:text-base sm:leading-8">
              {t.visionText}
            </p>
          </div>

          <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-[#d4e5ef] pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ddf1f3] text-[#087f86]">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="font-extrabold text-[#102b43]">
                  {t.visionEyebrow}
                </h3>
                <p className="mt-1 text-xs text-[#758ba2]">
                  {t.badge}
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {t.principles.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#087f86]"
                  />
                  <span className="text-sm font-medium leading-6 text-[#315c70]">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid gap-8 rounded-3xl bg-[#102b43] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2">
              <Network size={15} className="text-[#a9e6e4]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a9e6e4]">
                {t.collaborationEyebrow}
              </span>
            </div>

            <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-[-0.04em] sm:text-3xl">
              {t.collaborationTitle}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              {t.collaborationText}
            </p>

            <p className="mt-4 max-w-2xl text-xs leading-6 text-white/45">
              {t.collaborationNote}
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b959a]"
          >
            {t.primary}
            <ArrowRight
              size={16}
              className={isRTL ? "rotate-180" : ""}
            />
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-[#758ba2] sm:flex-row sm:items-center sm:justify-between">
          <span>{t.footer}</span>
          <span className="inline-flex items-center gap-2">
            <Stethoscope size={14} className="text-[#087f86]" />
            {t.badge}
          </span>
        </div>
      </section>
    </main>
  );
}
