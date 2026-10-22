
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Dna,
  GraduationCap,
  HeartPulse,
  Menu,
  Microscope,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Activity,
  Target,
  Users,
  Waves,
} from "lucide-react";

const PORTRAIT = "/images/images.avif";

const content = {
  en: {
    eyebrow: "Consultant Neurosurgeon · Kabul, Afghanistan",
    heading1: "Advanced care.",
    heading2: "A better",
    heading3: "way forward.",
    intro:
      "Dedicated to brain and spine health through thoughtful diagnosis, modern neurosurgical practice, and compassionate patient care.",
    appointment: "Request an Appointment",
    profile: "Explore Profile",
    experience: "Clinical expertise",
    qualification: "Neurosurgery",
    location: "Kabul, Afghanistan",
    portraitLabel: "Professional Excellence",
    credentialsTitle: "Professional Credentials",
    credentialsSubtitle:
      "A foundation of medical education, specialist training, and professional development.",
    credential1: "Medical Education",
    credential2: "Specialist Training",
    credential3: "Professional Fellowship",
    credential4: "Neurosurgical Practice",
    affiliations: "Professional Associations",
    affiliationsSub:
      "Professional organizations listed in the supplied profile.",
    specialtiesEyebrow: "Clinical Expertise",
    specialtiesTitle: "Focused care for the",
    specialtiesHighlight: "brain & spine.",
    specialtiesText:
      "Explore areas of neurosurgical interest and care. Individual treatment recommendations depend on a clinical assessment.",
    learnMore: "Explore specialty",
    specialty1: "Brain & Neurological Disorders",
    specialty1Text:
      "Assessment and management of neurological conditions affecting the brain and nervous system.",
    specialty2: "Spine & Spinal Conditions",
    specialty2Text:
      "Evaluation of spinal disorders and consideration of appropriate treatment options.",
    specialty3: "Neurotrauma",
    specialty3Text:
      "Clinical assessment of brain and spinal injuries with attention to timely specialist care.",
    specialty4: "Modern Neurosurgery",
    specialty4Text:
      "An interest in contemporary surgical approaches and technology in neurological care.",
    aboutEyebrow: "Meet the Specialist",
    aboutTitle: "Medicine grounded in",
    aboutHighlight: "expertise and care.",
    aboutText:
      "Dr. Khalid Khan Zadran is a Consultant Neurosurgeon and Brain & Spine Surgeon based at Rifah Medical Complex in Kabul, Afghanistan.",
    aboutText2:
      "His stated qualifications include MBBS, MD, RMP, MCPS, and FCPS in Neurosurgery. His professional interests include neurological research, neurotrauma, spinal interventions, and modern surgical techniques.",
    readProfile: "Read Full Profile",
    milestone1: "Medical qualifications",
    milestone1Text: "MBBS, MD, RMP, MCPS",
    milestone2: "Specialist qualification",
    milestone2Text: "FCPS — Neurosurgery",
    milestone3: "Clinical practice",
    milestone3Text: "Rifah Medical Complex · Kabul",
    milestone4: "Professional interests",
    milestone4Text: "Brain disorders, neurotrauma & spine care",
    whyEyebrow: "Our Approach",
    whyTitle: "Care that puts the",
    whyHighlight: "patient first.",
    whyText:
      "Neurological care requires clear communication, careful evaluation, and an individualized clinical approach.",
    reason1: "Evidence-informed care",
    reason1Text:
      "Clinical decisions guided by assessment and relevant medical evidence.",
    reason2: "Individual attention",
    reason2Text:
      "A care approach that recognizes each patient's needs and concerns.",
    reason3: "Clear communication",
    reason3Text:
      "Helping patients understand their condition and discuss available options.",
    reason4: "Modern practice",
    reason4Text:
      "An interest in contemporary neurosurgical methods and medical technology.",
    researchEyebrow: "Professional Interests",
    researchTitle: "Driven by clinical knowledge.",
    researchText:
      "A professional interest in advancing the understanding and treatment of neurological and spinal conditions.",
    research1: "Brain disorder research",
    research2: "Complex neurotrauma",
    research3: "Spinal interventions",
    research4: "Modern surgical technologies",
    researchLink: "Explore Research & Expertise",
    contactEyebrow: "Start a Conversation",
    contactTitle: "Your next step starts with",
    contactHighlight: "a consultation.",
    contactText:
      "Contact Rifah Medical Complex to ask about consultation availability and the appropriate next steps for your care.",
    contactButton: "Contact the Clinic",
    phoneLabel: "Clinic contact",
    clinic: "Rifah Medical Complex",
    address: "Kabul, Afghanistan",
    footerNote:
      "Professional information and educational content. Diagnosis and treatment require individual medical assessment.",
    explore: "Explore",
    about: "About",
    specialties: "Specialties",
    research: "Research",
    contact: "Contact",
    medicalDisclaimer:
      "This website is informational and does not replace professional medical advice or emergency care.",
  },
  fa: {
    eyebrow: "متخصص جراحی اعصاب · کابل، افغانستان",
    heading1: "مراقبت تخصصی.",
    heading2: "گامی بهتر",
    heading3: "به سوی سلامتی.",
    intro:
      "تعهد به سلامت مغز و ستون فقرات از طریق تشخیص دقیق، روش‌های معاصر جراحی اعصاب و مراقبت دلسوزانه از بیماران.",
    appointment: "درخواست نوبت",
    profile: "مشاهده پروفایل",
    experience: "تخصص بالینی",
    qualification: "جراحی اعصاب",
    location: "کابل، افغانستان",
    portraitLabel: "تعهد به تخصص و کیفیت",
    credentialsTitle: "اسناد و مدارک تخصصی",
    credentialsSubtitle:
      "ترکیبی از تحصیلات پزشکی، آموزش تخصصی و رشد حرفه‌ای.",
    credential1: "تحصیلات پزشکی",
    credential2: "آموزش تخصصی",
    credential3: "تخصص حرفه‌ای",
    credential4: "فعالیت جراحی اعصاب",
    affiliations: "انجمن‌های حرفه‌ای",
    affiliationsSub: "انجمن‌های ذکرشده در پروفایل ارائه‌شده.",
    specialtiesEyebrow: "تخصص بالینی",
    specialtiesTitle: "مراقبت تخصصی از",
    specialtiesHighlight: "مغز و ستون فقرات.",
    specialtiesText:
      "با حوزه‌های تخصصی جراحی اعصاب آشنا شوید. انتخاب درمان مناسب به ارزیابی بالینی فردی بستگی دارد.",
    learnMore: "مشاهده تخصص",
    specialty1: "مغز و اختلالات عصبی",
    specialty1Text:
      "ارزیابی و رسیدگی به بیماری‌های عصبی مرتبط با مغز و دستگاه عصبی.",
    specialty2: "ستون فقرات",
    specialty2Text:
      "ارزیابی اختلالات ستون فقرات و بررسی گزینه‌های مناسب درمان.",
    specialty3: "آسیب‌های عصبی",
    specialty3Text:
      "ارزیابی آسیب‌های مغز و ستون فقرات با توجه به نیازهای مراقبتی.",
    specialty4: "روش‌های معاصر جراحی اعصاب",
    specialty4Text:
      "علاقه‌مندی به روش‌های نوین جراحی و فناوری در مراقبت‌های عصبی.",
    aboutEyebrow: "معرفی متخصص",
    aboutTitle: "پزشکی بر پایه",
    aboutHighlight: "تخصص و مراقبت.",
    aboutText:
      "داکتر خالد خان زدران متخصص جراحی اعصاب و جراحی مغز و ستون فقرات است که در مجتمع طبی رفاه در کابل، افغانستان فعالیت می‌کند.",
    aboutText2:
      "مدارک ذکرشده شامل MBBS، MD، RMP، MCPS و FCPS در جراحی اعصاب است. علاقه‌مندی‌های حرفه‌ای او شامل تحقیقات اختلالات مغزی، آسیب‌های عصبی، مداخلات ستون فقرات و روش‌های نوین جراحی می‌شود.",
    readProfile: "مشاهده پروفایل کامل",
    milestone1: "مدارک پزشکی",
    milestone1Text: "MBBS، MD، RMP، MCPS",
    milestone2: "مدرک تخصصی",
    milestone2Text: "FCPS — جراحی اعصاب",
    milestone3: "محل فعالیت بالینی",
    milestone3Text: "مجتمع طبی رفاه · کابل",
    milestone4: "علاقه‌مندی‌های حرفه‌ای",
    milestone4Text: "اختلالات مغزی، آسیب‌های عصبی و ستون فقرات",
    whyEyebrow: "روش کاری ما",
    whyTitle: "مراقبتی با اولویت",
    whyHighlight: "سلامت بیمار.",
    whyText:
      "مراقبت‌های عصبی به ارتباط روشن، ارزیابی دقیق و رویکرد متناسب با وضعیت هر بیمار نیاز دارد.",
    reason1: "مراقبت مبتنی بر شواهد",
    reason1Text: "تصمیم‌گیری بالینی بر اساس ارزیابی و شواهد معتبر پزشکی.",
    reason2: "توجه فردی",
    reason2Text: "توجه به نیازها و نگرانی‌های هر بیمار.",
    reason3: "ارتباط روشن",
    reason3Text: "کمک به بیماران برای درک وضعیت و گزینه‌های درمانی.",
    reason4: "روش‌های معاصر",
    reason4Text: "علاقه‌مندی به روش‌های معاصر جراحی اعصاب و فناوری پزشکی.",
    researchEyebrow: "علاقه‌مندی‌های حرفه‌ای",
    researchTitle: "دانش بالینی در مسیر پیشرفت.",
    researchText:
      "علاقه‌مندی حرفه‌ای به گسترش دانش و بهبود رسیدگی به بیماری‌های عصبی و ستون فقرات.",
    research1: "تحقیقات اختلالات مغزی",
    research2: "آسیب‌های پیچیده عصبی",
    research3: "مداخلات ستون فقرات",
    research4: "فناوری‌های نوین جراحی",
    researchLink: "مشاهده تحقیقات و تخصص",
    contactEyebrow: "ارتباط با کلینیک",
    contactTitle: "گام بعدی شما با",
    contactHighlight: "مشاوره آغاز می‌شود.",
    contactText:
      "برای آگاهی از زمان‌های مشاوره و مراحل بعدی مراقبت، با مجتمع طبی رفاه تماس بگیرید.",
    contactButton: "تماس با کلینیک",
    phoneLabel: "شماره تماس کلینیک",
    clinic: "مجتمع طبی رفاه",
    address: "کابل، افغانستان",
    footerNote:
      "معلومات حرفه‌ای و آموزشی. تشخیص و درمان به ارزیابی فردی پزشکی نیاز دارد.",
    explore: "بخش‌ها",
    about: "درباره داکتر",
    specialties: "تخصص‌ها",
    research: "تحقیقات",
    contact: "تماس",
    medicalDisclaimer:
      "این وب‌سایت معلومات عمومی ارائه می‌کند و جایگزین مشوره تخصصی پزشکی یا مراقبت عاجل نیست.",
  },
  ps: {
    eyebrow: "د اعصاب جراح متخصص · کابل، افغانستان",
    heading1: "تخصصي پاملرنه.",
    heading2: "د ښه ژوند",
    heading3: "پر لور یو ګام.",
    intro:
      "د دقیق تشخیص، معاصرې عصبي جراحۍ او د ناروغانو د مهربانې پاملرنې له لارې د مغز او ملا تیر روغتیا ته ژمنتیا.",
    appointment: "د ملاقات غوښتنه",
    profile: "مسلکي پېژندنه",
    experience: "کلینیکي تجربه",
    qualification: "د اعصابو جراحي",
    location: "کابل، افغانستان",
    portraitLabel: "مسلکي وړتیا",
    credentialsTitle: "مسلکي اسناد",
    credentialsSubtitle: "طبي زده کړې، تخصصي روزنه او مسلکي پرمختګ.",
    credential1: "طبي زده کړې",
    credential2: "تخصصي روزنه",
    credential3: "مسلکي تخصص",
    credential4: "د اعصابو جراحي",
    affiliations: "مسلکي ټولنې",
    affiliationsSub: "هغه ټولنې چې په ورکړل شوي پروفایل کې یادې شوې دي.",
    specialtiesEyebrow: "کلینیکي تخصص",
    specialtiesTitle: "د مغز او",
    specialtiesHighlight: "ملا تیر پاملرنه.",
    specialtiesText:
      "د عصبي جراحۍ له برخو سره بلد شئ. د درملنې ټاکنه انفرادي کلینیکي ارزونې ته اړتیا لري.",
    learnMore: "نور معلومات",
    specialty1: "مغز او عصبي اختلالات",
    specialty1Text: "د مغز او عصبي سیستم د ناروغیو ارزونه او پاملرنه.",
    specialty2: "ملا تیر او نخاعي ستونزې",
    specialty2Text: "د ملا تیر د ستونزو ارزونه او د مناسبو درملنو څېړنه.",
    specialty3: "عصبي ټپونه",
    specialty3Text: "د مغز او ملا تیر د ټپونو کلینیکي ارزونه.",
    specialty4: "معاصره عصبي جراحي",
    specialty4Text: "په عصبي پاملرنه کې د معاصرو جراحي لارو او ټکنالوژۍ سره لېوالتیا.",
    aboutEyebrow: "د متخصص پېژندنه",
    aboutTitle: "طب د تخصص او",
    aboutHighlight: "پاملرنې پر بنسټ.",
    aboutText:
      "ډاکټر خالد خان ځدراڼ د اعصابو جراح او د مغز او ملا تیر متخصص دی چې د کابل په رفاه طبي کمپلکس کې فعالیت کوي.",
    aboutText2:
      "په ورکړل شوو معلوماتو کې MBBS، MD، RMP، MCPS او FCPS د عصبي جراحۍ اسناد یاد شوي دي. مسلکي لېوالتیاوې یې د مغزي اختلالاتو څېړنه، عصبي ټپونه، د ملا تیر مداخلې او معاصرې جراحي ټکنالوژۍ دي.",
    readProfile: "بشپړ پروفایل",
    milestone1: "طبي اسناد",
    milestone1Text: "MBBS، MD، RMP، MCPS",
    milestone2: "تخصصي سند",
    milestone2Text: "FCPS — د اعصابو جراحي",
    milestone3: "کلینیکي ځای",
    milestone3Text: "رفاه طبي کمپلکس · کابل",
    milestone4: "مسلکي لېوالتیاوې",
    milestone4Text: "مغزي اختلالات، عصبي ټپونه او د ملا تیر پاملرنه",
    whyEyebrow: "زموږ تګلاره",
    whyTitle: "د ناروغ روغتیا",
    whyHighlight: "لومړیتوب لري.",
    whyText:
      "عصبي پاملرنه روښانه اړیکو، دقیقې ارزونې او د هر ناروغ له حالت سره برابرې تګلارې ته اړتیا لري.",
    reason1: "د شواهدو پر بنسټ پاملرنه",
    reason1Text: "کلینیکي پرېکړې د ارزونې او طبي شواهدو پر بنسټ.",
    reason2: "انفرادي پاملرنه",
    reason2Text: "د هر ناروغ اړتیاوو او اندېښنو ته پاملرنه.",
    reason3: "روښانه اړیکه",
    reason3Text: "د ناروغ د حالت او درملنې د لارو په پوهېدو کې مرسته.",
    reason4: "معاصرې لارې",
    reason4Text: "د عصبي جراحۍ له نوو لارو او طبي ټکنالوژۍ سره لېوالتیا.",
    researchEyebrow: "مسلکي لېوالتیاوې",
    researchTitle: "د کلینیکي پوهې پرمختګ.",
    researchText:
      "د عصبي او نخاعي ناروغیو د پوهې او درملنې د پرمختګ لپاره مسلکي لېوالتیا.",
    research1: "د مغزي اختلالاتو څېړنه",
    research2: "پیچلي عصبي ټپونه",
    research3: "د ملا تیر مداخلې",
    research4: "معاصرې جراحي ټکنالوژۍ",
    researchLink: "څېړنې او تخصص",
    contactEyebrow: "اړیکه",
    contactTitle: "ستاسو راتلونکی ګام له",
    contactHighlight: "مشورې پیلېږي.",
    contactText:
      "د ملاقات د وخت او د پاملرنې د راتلونکو ګامونو په اړه د معلوماتو لپاره له رفاه طبي کمپلکس سره اړیکه ونیسئ.",
    contactButton: "له کلینیک سره اړیکه",
    phoneLabel: "د کلینیک شمېره",
    clinic: "رفاه طبي کمپلکس",
    address: "کابل، افغانستان",
    footerNote: "مسلکي او ښوونیز معلومات. تشخیص او درملنه انفرادي طبي ارزونې ته اړتیا لري.",
    explore: "برخې",
    about: "د ډاکټر په اړه",
    specialties: "تخصصونه",
    research: "څېړنې",
    contact: "اړیکه",
    medicalDisclaimer:
      "دا وېبپاڼه معلوماتي ده او د مسلکي طبي مشورې یا بیړنۍ درملنې ځای نه نیسي.",
  },
};

