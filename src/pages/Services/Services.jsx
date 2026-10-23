
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Activity,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Scan,
  Bone,
  CheckCircle2,
  MapPin,
  CalendarDays,
  ChevronDown,
  Sparkles,
  Microscope,
  MoveUpRight,
} from "lucide-react";

const content = {
  en: {
    navLabel: "SPECIALTIES",
    eyebrow: "SPECIALIZED NEUROSURGICAL CARE",
    title: "Expertise for the brain. Care for your future.",
    description:
      "Explore the areas of neurosurgical care offered by Dr. Khalid Khan Zadran, with a focus on careful assessment, clear communication, and individualized treatment planning.",
    primaryCta: "Request an Appointment",
    secondaryCta: "About the Doctor",
    location: "Rifah Medical Complex, Kabul",
    featuredLabel: "CORE SPECIALTY",
    featuredTitle: "Brain & Spine Surgery",
    featuredDescription:
      "Neurosurgery focuses on conditions affecting the brain, spine, and nervous system. Each case requires a careful assessment of symptoms, clinical findings, and appropriate treatment options.",
    featuredPoints: [
      "Individualized clinical assessment",
      "Clear discussion of treatment options",
      "Patient-centered care planning",
    ],
    explore: "EXPLORE SPECIALTIES",
    exploreTitle: "Areas of clinical focus",
    exploreDescription:
      "Learn about the main areas of neurosurgical evaluation and care.",
    learnMore: "Learn more",
    items: [
      {
        title: "Brain & Cranial Surgery",
        description:
          "Evaluation and surgical management of selected conditions affecting the brain and skull.",
        detail:
          "Assessment may involve neurological examination, diagnostic imaging, and a discussion of suitable treatment options.",
        icon: Brain,
        number: "01",
        tag: "BRAIN",
      },
      {
        title: "Spine & Spinal Disorders",
        description:
          "Assessment of spinal conditions that may affect movement, comfort, and everyday function.",
        detail:
          "Care planning depends on symptoms, examination findings, imaging, and whether surgical or nonsurgical treatment is appropriate.",
        icon: Bone,
        number: "02",
        tag: "SPINE",
      },
      {
        title: "Neurotrauma",
        description:
          "Clinical evaluation of injuries involving the brain, spine, and nervous system.",
        detail:
          "Suspected serious head or spinal injuries require urgent medical assessment and appropriate emergency care.",
        icon: ShieldCheck,
        number: "03",
        tag: "TRAUMA",
      },
      {
        title: "Nervous System Conditions",
        description:
          "Assessment of neurological symptoms and guidance on appropriate diagnostic and treatment pathways.",
        detail:
          "The assessment process considers the patient's symptoms, medical history, examination findings, and relevant investigations.",
        icon: Activity,
        number: "04",
        tag: "NEUROLOGY",
      },
      {
        title: "Complex Neurosurgical Assessment",
        description:
          "Careful review of complex cases to help patients understand their condition and available options.",
        detail:
          "A structured consultation helps organize clinical information and identify suitable next steps.",
        icon: Scan,
        number: "05",
        tag: "ASSESSMENT",
      },
      {
        title: "Neurosurgical Consultation",
        description:
          "Professional consultation to discuss symptoms, medical history, diagnostic findings, and treatment considerations.",
        detail:
          "Patients can discuss their concerns, ask questions, and understand when further investigations or specialist referrals may be needed.",
        icon: Stethoscope,
        number: "06",
        tag: "CONSULTATION",
      },
    ],
    approachEyebrow: "THE CARE JOURNEY",
    approachTitle: "A clear path from assessment to care.",
    approachDescription:
      "Every patient is different. The next steps depend on individual symptoms, clinical findings, and medical needs.",
    steps: [
      {
        number: "01",
        title: "Understand",
        description:
          "Discuss symptoms, medical history, concerns, and the reason for consultation.",
        icon: HeartPulse,
      },
      {
        number: "02",
        title: "Evaluate",
        description:
          "Review clinical findings and relevant diagnostic investigations.",
        icon: Microscope,
      },
      {
        number: "03",
        title: "Plan",
        description:
          "Discuss suitable treatment options, expected next steps, and follow-up.",
        icon: CheckCircle2,
      },
    ],
    ctaEyebrow: "YOUR NEXT STEP",
    ctaTitle: "Have a concern about your brain or spine health?",
    ctaDescription:
      "Arrange a consultation to discuss your symptoms and understand the appropriate next steps for your care.",
    ctaButton: "Contact the Clinic",
    profileButton: "Meet the Doctor",
    note:
      "The appropriate treatment depends on an individual clinical assessment. Not every condition requires surgery.",
    emergency:
      "A suspected stroke, severe head injury, sudden weakness, or rapidly worsening neurological symptoms require immediate emergency medical attention.",
  },

  fa: {
    navLabel: "تخصص‌ها",
    eyebrow: "مراقبت تخصصی جراحی اعصاب",
    title: "تخصص برای مغز؛ مراقبت برای آینده شما.",
    description:
      "با حوزه‌های ارزیابی و مراقبت جراحی اعصاب داکتر خالد خان ځدراڼ آشنا شوید؛ با تمرکز بر بررسی دقیق، ارتباط روشن و برنامه درمانی متناسب با نیاز هر بیمار.",
    primaryCta: "درخواست نوبت",
    secondaryCta: "درباره داکتر",
    location: "مجتمع طبی رفاه، کابل",
    featuredLabel: "تخصص اصلی",
    featuredTitle: "جراحی مغز و ستون فقرات",
    featuredDescription:
      "جراحی اعصاب به بررسی و درمان بیماری‌های مغز، ستون فقرات و سیستم عصبی می‌پردازد. هر مورد به ارزیابی دقیق علایم، یافته‌های طبی و گزینه‌های مناسب درمان نیاز دارد.",
    featuredPoints: [
      "ارزیابی متناسب با وضعیت هر بیمار",
      "توضیح روشن گزینه‌های درمانی",
      "برنامه‌ریزی مراقبت با محوریت بیمار",
    ],
    explore: "حوزه‌های تخصص",
    exploreTitle: "حوزه‌های اصلی مراقبت",
    exploreDescription:
      "با زمینه‌های اصلی ارزیابی و مراقبت در جراحی اعصاب آشنا شوید.",
    learnMore: "معلومات بیشتر",
    items: [
      {
        title: "جراحی مغز و جمجمه",
        description:
          "ارزیابی و مدیریت جراحی برخی بیماری‌های مغز و جمجمه.",
        detail:
          "ارزیابی ممکن است شامل معاینه عصبی، تصویربرداری تشخیصی و بررسی گزینه‌های مناسب درمان باشد.",
        icon: Brain,
        number: "۰۱",
        tag: "مغز",
      },
      {
        title: "ستون فقرات",
        description:
          "ارزیابی بیماری‌های ستون فقرات که می‌توانند بر حرکت، راحتی و فعالیت روزمره تأثیر بگذارند.",
        detail:
          "برنامه مراقبت بر اساس علایم، معاینه، تصویربرداری و مناسب‌بودن درمان جراحی یا غیرجراحی تنظیم می‌شود.",
        icon: Bone,
        number: "۰۲",
        tag: "ستون فقرات",
      },
      {
        title: "آسیب‌های مغز و اعصاب",
        description:
          "ارزیابی طبی آسیب‌های مربوط به مغز، ستون فقرات و سیستم عصبی.",
        detail:
          "آسیب جدی سر یا ستون فقرات به ارزیابی فوری طبی و مراقبت مناسب اضطراری نیاز دارد.",
        icon: ShieldCheck,
        number: "۰۳",
        tag: "آسیب‌ها",
      },
      {
        title: "بیماری‌های سیستم عصبی",
        description:
          "بررسی علایم عصبی و راهنمایی درباره مسیر مناسب تشخیص و درمان.",
        detail:
          "در روند ارزیابی، علایم، سابقه طبی، یافته‌های معاینه و بررسی‌های لازم در نظر گرفته می‌شوند.",
        icon: Activity,
        number: "۰۴",
        tag: "سیستم عصبی",
      },
      {
        title: "ارزیابی موارد پیچیده",
        description:
          "بررسی دقیق موارد پیچیده برای شناخت بهتر بیماری و گزینه‌های موجود.",
        detail:
          "مشاوره منظم به بررسی معلومات طبی و مشخص‌شدن مراحل مناسب بعدی کمک می‌کند.",
        icon: Scan,
        number: "۰۵",
        tag: "ارزیابی",
      },
      {
        title: "مشاوره جراحی اعصاب",
        description:
          "مشاوره برای بررسی علایم، سابقه طبی، نتایج تشخیصی و گزینه‌های درمانی.",
        detail:
          "بیمار می‌تواند نگرانی‌های خود را مطرح کند و درباره بررسی‌های بیشتر یا ارجاع تخصصی معلومات بگیرد.",
        icon: Stethoscope,
        number: "۰۶",
        tag: "مشاوره",
      },
    ],
    approachEyebrow: "مراحل مراقبت",
    approachTitle: "مسیر روشن از ارزیابی تا مراقبت.",
    approachDescription:
      "وضعیت هر بیمار متفاوت است. مراحل بعدی بر اساس علایم، یافته‌های طبی و نیازهای فردی تعیین می‌شوند.",
    steps: [
      {
        number: "۰۱",
        title: "شناخت",
        description:
          "بررسی علایم، سابقه طبی، نگرانی‌ها و دلیل مراجعه.",
        icon: HeartPulse,
      },
      {
        number: "۰۲",
        title: "ارزیابی",
        description:
          "بررسی یافته‌های معاینه و نتایج بررسی‌های تشخیصی لازم.",
        icon: Microscope,
      },
      {
        number: "۰۳",
        title: "برنامه‌ریزی",
        description:
          "توضیح گزینه‌های مناسب درمان، مراحل بعدی و پیگیری.",
        icon: CheckCircle2,
      },
    ],
    ctaEyebrow: "گام بعدی شما",
    ctaTitle: "درباره سلامت مغز یا ستون فقرات خود نگرانی دارید؟",
    ctaDescription:
      "برای بررسی علایم و شناخت مراحل مناسب مراقبت، جهت مشاوره با کلینیک تماس بگیرید.",
    ctaButton: "تماس با کلینیک",
    profileButton: "آشنایی با داکتر",
    note:
      "درمان مناسب به ارزیابی طبی هر فرد بستگی دارد. همه بیماری‌ها به جراحی نیاز ندارند.",
    emergency:
      "احتمال سکته مغزی، آسیب شدید سر، ضعف ناگهانی یا بدترشدن سریع علایم عصبی به مراقبت فوری اضطراری نیاز دارد.",
  },

  ps: {
    navLabel: "تخصصونه",
    eyebrow: "د اعصابو تخصصي پاملرنه",
    title: "د مغز لپاره تخصص؛ ستاسو د راتلونکي لپاره پاملرنه.",
    description:
      "د ډاکټر خالد خان ځدراڼ د اعصابو جراحۍ د ارزونې او پاملرنې له برخو سره بلد شئ؛ د دقیقې ارزونې، روښانه اړیکو او د ناروغ د اړتیاوو مطابق درملنیز پلان په تمرکز سره.",
    primaryCta: "د ملاقات غوښتنه",
    secondaryCta: "د ډاکټر په اړه",
    location: "رفاه طبي کمپلکس، کابل",
    featuredLabel: "اصلي تخصص",
    featuredTitle: "د مغز او ملا تیر جراحي",
    featuredDescription:
      "د اعصابو جراحي د مغز، ملا تیر او عصبي سیستم د ناروغیو ارزونه او درملنه رانغاړي. هره قضیه د نښو، کلینیکي موندنو او مناسبو درملنیزو لارو دقیقې ارزونې ته اړتیا لري.",
    featuredPoints: [
      "د ناروغ د حالت مطابق ارزونه",
      "د درملنې د لارو روښانه تشریح",
      "د ناروغ پر اړتیاوو ولاړ پلان",
    ],
    explore: "د تخصص برخې",
    exploreTitle: "د کلینیکي پاملرنې برخې",
    exploreDescription:
      "د اعصابو جراحۍ د ارزونې او پاملرنې له مهمو برخو سره بلد شئ.",
    learnMore: "نور معلومات",
    items: [
      {
        title: "د مغز او کوپړۍ جراحي",
        description:
          "د مغز او کوپړۍ د ځینو ناروغیو ارزونه او جراحي مدیریت.",
        detail:
          "ارزونه کېدای شي عصبي معاینه، تشخیصي انځور اخیستنه او د مناسبو درملنیزو لارو بحث شامل کړي.",
        icon: Brain,
        number: "۰۱",
        tag: "مغز",
      },
      {
        title: "د ملا تیر ناروغۍ",
        description:
          "د ملا تیر د هغو ناروغیو ارزونه چې پر حرکت او ورځني ژوند اغېز کوي.",
        detail:
          "د پاملرنې پلان د نښو، معاینې، انځور اخیستنې او د جراحي یا غیرجراحي درملنې د مناسب‌والي له مخې ټاکل کېږي.",
        icon: Bone,
        number: "۰۲",
        tag: "ملا تیر",
      },
      {
        title: "د مغز او اعصابو ټپونه",
        description:
          "د مغز، ملا تیر او عصبي سیستم د ټپونو کلینیکي ارزونه.",
        detail:
          "د سر یا ملا تیر جدي ټپونه بیړنۍ طبي ارزونې او مناسبې عاجلې پاملرنې ته اړتیا لري.",
        icon: ShieldCheck,
        number: "۰۳",
        tag: "ټپونه",
      },
      {
        title: "د عصبي سیستم ناروغۍ",
        description:
          "د عصبي نښو ارزونه او د تشخیص او درملنې د مناسبو لارو په اړه لارښوونه.",
        detail:
          "د ارزونې پر مهال نښې، طبي سابقه، د معاینې پایلې او اړینې ازموینې په پام کې نیول کېږي.",
        icon: Activity,
        number: "۰۴",
        tag: "عصبي سیستم",
      },
      {
        title: "د پېچلو قضیو ارزونه",
        description:
          "د پېچلو قضیو دقیقې ارزونې له لارې د ناروغۍ او شته انتخابونو روښانه کول.",
        detail:
          "منظمه مشوره د طبي معلوماتو په ارزونه او د راتلونکو مناسبو ګامونو په ټاکلو کې مرسته کوي.",
        icon: Scan,
        number: "۰۵",
        tag: "ارزونه",
      },
      {
        title: "د اعصابو جراحۍ مشوره",
        description:
          "د نښو، طبي سابقې، تشخیصي پایلو او درملنیزو انتخابونو په اړه مسلکي مشوره.",
        detail:
          "ناروغان خپلې اندېښنې شریکولای شي او د نورو ازموینو یا متخصص ته د راجع کولو په اړه معلومات ترلاسه کولای شي.",
        icon: Stethoscope,
        number: "۰۶",
        tag: "مشوره",
      },
    ],
    approachEyebrow: "د پاملرنې بهیر",
    approachTitle: "له ارزونې تر پاملرنې روښانه لاره.",
    approachDescription:
      "د هر ناروغ حالت توپیر لري. راتلونکي ګامونه د نښو، کلینیکي موندنو او شخصي اړتیاوو له مخې ټاکل کېږي.",
    steps: [
      {
        number: "۰۱",
        title: "پوهېدل",
        description:
          "د نښو، طبي سابقې، اندېښنو او د مراجعې د دلیل په اړه خبرې.",
        icon: HeartPulse,
      },
      {
        number: "۰۲",
        title: "ارزونه",
        description:
          "د کلینیکي معاینې او اړینو تشخیصي ازموینو د پایلو ارزونه.",
        icon: Microscope,
      },
      {
        number: "۰۳",
        title: "پلان جوړول",
        description:
          "د مناسبو درملنیزو لارو، راتلونکو ګامونو او تعقیب تشریح.",
        icon: CheckCircle2,
      },
    ],
    ctaEyebrow: "ستاسو راتلونکی ګام",
    ctaTitle: "د مغز یا ملا تیر د روغتیا په اړه اندېښنه لرئ؟",
    ctaDescription:
      "د خپلو نښو د ارزونې او د پاملرنې د مناسبو راتلونکو ګامونو د پېژندلو لپاره له کلینیک سره د مشورې غوښتنه وکړئ.",
    ctaButton: "له کلینیک سره اړیکه",
    profileButton: "د ډاکټر په اړه",
    note:
      "مناسبه درملنه د هر ناروغ پر طبي ارزونې پورې اړه لري. هره ناروغي جراحي ته اړتیا نه لري.",
    emergency:
      "د سکتې شک، د سر سخت ټپ، ناڅاپي کمزوري یا د عصبي نښو چټک خرابوالی سمدستي بیړنۍ طبي پاملرنې ته اړتیا لري.",
  },
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#087f86]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#087f86]" />
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-[-0.04em] text-[#102b43] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#526d86] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Services() {
  const { i18n } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);

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
      <section className="relative isolate overflow-hidden border-b border-[#d4e5ef]">
        <div className="absolute inset-0 -z-20 bg-[#e4f3f5]" />
        <div className="absolute -end-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#c9e9eb]/60 blur-3xl" />
        <div className="absolute -start-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-white/80 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b8dce2] bg-white/75 px-4 py-2 text-[11px] font-bold text-[#315c70] shadow-sm">
              <Brain size={15} className="text-[#087f86]" />
              {t.eyebrow}
            </div>

            <h1 className="mt-6 max-w-3xl text-[38px] font-black leading-[1.08] tracking-[-0.055em] text-[#102b43] sm:text-5xl lg:text-[62px]">
              {t.title}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#526d86] sm:text-base sm:leading-8">
              {t.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(8,127,134,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#06676e] hover:shadow-[0_12px_28px_rgba(8,127,134,0.25)]"
              >
                <CalendarDays size={17} />
                {t.primaryCta}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-1 ${
                    isRTL ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#bfd9e4] bg-white/60 px-5 py-3 text-sm font-bold text-[#315c70] transition hover:border-[#087f86] hover:bg-white"
              >
                {t.secondaryCta}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#526d86]">
              <MapPin size={15} className="text-[#087f86]" />
              {t.location}
            </div>
          </div>

          {/* FEATURED SPECIALTY PANEL */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[30px] border border-[#bddde1]" />

            <div className="relative overflow-hidden rounded-[26px] bg-[#5d818e] p-6 text-white shadow-[0_25px_65px_rgba(16,43,67,0.13)] sm:p-8 lg:p-9">
              <div className="absolute -end-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -end-8 -top-12 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-extrabold tracking-[0.14em] text-[#d3f3f1]">
                    {t.featuredLabel}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#c9f0ed]">
                    <Brain size={25} strokeWidth={1.5} />
                  </span>
                </div>

                <h2 className="mt-9 text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl">
                  {t.featuredTitle}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {t.featuredDescription}
                </p>

                <div className="mt-7 space-y-3 border-t border-white/15 pt-6">
                  {t.featuredPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#b9eeee]"
                      />
                      <p className="text-sm leading-6 text-white/90">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-xs font-medium text-white/65">
                    Dr. Khalid Khan Zadran
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#087f86]">
                    <MoveUpRight size={17} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTY GRID */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.explore}
            title={t.exploreTitle}
            description={t.exploreDescription}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.items.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedCard === item.number;

              return (
                <article
                  key={item.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[#d4e5ef] bg-white p-5 shadow-[0_4px_18px_rgba(16,43,67,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#9bcdd1] hover:shadow-[0_18px_42px_rgba(16,43,67,0.08)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0f2f3] text-[#087f86] transition duration-300 group-hover:bg-[#087f86] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </span>

                    <span className="text-xs font-extrabold tracking-[0.12em] text-[#9bb5c2]">
                      {item.number}
                    </span>
                  </div>

                  <span className="mt-6 text-[10px] font-extrabold tracking-[0.16em] text-[#087f86]">
                    {item.tag}
                  </span>

                  <h3 className="mt-2 text-lg font-extrabold leading-snug tracking-[-0.025em] text-[#102b43]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#526d86]">
                    {item.description}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 rounded-xl bg-[#f0f8fa] p-4">
                      <p className="text-sm leading-7 text-[#526d86]">
                        {item.detail}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCard(isExpanded ? null : item.number)
                    }
                    aria-expanded={isExpanded}
                    className="mt-6 flex w-full items-center justify-between border-t border-[#e5eef2] pt-4 text-start text-sm font-bold text-[#087f86] transition hover:text-[#06676e]"
                  >
                    <span>{t.learnMore}</span>
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#087f86] transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARE APPROACH */}
      <section className="border-y border-[#d4e5ef] bg-[#e5f2f4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.approachEyebrow}
            title={t.approachTitle}
            description={t.approachDescription}
          />

          <div className="grid gap-4 md:grid-cols-3">
            {t.steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative rounded-[22px] border border-white/80 bg-white/75 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff1f2] text-[#087f86]">
                      <Icon size={23} strokeWidth={1.7} />
                    </span>

                    <span className="text-2xl font-black tracking-[-0.05em] text-[#bfdde0]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.03em] text-[#102b43]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#526d86]">
                    {step.description}
                  </p>

                  {index < t.steps.length - 1 && (
                    <div className="absolute -end-3 top-12 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-[#d4e5ef] bg-white text-[#087f86] md:flex">
                      <ArrowRight
                        size={13}
                        className={isRTL ? "rotate-180" : ""}
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-xs leading-6 text-[#526d86]">
            <ShieldCheck size={15} className="me-2 inline text-[#087f86]" />
            {t.note}
          </p>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102b43] px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="absolute -end-16 -top-24 h-64 w-64 rounded-full bg-[#087f86]/25 blur-3xl" />
          <div className="absolute -start-20 -bottom-28 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#8ee0df]">
                <Sparkles size={15} />
                {t.ctaEyebrow}
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-[42px]">
                {t.ctaTitle}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {t.ctaDescription}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-white/65">
                <MapPin size={15} className="text-[#8ee0df]" />
                {t.location}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#087f86] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0b969c]"
              >
                <CalendarDays size={17} />
                {t.ctaButton}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-1 ${
                    isRTL ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t.profileButton}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY INFORMATION */}
      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-start gap-3 rounded-2xl border border-[#e7c8bf] bg-[#fff8f5] p-4 sm:p-5">
          <HeartPulse size={19} className="mt-0.5 shrink-0 text-[#b4533c]" />

          <div>
            <h3 className="text-sm font-extrabold text-[#813c30]">
              {language === "en"
                ? "Important medical information"
                : language === "fa"
                  ? "معلومات مهم طبی"
                  : "مهم طبي معلومات"}
            </h3>

            <p className="mt-1 text-xs leading-6 text-[#87594e] sm:text-sm">
              {t.emergency}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
