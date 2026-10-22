
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Brain,
  BriefcaseMedical,
  Building2,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  MapPin,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Activity,
  Waves,
  BookOpen,
  Target,
} from "lucide-react";

const translations = {
  en: {
    eyebrow: "CLINICAL EXPERIENCE",
    title: "Experience focused on",
    highlight: "brain & spine care.",
    intro:
      "Explore Dr. Khalid Khan Zadran's clinical practice, medical qualifications, and professional interests in neurosurgery.",
    appointment: "Request an Appointment",
    about: "About the Doctor",
    practiceEyebrow: "Current Clinical Practice",
    practiceTitle: "Providing neurological care in Kabul",
    practiceDescription:
      "Dr. Khalid Khan Zadran is a Consultant Neurosurgeon and Brain & Spine Surgeon based at Rifah Medical Complex in Kabul, Afghanistan.",
    clinic: "Rifah Medical Complex",
    location: "Kabul, Afghanistan",
    currentPractice: "Reported clinical practice",
    currentLabel: "Clinical practice",
    currentValue: "Consultant Neurosurgeon",
    focusLabel: "Clinical focus",
    focusValue: "Brain & Spine Surgery",
    qualificationLabel: "Specialist qualification",
    qualificationValue: "FCPS Neurosurgery",
    journeyEyebrow: "Professional Background",
    journeyTitle: "A foundation in medicine and neurosurgery",
    journeyDescription:
      "The following milestones describe the qualifications and professional interests supplied in the doctor's profile. They are not a dated employment history.",
    step1Title: "Medical education",
    step1Description:
      "The supplied profile lists MBBS and MD among the doctor's medical qualifications.",
    step2Title: "Professional medical qualifications",
    step2Description:
      "Additional listed credentials include RMP and MCPS.",
    step3Title: "Neurosurgery specialization",
    step3Description:
      "The supplied profile lists FCPS in Neurosurgery as a specialist qualification.",
    step4Title: "Clinical practice in Kabul",
    step4Description:
      "The doctor is reported to provide neurological and neurosurgical care at Rifah Medical Complex.",
    qualificationsEyebrow: "Credentials",
    qualificationsTitle: "Medical qualifications",
    qualificationsDescription:
      "Qualifications reported in the supplied professional profile.",
    mbbs: "MBBS",
    mbbsDescription: "Bachelor of Medicine and Bachelor of Surgery.",
    md: "MD",
    mdDescription: "Medical qualification listed in the supplied profile.",
    rmp: "RMP",
    rmpDescription: "Professional designation as provided in the profile.",
    mcps: "MCPS",
    mcpsDescription: "Membership qualification as listed in the profile.",
    fcps: "FCPS",
    fcpsDescription: "Fellowship qualification in Neurosurgery as reported.",
    interestsEyebrow: "Clinical Interests",
    interestsTitle: "Areas of professional focus",
    interestsDescription:
      "Areas of clinical interest identified in the supplied professional information.",
    brainTitle: "Brain disorders",
    brainDescription:
      "Professional interest in neurological disorders and conditions affecting the brain.",
    traumaTitle: "Complex neurotrauma",
    traumaDescription:
      "Interest in the assessment and management of injuries involving the brain and nervous system.",
    spineTitle: "Spinal interventions",
    spineDescription:
      "Clinical interest in spinal conditions and appropriate neurosurgical interventions.",
    technologyTitle: "Modern surgical technology",
    technologyDescription:
      "Interest in contemporary technologies and evolving approaches in neurosurgical practice.",
    affiliationsEyebrow: "Professional Memberships",
    affiliationsTitle: "Professional affiliations",
    affiliationsDescription:
      "The following organizations are listed in the supplied profile. Current membership status has not been independently verified.",
    cpsp: "College of Physicians and Surgeons Pakistan",
    aans: "American Association of Neurological Surgeons",
    wfns: "World Federation of Neurosurgical Societies",
    psn: "Pakistan Society of Neurosurgeons",
    patientEyebrow: "Patient-Centred Care",
    patientTitle: "Experience supported by thoughtful care",
    patientDescription:
      "Neurosurgical care involves careful assessment, clear explanations, and decisions based on each patient's clinical circumstances.",
    care1: "Clinical assessment",
    care1Description:
      "Review symptoms, relevant medical history, and clinical findings.",
    care2: "Informed discussions",
    care2Description:
      "Discuss the condition, available options, and appropriate next steps.",
    care3: "Individualized planning",
    care3Description:
      "Consider care options according to the patient's specific needs and clinical assessment.",
    care4: "Continued professional learning",
    care4Description:
      "Maintain awareness of developments in neurological and neurosurgical practice.",
    clinicEyebrow: "Clinical Location",
    clinicTitle: "Connect with the clinic",
    clinicDescription:
      "Contact Rifah Medical Complex to confirm consultation availability, services, and appointment arrangements.",
    phoneLabel: "Contact number",
    contact: "Contact the Clinic",
    specialties: "Explore Specialties",
    disclaimer:
      "This page is based on information supplied for the website and has not been independently verified. No employment dates, years of experience, hospital appointments, or surgical outcome statistics are claimed here.",
    medicalDisclaimer:
      "This website provides general information and does not replace professional medical advice, diagnosis, or emergency care.",
  },

  fa: {
    eyebrow: "تجربه بالینی",
    title: "تجربه متمرکز بر",
    highlight: "مراقبت از مغز و ستون فقرات.",
    intro:
      "با فعالیت بالینی، مدارک پزشکی و علاقه‌مندی‌های حرفه‌ای داکتر خالد خان زدران در بخش جراحی اعصاب آشنا شوید.",
    appointment: "درخواست نوبت",
    about: "درباره داکتر",
    practiceEyebrow: "فعالیت بالینی فعلی",
    practiceTitle: "ارائه مراقبت‌های عصبی در کابل",
    practiceDescription:
      "داکتر خالد خان زدران متخصص جراحی اعصاب و جراحی مغز و ستون فقرات است که در مجتمع طبی رفاه در کابل، افغانستان فعالیت می‌کند.",
    clinic: "مجتمع طبی رفاه",
    location: "کابل، افغانستان",
    currentPractice: "محل فعالیت بالینی ذکرشده",
    currentLabel: "فعالیت بالینی",
    currentValue: "متخصص جراحی اعصاب",
    focusLabel: "حوزه تخصص",
    focusValue: "جراحی مغز و ستون فقرات",
    qualificationLabel: "مدرک تخصصی",
    qualificationValue: "FCPS جراحی اعصاب",
    journeyEyebrow: "پیشینه حرفه‌ای",
    journeyTitle: "بنیاد علمی در طب و جراحی اعصاب",
    journeyDescription:
      "مراحل زیر مدارک و علاقه‌مندی‌های حرفه‌ای ذکرشده در پروفایل داکتر را معرفی می‌کند و تاریخچه استخدامی زمان‌بندی‌شده نیست.",
    step1Title: "تحصیلات پزشکی",
    step1Description:
      "در پروفایل ارائه‌شده، MBBS و MD به‌عنوان مدارک پزشکی ذکر شده‌اند.",
    step2Title: "مدارک حرفه‌ای پزشکی",
    step2Description:
      "مدارک دیگری که ذکر شده‌اند شامل RMP و MCPS می‌شوند.",
    step3Title: "تخصص جراحی اعصاب",
    step3Description:
      "در پروفایل ارائه‌شده، FCPS در جراحی اعصاب به‌عنوان مدرک تخصصی ذکر شده است.",
    step4Title: "فعالیت بالینی در کابل",
    step4Description:
      "بر اساس معلومات ارائه‌شده، داکتر در مجتمع طبی رفاه خدمات عصبی و جراحی اعصاب ارائه می‌کند.",
    qualificationsEyebrow: "مدارک",
    qualificationsTitle: "مدارک پزشکی",
    qualificationsDescription: "مدارک ذکرشده در پروفایل حرفه‌ای ارائه‌شده.",
    mbbs: "MBBS",
    mbbsDescription: "مدرک طب و جراحی.",
    md: "MD",
    mdDescription: "مدرک پزشکی ذکرشده در پروفایل ارائه‌شده.",
    rmp: "RMP",
    rmpDescription: "عنوان حرفه‌ای مطابق معلومات پروفایل.",
    mcps: "MCPS",
    mcpsDescription: "مدرک عضویت تخصصی مطابق پروفایل.",
    fcps: "FCPS",
    fcpsDescription: "مدرک فیلوشپ جراحی اعصاب مطابق معلومات ارائه‌شده.",
    interestsEyebrow: "علاقه‌مندی‌های بالینی",
    interestsTitle: "حوزه‌های تمرکز حرفه‌ای",
    interestsDescription:
      "حوزه‌های علاقه‌مندی بالینی ذکرشده در معلومات حرفه‌ای ارائه‌شده.",
    brainTitle: "اختلالات مغزی",
    brainDescription: "علاقه‌مندی حرفه‌ای به اختلالات عصبی و بیماری‌های مغز.",
    traumaTitle: "آسیب‌های پیچیده عصبی",
    traumaDescription: "علاقه‌مندی به ارزیابی و مدیریت آسیب‌های مغز و دستگاه عصبی.",
    spineTitle: "مداخلات ستون فقرات",
    spineDescription: "علاقه‌مندی بالینی به بیماری‌های ستون فقرات و مداخلات مناسب جراحی اعصاب.",
    technologyTitle: "فناوری نوین جراحی",
    technologyDescription: "علاقه‌مندی به فناوری‌های معاصر و روش‌های در حال پیشرفت جراحی اعصاب.",
    affiliationsEyebrow: "عضویت‌های حرفه‌ای",
    affiliationsTitle: "انجمن‌های حرفه‌ای",
    affiliationsDescription:
      "انجمن‌های زیر در پروفایل ارائه‌شده ذکر شده‌اند. وضعیت فعلی عضویت مستقلاً تأیید نشده است.",
    cpsp: "کالج پزشکان و جراحان پاکستان",
    aans: "انجمن جراحان اعصاب امریکا",
    wfns: "فدراسیون جهانی انجمن‌های جراحی اعصاب",
    psn: "انجمن جراحان اعصاب پاکستان",
    patientEyebrow: "مراقبت بیمارمحور",
    patientTitle: "مراقبت سنجیده در کنار تخصص",
    patientDescription:
      "مراقبت جراحی اعصاب به ارزیابی دقیق، توضیحات روشن و تصمیم‌گیری بر اساس وضعیت بالینی هر بیمار نیاز دارد.",
    care1: "ارزیابی بالینی",
    care1Description: "بررسی علایم، سابقه پزشکی مرتبط و یافته‌های بالینی.",
    care2: "گفت‌وگوی آگاهانه",
    care2Description: "توضیح وضعیت، گزینه‌های موجود و مراحل مناسب بعدی.",
    care3: "برنامه‌ریزی متناسب",
    care3Description: "بررسی گزینه‌های مراقبت بر اساس نیازهای بیمار و ارزیابی بالینی.",
    care4: "یادگیری حرفه‌ای مداوم",
    care4Description: "توجه به پیشرفت‌های پزشکی عصبی و جراحی اعصاب.",
    clinicEyebrow: "موقعیت مرکز درمانی",
    clinicTitle: "ارتباط با مرکز درمانی",
    clinicDescription:
      "برای تأیید موجودیت نوبت، خدمات و شرایط مراجعه با مجتمع طبی رفاه تماس بگیرید.",
    phoneLabel: "شماره تماس",
    contact: "تماس با مرکز درمانی",
    specialties: "مشاهده تخصص‌ها",
    disclaimer:
      "این صفحه بر اساس معلومات ارائه‌شده تهیه شده و مستقلاً تأیید نشده است. در این صفحه تاریخ استخدام، سال‌های تجربه، سمت‌های شفاخانه‌ای یا آمار نتایج جراحی ادعا نشده است.",
    medicalDisclaimer:
      "این وب‌سایت معلومات عمومی ارائه می‌کند و جایگزین مشوره تخصصی پزشکی، تشخیص یا مراقبت عاجل نیست.",
  },

  ps: {
    eyebrow: "کلینیکي تجربه",
    title: "د تمرکز تجربه په",
    highlight: "مغز او ملا تیر پاملرنه.",
    intro:
      "د ډاکټر خالد خان ځدراڼ له کلینیکي فعالیت، طبي اسنادو او د عصبي جراحۍ له مسلکي لېوالتیاوو سره اشنا شئ.",
    appointment: "د ملاقات غوښتنه",
    about: "د ډاکټر په اړه",
    practiceEyebrow: "اوسنی کلینیکي فعالیت",
    practiceTitle: "په کابل کې عصبي پاملرنه",
    practiceDescription:
      "ډاکټر خالد خان ځدراڼ د اعصابو او مغز او ملا تیر جراح متخصص دی چې د افغانستان په کابل کې د رفاه طبي کمپلکس کې فعالیت کوي.",
    clinic: "رفاه طبي کمپلکس",
    location: "کابل، افغانستان",
    currentPractice: "راپور شوی کلینیکي فعالیت",
    currentLabel: "کلینیکي فعالیت",
    currentValue: "د اعصابو جراح متخصص",
    focusLabel: "مسلکي تمرکز",
    focusValue: "د مغز او ملا تیر جراحي",
    qualificationLabel: "تخصصي سند",
    qualificationValue: "FCPS عصبي جراحي",
    journeyEyebrow: "مسلکي شالید",
    journeyTitle: "په طب او عصبي جراحۍ کې علمي بنسټ",
    journeyDescription:
      "لاندې پړاوونه د ورکړل شوي پروفایل اسناد او مسلکي لېوالتیاوې بیانوي؛ دا د دندو نېټه‌وار تاریخ نه دی.",
    step1Title: "طبي زده کړې",
    step1Description: "په ورکړل شوي پروفایل کې MBBS او MD د طبي اسنادو په توګه یاد شوي دي.",
    step2Title: "مسلکي طبي اسناد",
    step2Description: "نور یاد شوي اسناد RMP او MCPS دي.",
    step3Title: "د عصبي جراحۍ تخصص",
    step3Description: "په ورکړل شوي پروفایل کې FCPS په عصبي جراحۍ کې د تخصص سند بلل شوی دی.",
    step4Title: "په کابل کې کلینیکي فعالیت",
    step4Description: "د ورکړل شوو معلوماتو له مخې، ډاکټر په رفاه طبي کمپلکس کې عصبي او جراحي پاملرنه وړاندې کوي.",
    qualificationsEyebrow: "اسناد",
    qualificationsTitle: "طبي وړتیاوې",
    qualificationsDescription: "هغه اسناد چې په ورکړل شوي مسلکي پروفایل کې یاد شوي دي.",
    mbbs: "MBBS",
    mbbsDescription: "د طب او جراحۍ سند.",
    md: "MD",
    mdDescription: "هغه طبي سند چې په پروفایل کې یاد شوی دی.",
    rmp: "RMP",
    rmpDescription: "د پروفایل له مخې مسلکي عنوان.",
    mcps: "MCPS",
    mcpsDescription: "د پروفایل له مخې د مسلکي غړیتوب سند.",
    fcps: "FCPS",
    fcpsDescription: "د ورکړل شوو معلوماتو له مخې د عصبي جراحۍ فیلوشپ.",
    interestsEyebrow: "کلینیکي لېوالتیاوې",
    interestsTitle: "د مسلکي تمرکز برخې",
    interestsDescription: "هغه کلینیکي برخې چې په ورکړل شوو مسلکي معلوماتو کې یادې شوې دي.",
    brainTitle: "مغزي اختلالات",
    brainDescription: "د مغز او عصبي سیستم د ناروغیو په اړه مسلکي لېوالتیا.",
    traumaTitle: "پیچلي عصبي ټپونه",
    traumaDescription: "د مغز او عصبي سیستم د ټپونو ارزونې او مدیریت ته لېوالتیا.",
    spineTitle: "د ملا تیر مداخلې",
    spineDescription: "د ملا تیر د ناروغیو او مناسبو عصبي جراحي مداخلو په اړه کلینیکي لېوالتیا.",
    technologyTitle: "عصري جراحي ټکنالوژي",
    technologyDescription: "د عصبي جراحۍ له معاصرو ټکنالوژیو او پرمختلونکو لارو سره لېوالتیا.",
    affiliationsEyebrow: "مسلکي غړیتوبونه",
    affiliationsTitle: "مسلکي ټولنې",
    affiliationsDescription:
      "لاندې ټولنې په ورکړل شوي پروفایل کې یادې شوې دي. د اوسني غړیتوب حالت په خپلواکه توګه نه دی تایید شوی.",
    cpsp: "د پاکستان د ډاکټرانو او جراحانو کالج",
    aans: "د عصبي جراحانو امریکایي ټولنه",
    wfns: "د عصبي جراحۍ د ټولنو نړیوال فدراسیون",
    psn: "د پاکستان د عصبي جراحانو ټولنه",
    patientEyebrow: "د ناروغ پاملرنه",
    patientTitle: "د تخصص ترڅنګ سنجول شوې پاملرنه",
    patientDescription:
      "عصبي جراحي دقیقې ارزونې، روښانه توضیحاتو او د هر ناروغ د کلینیکي حالت پر بنسټ پرېکړو ته اړتیا لري.",
    care1: "کلینیکي ارزونه",
    care1Description: "د نښو، اړوند طبي تاریخچې او کلینیکي موندنو ارزونه.",
    care2: "روښانه مشوره",
    care2Description: "د حالت، شته انتخابونو او راتلونکو مناسبو ګامونو تشریح.",
    care3: "انفرادي پلان جوړونه",
    care3Description: "د ناروغ د اړتیاوو او کلینیکي ارزونې له مخې د پاملرنې انتخابونه.",
    care4: "دوامداره مسلکي زده کړه",
    care4Description: "په عصبي طب او عصبي جراحۍ کې پرمختګونو ته پاملرنه.",
    clinicEyebrow: "کلینیکي ځای",
    clinicTitle: "له کلینیک سره اړیکه",
    clinicDescription:
      "د ملاقات د وخت، خدماتو او ترتیباتو د تایید لپاره له رفاه طبي کمپلکس سره اړیکه ونیسئ.",
    phoneLabel: "د اړیکې شمېره",
    contact: "له کلینیک سره اړیکه",
    specialties: "تخصصونه وګورئ",
    disclaimer:
      "دا پاڼه د ورکړل شوو معلوماتو پر بنسټ جوړه شوې او په خپلواکه توګه نه ده تایید شوې. دلته د کار نېټې، د تجربې کلونه، د روغتون دندې یا د جراحۍ د پایلو شمېرې نه ادعا کېږي.",
    medicalDisclaimer:
      "دا وېبپاڼه عمومي معلومات وړاندې کوي او د مسلکي طبي مشورې، تشخیص یا بیړنۍ درملنې ځای نه نیسي.",
  },
};