const specialties = [
  {
    icon: Brain,
    title: "specialty1",
    description: "specialty1Text",
    number: "01",
    route: "/specialties",
  },
  {
    icon: Waves,
    title: "specialty2",
    description: "specialty2Text",
    number: "02",
    route: "/specialties",
  },
  {
    icon: Activity,
    title: "specialty3",
    description: "specialty3Text",
    number: "03",
    route: "/specialties",
  },
  {
    icon: Microscope,
    title: "specialty4",
    description: "specialty4Text",
    number: "04",
    route: "/specialties",
  },
];

const reasons = [
  { icon: ShieldCheck, title: "reason1", description: "reason1Text" },
  { icon: Users, title: "reason2", description: "reason2Text" },
  { icon: HeartPulse, title: "reason3", description: "reason3Text" },
  { icon: Sparkles, title: "reason4", description: "reason4Text" },
];

const professionalInterests = [
  { icon: Brain, key: "research1" },
  { icon: Activity, key: "research2" },
  { icon: Waves, key: "research3" },
  { icon: Dna, key: "research4" },
];

function SectionHeading({ eyebrow, title, highlight, description, t }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
        <span className="h-px w-7 bg-teal-600" />
        {t(eyebrow)}
      </p>
      <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#142B45] sm:text-4xl lg:text-[46px]">
        {t(title)}{" "}
        <span className="text-teal-700">{t(highlight)}</span>
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
          {t(description)}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || i18n.language || "en")
    .split("-")[0]
    .toLowerCase();
  const t = (key) => content[language]?.[key] || content.en[key] || key;
  const isRTL = language === "fa" || language === "ps";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="overflow-hidden bg-white text-[#142B45]"
    >
      {/* HERO */}
      <section
        id="home"
        className="relative isolate bg-[#F0F7FA]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-28 -z-10 h-[420px] w-[420px] rounded-full bg-teal-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        />

        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:min-h-[650px] lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:px-10 lg:py-16">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-teal-100 bg-white/85 px-4 py-2 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <ShieldCheck size={17} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#31566A] sm:text-xs">
                {t("eyebrow")}
              </span>
            </div>

            <h1 className="max-w-[720px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl xl:text-[72px]">
              {t("heading1")}
              <br />
              {t("heading2")}{" "}
              <span className="relative inline-block text-teal-700">
                {t("heading3")}
                <span className="absolute -bottom-1 left-0 h-1 w-3/4 rounded-full bg-teal-200" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              {t("intro")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to="/appointment"
                className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-teal-700 px-6 text-sm font-bold text-white shadow-lg shadow-teal-800/15 transition duration-300 hover:-translate-y-0.5 hover:bg-teal-800"
              >
                <CalendarDays size={18} />
                {t("appointment")}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold transition hover:border-teal-200 hover:bg-teal-50"
              >
                {t("profile")}
                <MoveUpRight size={16} className="text-teal-700" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-6">
              {[
                ["FCPS", t("qualification")],
                ["Brain", t("specialty1")],
                ["Spine", t("specialty2")],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={`min-w-0 px-3 first:pl-0 sm:px-5 ${
                    index > 0 ? "border-l border-slate-200" : ""
                  }`}
                >
                  <p className="text-lg font-extrabold tracking-tight sm:text-2xl">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 top-8 h-[78%] w-[75%] rounded-[32px] border border-teal-200 sm:-right-5 sm:top-10 sm:rounded-[40px]"
            />

            <div className="relative aspect-[4/4.35] max-h-[600px] overflow-hidden rounded-[28px] bg-[#DCE9ED] shadow-[0_30px_80px_rgba(20,43,69,0.15)] sm:rounded-[36px]">
              <img
                src={PORTRAIT}
                alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/80 via-transparent to-[#10263D]/10" />

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-2 backdrop-blur sm:left-6 sm:top-6">
                <Sparkles size={15} className="text-teal-700" />
                <span className="text-[10px] font-bold sm:text-xs">
                  {t("portraitLabel")}
                </span>
              </div>

              <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7">
                <div className="rounded-2xl border border-white/20 bg-[#10263D]/80 p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200">
                      <Brain size={25} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-bold text-white sm:text-base">
                        Dr. Khalid Khan Zadran
                      </h2>
                      <p className="mt-1 text-xs text-slate-300">
                        {t("eyebrow")}
                      </p>
                    </div>
                    <CheckCircle2 size={21} className="shrink-0 text-teal-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-2 top-[35%] hidden max-w-[205px] items-center gap-3 rounded-2xl border border-white bg-white p-3.5 shadow-xl sm:flex lg:-left-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs font-extrabold">FCPS</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500">
                  {t("credential2")}
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 right-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:right-6">
              <span className="h-2.5 w-2.5 rounded-full bg-teal-500 ring-4 ring-teal-50" />
              <div>
                <p className="text-xs font-bold">{t("clinic")}</p>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  {t("location")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#credentials"
          aria-label="Discover professional credentials"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 transition hover:text-teal-700 lg:flex"
        >
          {t("credentialsTitle")}
          <ArrowDownRight size={15} className="animate-bounce" />
        </a>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-[1320px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                {t("credentialsTitle")}
              </p>
              <h2 className="mt-2 max-w-xl text-xl font-extrabold tracking-tight sm:text-2xl">
                {t("credentialsSubtitle")}
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900"
            >
              {t("readProfile")} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GraduationCap, title: "credential1", value: "MBBS · MD" },
              { icon: ShieldCheck, title: "credential2", value: "MCPS · FCPS" },
              { icon: Users, title: "credential3", value: "FCPS (Neurosurgery)" },
              { icon: Stethoscope, title: "credential4", value: "Brain & Spine" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#FAFCFD] p-4 transition hover:border-teal-200 hover:bg-teal-50/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={23} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold">{t(item.title)}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-[#F5F8FA] px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-extrabold">{t("affiliations")}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {t("affiliationsSub")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["CPSP", "AANS", "WFNS", "PSN"].map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-[#31566A]"
                  >
                    <CheckCircle2 size={14} className="text-teal-700" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="specialties" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="specialtiesEyebrow"
              title="specialtiesTitle"
              highlight="specialtiesHighlight"
              description="specialtiesText"
              t={t}
            />
            <Link
              to="/specialties"
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-slate-200 px-5 text-sm font-bold transition hover:border-teal-200 hover:bg-teal-50 md:self-auto"
            >
              {t("specialties")} <ArrowUpRight size={16} className="text-teal-700" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {specialties.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.number}
                  to={item.route}
                  className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_20px_50px_rgba(20,43,69,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1F4F1] text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold text-slate-300">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-base font-extrabold leading-6">
                    {t(item.title)}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-teal-700">
                    {t("learnMore")}
                    <ChevronRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT AND TIMELINE */}
      <section id="about" className="bg-[#F3F7FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="aboutEyebrow"
              title="aboutTitle"
              highlight="aboutHighlight"
              t={t}
            />
            <p className="mt-6 text-sm leading-8 text-slate-600">
              {t("aboutText")}
            </p>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              {t("aboutText2")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#142B45] px-6 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                {t("readProfile")} <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Target size={22} />
                </div>
                <div>
                  <p className="text-sm font-extrabold">{t("researchEyebrow")}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {t("researchText")}
                  </p>
                  <Link
                    to="/research"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-teal-700"
                  >
                    {t("researchLink")} <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                <GraduationCap size={25} />
              </div>
              <div>
                <p className="text-lg font-extrabold">{t("credentialsTitle")}</p>
                <p className="mt-1 text-xs text-slate-500">
                  {t("aboutEyebrow")}
                </p>
              </div>
            </div>

            <div className="relative space-y-7 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-teal-100">
              {[
                {
                  title: "milestone1",
                  description: "milestone1Text",
                  icon: GraduationCap,
                },
                {
                  title: "milestone2",
                  description: "milestone2Text",
                  icon: ShieldCheck,
                },
                {
                  title: "milestone3",
                  description: "milestone3Text",
                  icon: Stethoscope,
                },
                {
                  title: "milestone4",
                  description: "milestone4Text",
                  icon: Microscope,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative flex gap-4">
                    <div className="relative z-10 flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border border-teal-100 bg-white text-teal-700">
                      <Icon size={15} />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm font-extrabold">{t(item.title)}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {t(item.description)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <p className="text-[11px] leading-5 text-slate-400">
                {t("medicalDisclaimer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE THIS PRACTICE */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16 lg:px-10">
          <SectionHeading
            eyebrow="whyEyebrow"
            title="whyTitle"
            highlight="whyHighlight"
            description="whyText"
            t={t}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`rounded-[22px] border border-slate-100 p-6 transition hover:border-teal-200 hover:shadow-lg ${
                    index % 2 === 0 ? "bg-[#EFF8FC]" : "bg-[#F2FAF8]"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold">{t(item.title)}</h3>
                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH AND INTERESTS */}
      <section id="research" className="bg-[#142B45] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-teal-300">
              <span className="h-px w-7 bg-teal-400" />
              {t("researchEyebrow")}
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[46px]">
              {t("researchTitle")}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
              {t("researchText")}
            </p>
            <Link
              to="/research"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-600 px-6 text-sm font-bold text-white transition hover:bg-teal-500"
            >
              {t("researchLink")} <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {professionalInterests.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className="flex min-h-[120px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/10 text-teal-300">
                    <Icon size={23} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-teal-300">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1 text-sm font-bold">{t(item.key)}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#EAF6F7] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-teal-200/50 blur-3xl"
          />
          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-700">
                {t("contactEyebrow")}
              </p>
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                {t("contactTitle")}{" "}
                <span className="text-teal-700">{t("contactHighlight")}</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                {t("contactText")}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                <CalendarDays size={18} />
                {t("appointment")}
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold transition hover:border-teal-200"
              >
                {t("contactButton")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 border-t border-teal-900/10 pt-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700">
                <Stethoscope size={20} />
              </div>
              <div>
                <p className="text-sm font-extrabold">{t("clinic")}</p>
                <p className="mt-1 text-xs text-slate-600">{t("address")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700">
                <CalendarDays size={20} />
              </div>
              <div>
                <p className="text-sm font-extrabold">{t("appointment")}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {t("phoneLabel")}: +93 78 765 4751
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The shared site footer stays in App.jsx. */}
    </div>
  );
}
