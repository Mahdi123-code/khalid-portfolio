
import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Brain,
  Check,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Hospital,
  MapPin,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Target,
  Users,
  Activity,
  BookOpen,
  Sparkles
} from "lucide-react";
import Hero from "./Hero";

const content = {
  en: {
    eyebrow: "ABOUT THE DOCTOR",
    title: "Advanced expertise. A more personal approach.",
    intro:
      "Dr. Khalid Khan Zadran is a consultant neurosurgeon based in Kabul, Afghanistan, focused on brain and spine care through specialist assessment, surgical expertise, and thoughtful patient communication.",
    location: "Kabul, Afghanistan",
    specialty: "Consultant Neurosurgeon",
    profileLabel: "THE PROFESSIONAL PROFILE",
    profileTitle: "Committed to advancing brain and spine care.",
    profileText:
      "Dr. Zadran's professional practice brings together specialist neurosurgical training, clinical assessment, and a patient-centred approach. Helping patients understand their condition and the options available is an important part of the care journey.",
    profileText2:
      "Based at Rifah Medical Complex in Kabul, he is dedicated to contributing to the development of neurosurgical services and medical knowledge in Afghanistan.",
    credentials: "Education & credentials",
    credentialsSub: "Professional background",
    qualifications: [
      "FCPS qualification in Neurosurgery",
      "MBBS and additional medical qualifications",
      "Advanced neurosurgical training in Pakistan",
      "Professional involvement in neurosurgery",
    ],
    expertiseEyebrow: "CLINICAL EXPERTISE",
    expertiseTitle: "Areas of expertise",
    expertiseIntro:
      "Specialist evaluation and care for conditions involving the brain, spine, and nervous system.",
    specialties: [
      {
        title: "Brain & cranial surgery",
        text: "Assessment and surgical management of selected conditions affecting the brain and skull.",
        icon: Brain,
      },
      {
        title: "Spine & spinal disorders",
        text: "Evaluation of spinal conditions with attention to mobility, function, and quality of life.",
        icon: Activity,
      },
      {
        title: "Neurotrauma",
        text: "Clinical assessment of injuries involving the brain and nervous system.",
        icon: ShieldCheck,
      },
      {
        title: "Neurological conditions",
        text: "Evaluation of neurological symptoms and guidance on appropriate treatment options.",
        icon: HeartPulse,
      },
    ],
    whyEyebrow: "THE CARE PHILOSOPHY",
    whyTitle: "Medicine with the patient at its centre.",
    whyIntro:
      "Effective care is built on attentive listening, clear communication, and considered clinical decisions.",
    reasons: [
      {
        title: "Patient-first care",
        text: "Understanding individual concerns, symptoms, and treatment priorities.",
        icon: Users,
      },
      {
        title: "Clinical precision",
        text: "Considering clinical findings and available evidence when discussing care.",
        icon: Microscope,
      },
      {
        title: "Clear guidance",
        text: "Making medical information and possible next steps easier to understand.",
        icon: BadgeCheck,
      },
      {
        title: "Continuity of care",
        text: "Supporting patients through assessment, treatment planning, and follow-up.",
        icon: HeartPulse,
      },
    ],
    approachEyebrow: "THE APPROACH",
    approachTitle: "A considered path from assessment to care.",
    approachText:
      "Every patient deserves to be heard, understood, and treated with respect. The aim is to explain complex medical information clearly and help patients make informed decisions in consultation with their medical team.",
    steps: [
      {
        number: "01",
        title: "Listen & understand",
        text: "Discuss symptoms, concerns, medical history, and individual needs.",
      },
      {
        number: "02",
        title: "Assess & explain",
        text: "Review clinical findings and discuss relevant diagnostic and treatment options.",
      },
      {
        number: "03",
        title: "Plan & support",
        text: "Outline an appropriate care plan and explain the next steps.",
      },
    ],
    milestoneEyebrow: "PROFESSIONAL MILESTONE",
    milestoneTitle: "A contribution to the future of neurosurgery in Afghanistan.",
    milestoneText:
      "The professional background supplied for this website identifies Dr. Zadran as Afghanistan's first FCPS-qualified neurosurgeon. His story highlights the importance of specialist training and the continued development of neurosurgical care.",
    verification:
      "Please confirm professional qualifications and historical claims with the doctor before publication.",
    researchEyebrow: "RESEARCH & COLLABORATION",
    researchTitle: "Looking beyond clinical practice.",
    researchText:
      "Alongside clinical work, Dr. Zadran has an interest in brain disorder research and the advancement of neurosurgical knowledge. Medical collaboration and professional education can help strengthen specialist care for future generations.",
    researchPoints: [
      "Interest in brain disorder research",
      "Engagement with the Afghan neurosurgical community",
      "Commitment to medical education and professional development",
    ],
    contactEyebrow: "START A CONVERSATION",
    contactTitle: "Your next step starts with a conversation.",
    contactText:
      "Contact the clinic for information about consultations, appointments, and the process of arranging a medical assessment.",
    contactButton: "Request an appointment",
    servicesButton: "Explore specialties",
    locationLabel: "PRACTICE LOCATION",
    locationName: "Rifah Medical Complex",
    footerNote: "Brain & Spine Care · Kabul, Afghanistan",
    stats: [
      { value: "FCPS", label: "Neurosurgery" },
      { value: "Brain", label: "Specialist care" },
      { value: "Spine", label: "Specialist care" },
    ],
    principle: "CARE PRINCIPLE",
  },

  fa: {
    eyebrow: "درباره داکتر",
    title: "تخصص پیشرفته، مراقبت انسانی‌تر.",
    intro:
      "داکتر خالد خان ځدراڼ متخصص جراحی اعصاب در کابل، افغانستان است که بر مراقبت مغز و ستون فقرات، ارزیابی تخصصی و ارتباط روشن با بیماران تمرکز دارد.",
    location: "کابل، افغانستان",
    specialty: "متخصص جراحی اعصاب",
    profileLabel: "معرفی مسلکی",
    profileTitle: "تعهد به پیشرفت مراقبت از مغز و ستون فقرات.",
    profileText:
      "فعالیت مسلکی داکتر ځدراڼ آموزش تخصصی جراحی اعصاب، ارزیابی بالینی و توجه به نیازهای بیمار را با هم ترکیب می‌کند. کمک به بیمار برای شناخت وضعیت خود و گزینه‌های موجود، بخش مهم روند مراقبت است.",
    profileText2:
      "او در مجتمع طبی رفاه در کابل فعالیت می‌کند و به توسعه خدمات جراحی اعصاب و دانش طبی در افغانستان متعهد است.",
    credentials: "تحصیلات و مدارک مسلکی",
    credentialsSub: "پیشینه مسلکی",
    qualifications: [
      "مدرک تخصصی FCPS در جراحی اعصاب",
      "مدرک MBBS و سایر مدارک طبی",
      "آموزش پیشرفته جراحی اعصاب در پاکستان",
      "فعالیت مسلکی در بخش جراحی اعصاب",
    ],
    expertiseEyebrow: "تخصص‌های کلینیکی",
    expertiseTitle: "حوزه‌های تخصص",
    expertiseIntro:
      "ارزیابی و مراقبت تخصصی از بیماری‌های مغز، ستون فقرات و سیستم عصبی.",
    specialties: [
      {
        title: "جراحی مغز و جمجمه",
        text: "ارزیابی و مدیریت جراحی برخی بیماری‌های مغز و جمجمه.",
        icon: Brain,
      },
      {
        title: "ستون فقرات",
        text: "ارزیابی بیماری‌های ستون فقرات با توجه به حرکت و کیفیت زندگی.",
        icon: Activity,
      },
      {
        title: "آسیب‌های عصبی",
        text: "ارزیابی کلینیکی آسیب‌های مغز و سیستم عصبی.",
        icon: ShieldCheck,
      },
      {
        title: "بیماری‌های عصبی",
        text: "ارزیابی علایم عصبی و راهنمایی درباره گزینه‌های مناسب درمان.",
        icon: HeartPulse,
      },
    ],
    whyEyebrow: "فلسفه مراقبت",
    whyTitle: "مراقبت با محوریت بیمار.",
    whyIntro:
      "مراقبت مؤثر بر شنیدن دقیق، ارتباط روشن و تصمیم‌گیری سنجیده طبی استوار است.",
    reasons: [
      {
        title: "اولویت به بیمار",
        text: "شناخت نیازها، علایم و نگرانی‌های هر بیمار.",
        icon: Users,
      },
      {
        title: "دقت کلینیکی",
        text: "در نظر گرفتن یافته‌های طبی و شواهد موجود در روند درمان.",
        icon: Microscope,
      },
      {
        title: "راهنمایی روشن",
        text: "توضیح قابل فهم معلومات طبی و مراحل بعدی.",
        icon: BadgeCheck,
      },
      {
        title: "تداوم مراقبت",
        text: "همراهی بیمار در ارزیابی، برنامه‌ریزی درمان و پیگیری.",
        icon: HeartPulse,
      },
    ],
    approachEyebrow: "روش مراقبت",
    approachTitle: "از ارزیابی تا مراقبت، با برنامه‌ای سنجیده.",
    approachText:
      "هر بیمار شایسته شنیده‌شدن، درک‌شدن و برخورد محترمانه است. هدف این است که معلومات پیچیده طبی به شکل روشن توضیح داده شود تا بیمار با مشوره تیم طبی تصمیم آگاهانه بگیرد.",
    steps: [
      {
        number: "۰۱",
        title: "شنیدن و شناخت",
        text: "بررسی علایم، نگرانی‌ها، سابقه طبی و نیازهای فردی.",
      },
      {
        number: "۰۲",
        title: "ارزیابی و توضیح",
        text: "بررسی یافته‌های کلینیکی و توضیح گزینه‌های تشخیص و درمان.",
      },
      {
        number: "۰۳",
        title: "برنامه‌ریزی و همراهی",
        text: "توضیح برنامه مناسب مراقبت و مراحل بعدی.",
      },
    ],
    milestoneEyebrow: "دستاورد مسلکی",
    milestoneTitle: "سهم‌گیری در آینده جراحی اعصاب افغانستان.",
    milestoneText:
      "در پیشینه مسلکی ارائه‌شده برای این وب‌سایت، از داکتر ځدراڼ به‌عنوان نخستین متخصص جراحی اعصاب افغانستان با مدرک FCPS یاد شده است. مسیر مسلکی او اهمیت آموزش تخصصی و توسعه مراقبت‌های طبی را برجسته می‌سازد.",
    verification:
      "پیش از نشر، مدارک مسلکی و ادعاهای تاریخی باید با خود داکتر تأیید شوند.",
    researchEyebrow: "تحقیق و همکاری",
    researchTitle: "فراتر از فعالیت کلینیکی.",
    researchText:
      "داکتر ځدراڼ در کنار فعالیت کلینیکی به تحقیق در زمینه اختلالات مغزی و پیشرفت دانش جراحی اعصاب علاقه‌مند است. همکاری مسلکی و آموزش طبی می‌تواند به تقویت خدمات تخصصی در آینده کمک کند.",
    researchPoints: [
      "علاقه‌مندی به تحقیق در زمینه اختلالات مغزی",
      "تعامل با جامعه جراحی اعصاب افغانستان",
      "تعهد به آموزش طبی و رشد مسلکی",
    ],
    contactEyebrow: "آغاز گفتگو",
    contactTitle: "گام بعدی با یک گفتگو آغاز می‌شود.",
    contactText:
      "برای معلومات درباره مشوره طبی، نوبت و مراحل ارزیابی با کلینیک تماس بگیرید.",
    contactButton: "درخواست نوبت",
    servicesButton: "مشاهده تخصص‌ها",
    locationLabel: "محل فعالیت",
    locationName: "مجتمع طبی رفاه",
    footerNote: "مراقبت مغز و ستون فقرات · کابل، افغانستان",
    stats: [
      { value: "FCPS", label: "جراحی اعصاب" },
      { value: "مغز", label: "مراقبت تخصصی" },
      { value: "ستون فقرات", label: "مراقبت تخصصی" },
    ],
    principle: "اصل مراقبت",
  },

  ps: {
    eyebrow: "د ډاکټر په اړه",
    title: "لوړ تخصص، له ناروغ سره انساني چلند.",
    intro:
      "ډاکټر خالد خان ځدراڼ په کابل، افغانستان کې د اعصابو متخصص جراح دی چې د مغز او ملا تیر پر پاملرنې، تخصصي ارزونې او له ناروغانو سره پر روښانه اړیکو تمرکز کوي.",
    location: "کابل، افغانستان",
    specialty: "د اعصابو متخصص جراح",
    profileLabel: "مسلکي پېژندنه",
    profileTitle: "د مغز او ملا تیر د پاملرنې پرمختګ ته ژمنتیا.",
    profileText:
      "د ډاکټر ځدراڼ مسلکي فعالیت د اعصابو جراحي تخصصي زده کړې، کلینیکي ارزونه او د ناروغ اړتیاوو ته پاملرنه سره یوځای کوي. د ناروغ سره د هغه د وضعیت او شته درملنیزو لارو په پوهېدو کې مرسته د پاملرنې مهمه برخه ده.",
    profileText2:
      "هغه په کابل کې د رفاه طبي کمپلکس کې فعالیت کوي او په افغانستان کې د اعصابو جراحي د خدمتونو او طبي پوهې پراختیا ته ژمن دی.",
    credentials: "زده کړې او مسلکي اسناد",
    credentialsSub: "مسلکي مخینه",
    qualifications: [
      "د اعصابو په جراحي کې د FCPS وړتیا",
      "د MBBS سند او نورې طبي وړتیاوې",
      "په پاکستان کې د اعصابو جراحي پرمختللې روزنه",
      "د اعصابو جراحي په برخه کې مسلکي فعالیت",
    ],
    expertiseEyebrow: "کلینیکي تخصص",
    expertiseTitle: "د تخصص برخې",
    expertiseIntro:
      "د مغز، ملا تیر او عصبي سیستم د ناروغیو ارزونه او تخصصي پاملرنه.",
    specialties: [
      {
        title: "د مغز او کوپړۍ جراحي",
        text: "د مغز او کوپړۍ د ځینو ناروغیو ارزونه او جراحي مدیریت.",
        icon: Brain,
      },
      {
        title: "د ملا تیر ناروغۍ",
        text: "د حرکت او ژوند کیفیت ته په پاملرنې سره د ملا تیر ارزونه.",
        icon: Activity,
      },
      {
        title: "عصبي ټپونه",
        text: "د مغز او عصبي سیستم د ټپونو کلینیکي ارزونه.",
        icon: ShieldCheck,
      },
      {
        title: "عصبي ناروغۍ",
        text: "د عصبي نښو ارزونه او د مناسبو درملنیزو لارو په اړه لارښوونه.",
        icon: HeartPulse,
      },
    ],
    whyEyebrow: "د پاملرنې فلسفه",
    whyTitle: "د ناروغ پر اړتیاوو ولاړه پاملرنه.",
    whyIntro:
      "اغېزمن روغتیايي خدمت د ناروغ له اورېدو، روښانه اړیکو او سنجول شویو طبي پرېکړو پیلېږي.",
    reasons: [
      {
        title: "ناروغ لومړیتوب لري",
        text: "د هر ناروغ د اړتیاوو، نښو او اندېښنو درک کول.",
        icon: Users,
      },
      {
        title: "کلینیکي دقت",
        text: "د درملنې پر مهال د کلینیکي موندنو او شواهدو ارزونه.",
        icon: Microscope,
      },
      {
        title: "روښانه لارښوونه",
        text: "د طبي معلوماتو او راتلونکو ګامونو روښانه تشریح.",
        icon: BadgeCheck,
      },
      {
        title: "د پاملرنې دوام",
        text: "په ارزونه، درملنیز پلان او تعقیبي پاملرنه کې ملاتړ.",
        icon: HeartPulse,
      },
    ],
    approachEyebrow: "د پاملرنې تګلاره",
    approachTitle: "له ارزونې تر پاملرنې، په سنجول شوې لاره.",
    approachText:
      "هر ناروغ حق لري چې واورېدل شي، درک شي او درناوی یې وشي. موخه دا ده چې پېچلي طبي معلومات په روښانه ډول وړاندې شي، څو ناروغ له طبي ټیم سره په مشوره باخبره پرېکړه وکړي.",
    steps: [
      {
        number: "۰۱",
        title: "اورېدل او پوهېدل",
        text: "د نښو، اندېښنو، طبي سابقې او فردي اړتیاوو ارزونه.",
      },
      {
        number: "۰۲",
        title: "ارزونه او وضاحت",
        text: "د کلینیکي موندنو ارزونه او د تشخیص او درملنې د لارو تشریح.",
      },
      {
        number: "۰۳",
        title: "پلان او ملاتړ",
        text: "د مناسبې پاملرنې پلان او راتلونکو ګامونو تشریح.",
      },
    ],
    milestoneEyebrow: "مسلکي لاسته راوړنه",
    milestoneTitle: "په افغانستان کې د اعصابو جراحي راتلونکي ته ونډه.",
    milestoneText:
      "د دې وېب‌پاڼې لپاره د ورکړل شوې مسلکي مخینې له مخې، ډاکټر ځدراڼ د افغانستان د لومړي FCPS وړتیا لرونکي د اعصابو جراح په توګه پېژندل شوی دی. د هغه مسلکي مسیر د تخصصي زده کړو او روغتیايي خدمتونو د پراختیا اهمیت څرګندوي.",
    verification:
      "د وېب‌پاڼې تر خپرېدو مخکې باید مسلکي اسناد او تاریخي ادعاوې له ډاکټر سره تایید شي.",
    researchEyebrow: "څېړنه او همکاري",
    researchTitle: "له کلینیکي فعالیت ورهاخوا.",
    researchText:
      "ډاکټر ځدراڼ د کلینیکي فعالیت تر څنګ د مغزي اختلالاتو څېړنې او د اعصابو جراحي د پوهې پرمختګ ته لېوالتیا لري. مسلکي همکاري او طبي زده کړې د راتلونکو نسلونو لپاره د تخصصي خدمتونو په پیاوړتیا کې مرسته کوي.",
    researchPoints: [
      "د مغزي اختلالاتو څېړنې ته لېوالتیا",
      "د افغانستان د اعصابو جراحي له ټولنې سره اړیکه",
      "طبي زده کړو او مسلکي پرمختګ ته ژمنتیا",
    ],
    contactEyebrow: "خبرې پیل کړئ",
    contactTitle: "ستاسو بل ګام له یوې خبرې پیلېږي.",
    contactText:
      "د طبي مشورې، نوبت او ارزونې د پړاوونو په اړه د معلوماتو لپاره له کلینیک سره اړیکه ونیسئ.",
    contactButton: "د نوبت غوښتنه",
    servicesButton: "تخصصي برخې وګورئ",
    locationLabel: "د فعالیت ځای",
    locationName: "رفاه طبي کمپلکس",
    footerNote: "د مغز او ملا تیر پاملرنه · کابل، افغانستان",
    stats: [
      { value: "FCPS", label: "د اعصابو جراحي" },
      { value: "مغز", label: "تخصصي پاملرنه" },
      { value: "ملا تیر", label: "تخصصي پاملرنه" },
    ],
    principle: "د پاملرنې اصل",
  },
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-8 sm:mb-10">
      <p
        className={`mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
          light ? "text-[#a9e6e4]" : "text-[#087f86]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`max-w-3xl text-[30px] font-extrabold leading-[1.17] tracking-[-0.045em] sm:text-[38px] lg:text-[44px] ${
          light ? "text-white" : "text-[#102b43]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-[15px] leading-7 sm:text-[16px] sm:leading-8 ${
            light ? "text-white/75" : "text-[#526d86]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#087f86]">
      <span className="h-[2px] w-6 rounded-full bg-[#087f86]" />
      {children}
    </span>
  );
}

export default function About() {
  const { i18n } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

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
  const isRTL = language === "fa" || language === "ps";

  const fontClass = isRTL ? "font-persian" : "font-english";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className={`${fontClass} overflow-hidden bg-[#f3fafc] text-[#102b43]`}
    >

      <Hero/>

      {/* PROFILE & CREDENTIALS */}
      <section className="border-y border-[#e0edf2] bg-white/65 px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-[26px] bg-[#087f86] p-7 text-white sm:p-9 lg:p-11">
            <div className="pointer-events-none absolute -end-20 -top-24 h-72 w-72 rounded-full border border-white/15" />
            <div className="pointer-events-none absolute -end-8 -top-12 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative">
              <Eyebrow>{t.profileLabel}</Eyebrow>

              <h2 className="mt-5 max-w-xl text-[28px] font-extrabold leading-[1.2] tracking-[-0.045em] text-white sm:text-[35px]">
                {t.profileTitle}
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-white/85 sm:text-[15px] sm:leading-8">
                {t.profileText}
              </p>

              <p className="mt-4 text-[14px] leading-7 text-white/85 sm:text-[15px] sm:leading-8">
                {t.profileText2}
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <Hospital size={23} />
                </span>
                <div>
                  <p className="text-[14px] font-extrabold">
                    {t.locationName}
                  </p>
                  <p className="mt-1 text-[12px] text-white/70">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e0f2f3] text-[#087f86]">
                <GraduationCap size={28} />
              </div>
              <div>
                <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.04em] text-[#102b43] sm:text-[30px]">
                  {t.credentials}
                </h2>
                <p className="mt-2 text-[13px] text-[#526d86]">
                  {t.credentialsSub}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {t.qualifications.map((qualification, index) => (
                <div
                  key={qualification}
                  className="group flex items-start gap-4 rounded-2xl border border-[#dceaf0] bg-white p-4 transition duration-300 hover:border-[#9ecfd3] hover:shadow-[0_10px_30px_rgba(16,43,67,0.05)] sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e2f4f4] text-[#087f86] transition group-hover:bg-[#087f86] group-hover:text-white">
                    {index === 0 ? <Award size={17} /> : <Check size={17} />}
                  </span>
                  <p className="pt-1 text-[14px] font-semibold leading-6 text-[#31566f] sm:text-[15px]">
                    {qualification}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 rounded-xl bg-[#f0f7f9] px-4 py-3 text-[11px] leading-6 text-[#71879a]">
              {t.verification}
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={t.expertiseEyebrow}
            title={t.expertiseTitle}
            description={t.expertiseIntro}
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {t.specialties.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[22px] border border-[#dceaf0] bg-white p-6 shadow-[0_6px_25px_rgba(16,43,67,0.025)] transition duration-300 hover:-translate-y-1.5 hover:border-[#a6d5d8] hover:shadow-[0_20px_45px_rgba(16,43,67,0.08)] sm:p-7"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2f4f4] text-[#087f86] transition duration-300 group-hover:bg-[#087f86] group-hover:text-white">
                      <Icon size={25} strokeWidth={1.7} />
                    </span>
                    <span className="text-[12px] font-extrabold tracking-[0.15em] text-[#9bb8c4]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-extrabold leading-snug tracking-[-0.025em] text-[#102b43]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-[#526d86]">
                    {item.text}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[#b6e2e3] transition-all duration-300 group-hover:w-16 group-hover:bg-[#087f86]" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARE PHILOSOPHY */}
      <section className="border-y border-[#dceaf0] bg-white/70 px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow={t.whyEyebrow}
                title={t.whyTitle}
                description={t.whyIntro}
              />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e0f2f3] text-[#087f86]">
                <Target size={26} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#dceaf0] bg-[#f8fcfd] p-5 transition duration-300 hover:border-[#acd6da] hover:bg-white sm:p-6"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f2f3] text-[#087f86]">
                        <Icon size={21} />
                      </span>
                      <span className="text-[11px] font-extrabold tracking-[0.12em] text-[#91aab8]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-extrabold leading-snug text-[#102b43]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-[#526d86]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT APPROACH */}
      <section className="px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={t.approachEyebrow}
              title={t.approachTitle}
              description={t.approachText}
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e8ed] bg-white px-4 py-2.5">
              <ShieldCheck size={17} className="text-[#087f86]" />
              <span className="text-[12px] font-bold text-[#31566f]">
                {t.specialty}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {t.steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-expanded={isActive}
                  className={`w-full rounded-[20px] border p-5 text-start transition duration-300 sm:p-6 ${
                    isActive
                      ? "border-[#087f86] bg-[#087f86] text-white shadow-[0_15px_35px_rgba(8,127,134,0.15)]"
                      : "border-[#dceaf0] bg-white text-[#102b43] hover:border-[#b4d9dd]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[13px] font-extrabold ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-[#e2f4f4] text-[#087f86]"
                      }`}
                    >
                      {step.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-[16px] font-extrabold sm:text-[17px]">
                          {step.title}
                        </h3>
                        <ChevronDown
                          size={19}
                          className={`shrink-0 transition-transform duration-300 ${
                            isActive ? "rotate-180 text-white" : "text-[#829baa]"
                          }`}
                        />
                      </div>

                      <p
                        className={`mt-3 text-[13px] leading-7 sm:text-[14px] ${
                          isActive ? "text-white/80" : "text-[#526d86]"
                        }`}
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL MILESTONE */}
      <section className="px-4 py-6 sm:px-7 sm:py-10 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#102b43] px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="pointer-events-none absolute -end-24 -top-28 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -end-4 -top-14 h-52 w-52 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-0 start-0 h-1 w-2/5 bg-[#087f86]" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-[11px] font-bold text-[#b7eeee]">
                <Award size={15} />
                {t.milestoneEyebrow}
              </div>

              <h2 className="mt-5 max-w-3xl text-[29px] font-extrabold leading-[1.18] tracking-[-0.04em] text-white sm:text-[37px] lg:text-[43px]">
                {t.milestoneTitle}
              </h2>

              <p className="mt-5 max-w-3xl text-[14px] leading-7 text-white/75 sm:text-[15px] sm:leading-8">
                {t.milestoneText}
              </p>

              <p className="mt-4 max-w-3xl text-[11px] leading-6 text-white/50">
                {t.verification}
              </p>
            </div>

            <div className="flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/15 bg-white/[0.07] sm:h-36 sm:w-36">
              <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#087f86] text-white sm:h-24 sm:w-24">
                <GraduationCap size={43} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="group relative min-h-[300px] overflow-hidden rounded-[26px] bg-[#dceef2] sm:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Medical professionals collaborating in a clinical environment"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102b43]/75 via-transparent to-transparent" />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e2f4f4] text-[#087f86]">
                  <Microscope size={23} />
                </span>
                <div>
                  <p className="text-[15px] font-extrabold text-[#102b43]">
                    {t.researchTitle}
                  </p>
                  <p className="mt-1 text-[12px] text-[#526d86]">
                    {t.researchEyebrow}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow={t.researchEyebrow}
              title={t.researchTitle}
              description={t.researchText}
            />

            <div className="space-y-3">
              {t.researchPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-[#dceaf0] bg-white p-4 sm:p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e2f4f4] text-[#087f86]">
                    <Check size={14} />
                  </span>
                  <p className="text-[14px] leading-6 text-[#31566f]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/research"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#087f86] transition hover:gap-3 hover:text-[#06676e]"
            >
              {language === "en"
                ? "Explore research"
                : language === "fa"
                  ? "مشاهده تحقیقات"
                  : "څېړنې وګورئ"}
              <ArrowRight size={16} className={isRTL ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="px-4 pb-16 pt-2 sm:px-7 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d5e8ed] bg-white p-6 shadow-[0_20px_60px_rgba(16,43,67,0.045)] sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -end-12 -top-20 h-64 w-64 rounded-full bg-[#e2f4f4] blur-3xl" />

            <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <Eyebrow>{t.contactEyebrow}</Eyebrow>

                <h2 className="mt-4 text-[30px] font-extrabold leading-[1.15] tracking-[-0.045em] text-[#102b43] sm:text-[38px]">
                  {t.contactTitle}
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#526d86] sm:text-[15px] sm:leading-8">
                  {t.contactText}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-[12px] font-semibold text-[#526d86]">
                  <MapPin size={16} className="text-[#087f86]" />
                  {t.locationName}
                  <span className="text-[#a2b7c2]">·</span>
                  {t.location}
                </div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#087f86] px-6 py-4 text-[13px] font-extrabold text-white shadow-lg shadow-[#087f86]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#06676e] hover:shadow-xl sm:px-7"
              >
                <Stethoscope size={18} />
                {t.contactButton}
                <ArrowRight
                  size={16}
                  className={`transition-transform group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
                />
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-center text-[11px] text-[#71879a] sm:flex-row sm:items-center sm:justify-between sm:text-start">
            <p className="font-semibold">
              Dr. Khalid Khan Zadran · {t.specialty}
            </p>
            <p>{t.footerNote}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