const milestones = [
  {
    icon: GraduationCap,
    title: "step1Title",
    description: "step1Description",
    number: "01",
  },
  {
    icon: BookOpen,
    title: "step2Title",
    description: "step2Description",
    number: "02",
  },
  {
    icon: Award,
    title: "step3Title",
    description: "step3Description",
    number: "03",
  },
  {
    icon: Building2,
    title: "step4Title",
    description: "step4Description",
    number: "04",
  },
];

const qualifications = [
  { icon: GraduationCap, title: "mbbs", description: "mbbsDescription" },
  { icon: BookOpen, title: "md", description: "mdDescription" },
  { icon: BriefcaseMedical, title: "rmp", description: "rmpDescription" },
  { icon: ShieldCheck, title: "mcps", description: "mcpsDescription" },
  { icon: Award, title: "fcps", description: "fcpsDescription" },
];

const interests = [
  { icon: Brain, title: "brainTitle", description: "brainDescription" },
  { icon: Activity, title: "traumaTitle", description: "traumaDescription" },
  { icon: Waves, title: "spineTitle", description: "spineDescription" },
  {
    icon: Microscope,
    title: "technologyTitle",
    description: "technologyDescription",
  },
];

const carePrinciples = [
  { icon: Target, title: "care1", description: "care1Description" },
  {
    icon: HeartPulse,
    title: "care2",
    description: "care2Description",
  },
  {
    icon: CheckCircle2,
    title: "care3",
    description: "care3Description",
  },
  {
    icon: BookOpen,
    title: "care4",
    description: "care4Description",
  },
];

const affiliations = [
  { acronym: "CPSP", title: "cpsp" },
  { acronym: "AANS", title: "aans" },
  { acronym: "WFNS", title: "wfns" },
  { acronym: "PSN", title: "psn" },
];

function SectionHeading({ t, eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700 sm:text-xs">
        <span className="h-px w-7 bg-teal-600" />
        {t(eyebrow)}
      </p>

      <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#142B45] sm:text-4xl lg:text-[46px]">
        {t(title)}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
          {t(description)}
        </p>
      )}
    </div>
  );
}

export default function Experience() {
  const { i18n } = useTranslation();

  const language = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  )
    .split("-")[0]
    .toLowerCase();

  const t = (key) =>
    translations[language]?.[key] ?? translations.en[key] ?? key;

  const isRTL = language === "fa" || language === "ps";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      lang={language}
      className="overflow-hidden bg-white text-[#142B45]"
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F0F7FA]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-28 -z-10 h-96 w-96 rounded-full bg-teal-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
        />

        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-xs font-bold text-teal-800">
              <BriefcaseMedical size={16} />
              {t("eyebrow")}
            </div>

            <h1 className="max-w-3xl text-[40px] font-extrabold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-[64px]">
              {t("title")}{" "}
              <span className="text-teal-700">{t("highlight")}</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
              {t("intro")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-800"
              >
                <CalendarDays size={17} />
                {t("appointment")}
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold transition hover:border-teal-200 hover:bg-teal-50"
              >
                {t("about")}
                <ArrowRight size={16} className="text-teal-700" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -right-3 top-7 h-[78%] w-[75%] rounded-[32px] border border-teal-200 sm:-right-5 sm:top-10" />

            <div className="relative aspect-[4/4.5] max-h-[540px] overflow-hidden rounded-[30px] bg-[#DCE9ED] shadow-[0_25px_70px_rgba(20,43,69,0.15)] sm:rounded-[38px]">
              <img
                src="/images/images.jpg"
                alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/85 via-transparent to-[#10263D]/5" />

              <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/20 bg-[#10263D]/80 p-5 text-white backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200">
                    <Brain size={25} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-teal-300">
                      {t("currentPractice")}
                    </p>
                    <h2 className="mt-1 text-sm font-extrabold sm:text-base">
                      Dr. Khalid Khan Zadran
                    </h2>
                    <p className="mt-1 text-xs text-slate-300">
                      {t("currentValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-[28%] hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:flex lg:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Award size={22} />
              </span>
              <div>
                <p className="text-sm font-extrabold">FCPS</p>
                <p className="mt-1 text-[10px] text-slate-500">
                  {t("qualificationLabel")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL PRACTICE */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            t={t}
            eyebrow="practiceEyebrow"
            title="practiceTitle"
            description="practiceDescription"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                label: "currentLabel",
                value: "currentValue",
              },
              {
                icon: Brain,
                label: "focusLabel",
                value: "focusValue",
              },
              {
                icon: Award,
                label: "qualificationLabel",
                value: "qualificationValue",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-[22px] border border-slate-100 bg-[#F6FAFC] p-6 transition hover:border-teal-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                    <Icon size={23} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">{t(item.label)}</p>
                    <h3 className="mt-2 text-sm font-extrabold">
                      {t(item.value)}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-[24px] bg-[#142B45] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
                <MapPin size={23} />
              </div>
              <div>
                <h3 className="font-extrabold">{t("clinic")}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {t("location")}
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-teal-600 px-5 text-sm font-bold text-white transition hover:bg-teal-500 sm:self-center"
            >
              {t("contact")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND */}
      <section className="bg-[#F3F7FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div>
            <SectionHeading
              t={t}
              eyebrow="journeyEyebrow"
              title="journeyTitle"
              description="journeyDescription"
            />
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[25px] top-8 w-px bg-teal-200" />

            <div className="space-y-5">
              {milestones.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="relative flex gap-4 rounded-[22px] border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md sm:gap-5 sm:p-6"
                  >
                    <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border-4 border-[#F3F7FA] bg-teal-700 text-white">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-sm font-extrabold">
                          {t(item.title)}
                        </h3>
                        <span className="text-[10px] font-bold tracking-widest text-teal-700">
                          {item.number}
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                        {t(item.description)}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            t={t}
            eyebrow="qualificationsEyebrow"
            title="qualificationsTitle"
            description="qualificationsDescription"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[22px] border border-slate-100 bg-[#F6FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                    {t(item.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINICAL INTERESTS */}
      <section className="bg-[#F3F7FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            t={t}
            eyebrow="interestsEyebrow"
            title="interestsTitle"
            description="interestsDescription"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-bold tracking-widest text-teal-700">
                    0{index + 1}
                  </span>

                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-sm font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL AFFILIATIONS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            t={t}
            eyebrow="affiliationsEyebrow"
            title="affiliationsTitle"
            description="affiliationsDescription"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {affiliations.map((item) => (
              <article
                key={item.acronym}
                className="flex items-center gap-4 rounded-[22px] border border-slate-100 bg-[#F6FAFC] p-5 transition hover:border-teal-200 hover:bg-teal-50/30 sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-teal-700 shadow-sm">
                  {item.acronym}
                </div>

                <div>
                  <h3 className="text-sm font-extrabold leading-6">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-[10px] text-slate-400">
                    {item.acronym}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT-CENTRED APPROACH */}
      <section className="bg-[#F3F7FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            t={t}
            eyebrow="patientEyebrow"
            title="patientTitle"
            description="patientDescription"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {carePrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-slate-100 bg-white p-5 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-sm font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINIC CONTACT */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#142B45] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                {t("clinicEyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                {t("clinicTitle")}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {t("clinicDescription")}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <MapPin size={21} className="shrink-0 text-teal-300" />
                <div>
                  <p className="text-sm font-extrabold">{t("clinic")}</p>
                  <p className="mt-1 text-xs text-slate-300">
                    {t("location")}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    {t("phoneLabel")}: +93 78 765 4751
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-600 px-6 text-sm font-bold text-white transition hover:bg-teal-500"
              >
                {t("contact")}
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/specialties"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t("specialties")}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-6 text-slate-400">
          {t("disclaimer")}
        </p>

        <p className="mx-auto mt-2 max-w-4xl text-center text-[11px] leading-6 text-slate-400">
          {t("medicalDisclaimer")}
        </p>
      </section>
    </div>
  );
}
