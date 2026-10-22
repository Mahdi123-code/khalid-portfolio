
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Brain,
  BriefcaseMedical,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
  Waves,
  Target,
  BookOpen,
  Activity,
  Building2,
} from "lucide-react";

const translations = {
  en: {
    eyebrow: "ABOUT THE DOCTOR",
    title: "A commitment to",
    highlight: "neurological excellence.",
    subtitle:
      "Meet Dr. Khalid Khan Zadran, Consultant Neurosurgeon and Brain & Spine Surgeon in Kabul, Afghanistan.",
    appointment: "Request an Appointment",
    explore: "Explore Specialties",
    profileLabel: "Professional Profile",
    profileTitle: "Medicine with expertise and compassion",
    paragraph1:
      "Dr. Khalid Khan Zadran is a Consultant Neurosurgeon specializing in brain and spine care, based at Rifah Medical Complex in Kabul, Afghanistan.",
    paragraph2:
      "His stated medical qualifications include MBBS, MD, RMP, MCPS, and FCPS in Neurosurgery. His professional interests include neurological disorders, complex neurotrauma, spinal interventions, and the application of contemporary surgical technologies.",
    paragraph3:
      "His approach to patient care emphasizes careful clinical evaluation, clear communication, and consideration of the individual needs of each patient.",
    qualification: "Qualifications",
    qualificationText: "Medical and specialist qualifications",
    memberships: "Professional affiliations",
    membershipsText: "Organizations listed in his supplied professional profile",
    clinicalPractice: "Clinical practice",
    clinicalPracticeText: "Rifah Medical Complex",
    location: "Location",
    locationText: "Kabul, Afghanistan",
    qualificationsEyebrow: "Education & Credentials",
    qualificationsTitle: "Professional qualifications",
    qualificationsText:
      "The medical qualifications provided in the doctor's professional profile.",
    degree1: "MBBS",
    degree1Text: "Bachelor of Medicine and Bachelor of Surgery",
    degree2: "MD",
    degree2Text: "Medical degree",
    degree3: "RMP",
    degree3Text: "Professional designation as supplied",
    degree4: "MCPS",
    degree4Text: "Membership qualification",
    degree5: "FCPS",
    degree5Text: "Fellowship qualification in Neurosurgery",
    membershipsEyebrow: "Professional Community",
    membershipsTitle: "Professional affiliations",
    membershipsText:
      "The following organizations are identified in the supplied profile. Confirm current membership status directly before relying on these details.",
    cpsp: "College of Physicians and Surgeons Pakistan",
    aans: "American Association of Neurological Surgeons",
    wfns: "World Federation of Neurosurgical Societies",
    psn: "Pakistan Society of Neurosurgeons",
    expertiseEyebrow: "Areas of Interest",
    expertiseTitle: "Focused on brain and spine health",
    expertiseText:
      "Professional interests across neurological assessment, neurosurgical care, and contemporary clinical practice.",
    expertise1: "Brain disorders",
    expertise1Text:
      "Clinical interest in neurological conditions affecting the brain and nervous system.",
    expertise2: "Neurotrauma",
    expertise2Text:
      "Assessment and management considerations for injuries involving the brain and nervous system.",
    expertise3: "Spinal care",
    expertise3Text:
      "Evaluation of spinal conditions and consideration of appropriate clinical options.",
    expertise4: "Surgical technology",
    expertise4Text:
      "Interest in modern technologies and evolving approaches in neurosurgery.",
    approachEyebrow: "Patient-Centred Care",
    approachTitle: "A thoughtful approach to every patient",
    approachText:
      "Neurological conditions can be complex. Understanding a patient's concerns and explaining clinical options are important parts of the care process.",
    approach1: "Careful evaluation",
    approach1Text:
      "Understand symptoms, relevant history, and clinical findings before considering treatment.",
    approach2: "Clear communication",
    approach2Text:
      "Help patients understand their condition and the next steps in their care.",
    approach3: "Individualized decisions",
    approach3Text:
      "Treatment decisions depend on the patient's condition and professional medical assessment.",
    approach4: "Continued learning",
    approach4Text:
      "Maintain an interest in developing knowledge and contemporary neurosurgical practice.",
    clinicEyebrow: "Clinical Location",
    clinicTitle: "Where to find the practice",
    clinicName: "Rifah Medical Complex",
    clinicLocation: "Kabul, Afghanistan",
    clinicText:
      "Contact the clinic to confirm consultation availability, directions, and appointment arrangements.",
    phoneLabel: "Clinic telephone",
    contactButton: "Contact the Clinic",
    contactPage: "View Contact Details",
    disclaimer:
      "The information on this page is based on the supplied professional profile and has not been independently verified. Qualifications, memberships, and clinical services should be confirmed with the doctor or clinic.",
    medicalDisclaimer:
      "This website provides general information and does not replace professional medical advice, diagnosis, or emergency care.",
  },
  fa: {
    eyebrow: "درباره داکتر",
    title: "تعهد به",
    highlight: "تخصص در سلامت اعصاب.",
    subtitle:
      "با داکتر خالد خان زدران، متخصص جراحی اعصاب و جراحی مغز و ستون فقرات در کابل، افغانستان آشنا شوید.",
    appointment: "درخواست نوبت",
    explore: "مشاهده تخصص‌ها",
    profileLabel: "پروفایل حرفه‌ای",
    profileTitle: "پزشکی با تخصص و دلسوزی",
    paragraph1:
      "داکتر خالد خان زدران متخصص جراحی اعصاب و مراقبت از مغز و ستون فقرات است که در مجتمع طبی رفاه در کابل، افغانستان فعالیت می‌کند.",
    paragraph2:
      "مدارک پزشکی ذکرشده شامل MBBS، MD، RMP، MCPS و FCPS در جراحی اعصاب است. علاقه‌مندی‌های حرفه‌ای او شامل اختلالات عصبی، آسیب‌های پیچیده عصبی، مداخلات ستون فقرات و کاربرد فناوری‌های معاصر جراحی می‌شود.",
    paragraph3:
      "رویکرد او به مراقبت از بیماران بر ارزیابی دقیق بالینی، ارتباط روشن و توجه به نیازهای فردی هر بیمار تأکید دارد.",
    qualification: "مدارک تخصصی",
    qualificationText: "مدارک پزشکی و تخصصی",
    memberships: "عضویت‌های حرفه‌ای",
    membershipsText: "انجمن‌های ذکرشده در پروفایل ارائه‌شده",
    clinicalPractice: "محل فعالیت",
    clinicalPracticeText: "مجتمع طبی رفاه",
    location: "موقعیت",
    locationText: "کابل، افغانستان",
    qualificationsEyebrow: "تحصیلات و مدارک",
    qualificationsTitle: "مدارک حرفه‌ای",
    qualificationsText: "مدارک پزشکی ذکرشده در پروفایل حرفه‌ای داکتر.",
    degree1: "MBBS",
    degree1Text: "مدرک طب و جراحی",
    degree2: "MD",
    degree2Text: "مدرک داکتری پزشکی",
    degree3: "RMP",
    degree3Text: "عنوان حرفه‌ای مطابق معلومات ارائه‌شده",
    degree4: "MCPS",
    degree4Text: "مدرک عضویت تخصصی",
    degree5: "FCPS",
    degree5Text: "مدرک تخصصی جراحی اعصاب",
    membershipsEyebrow: "جامعه حرفه‌ای",
    membershipsTitle: "انجمن‌های حرفه‌ای",
    membershipsText:
      "انجمن‌های زیر در پروفایل ارائه‌شده ذکر شده‌اند. پیش از استناد به این معلومات، وضعیت فعلی عضویت را مستقیماً تأیید کنید.",
    cpsp: "کالج پزشکان و جراحان پاکستان",
    aans: "انجمن جراحان اعصاب امریکا",
    wfns: "فدراسیون جهانی انجمن‌های جراحی اعصاب",
    psn: "انجمن جراحان اعصاب پاکستان",
    expertiseEyebrow: "حوزه‌های علاقه‌مندی",
    expertiseTitle: "تمرکز بر سلامت مغز و ستون فقرات",
    expertiseText:
      "علاقه‌مندی‌های حرفه‌ای در زمینه ارزیابی عصبی، مراقبت‌های جراحی اعصاب و روش‌های معاصر بالینی.",
    expertise1: "اختلالات مغزی",
    expertise1Text: "علاقه‌مندی بالینی به بیماری‌های مغز و دستگاه عصبی.",
    expertise2: "آسیب‌های عصبی",
    expertise2Text: "ارزیابی و بررسی مراقبت‌های لازم برای آسیب‌های مغز و دستگاه عصبی.",
    expertise3: "مراقبت از ستون فقرات",
    expertise3Text: "ارزیابی بیماری‌های ستون فقرات و بررسی گزینه‌های مناسب بالینی.",
    expertise4: "فناوری جراحی",
    expertise4Text: "علاقه‌مندی به فناوری‌های نوین و روش‌های در حال پیشرفت جراحی اعصاب.",
    approachEyebrow: "مراقبت بیمارمحور",
    approachTitle: "رویکرد سنجیده برای هر بیمار",
    approachText:
      "بیماری‌های عصبی می‌توانند پیچیده باشند. درک نگرانی‌های بیمار و توضیح گزینه‌های بالینی بخش مهمی از روند مراقبت است.",
    approach1: "ارزیابی دقیق",
    approach1Text: "بررسی علایم، سابقه مرتبط و یافته‌های بالینی پیش از بررسی درمان.",
    approach2: "ارتباط روشن",
    approach2Text: "کمک به بیماران برای درک وضعیت و مراحل بعدی مراقبت.",
    approach3: "تصمیم‌گیری متناسب",
    approach3Text: "تصمیم‌های درمانی به وضعیت بیمار و ارزیابی تخصصی پزشکی بستگی دارد.",
    approach4: "یادگیری مداوم",
    approach4Text: "توجه به گسترش دانش و روش‌های معاصر جراحی اعصاب.",
    clinicEyebrow: "موقعیت مرکز درمانی",
    clinicTitle: "محل فعالیت داکتر",
    clinicName: "مجتمع طبی رفاه",
    clinicLocation: "کابل، افغانستان",
    clinicText:
      "برای تأیید زمان مشاوره، نشانی و شرایط گرفتن نوبت با مرکز درمانی تماس بگیرید.",
    phoneLabel: "شماره تماس کلینیک",
    contactButton: "تماس با کلینیک",
    contactPage: "مشاهده معلومات تماس",
    disclaimer:
      "معلومات این صفحه بر اساس پروفایل ارائه‌شده است و مستقلاً تأیید نشده است. مدارک، عضویت‌ها و خدمات بالینی را با داکتر یا مرکز درمانی تأیید کنید.",
    medicalDisclaimer:
      "این وب‌سایت معلومات عمومی ارائه می‌کند و جایگزین مشوره تخصصی پزشکی، تشخیص یا مراقبت عاجل نیست.",
  },
  ps: {
    eyebrow: "د ډاکټر په اړه",
    title: "د ژمنتیا",
    highlight: "او تخصص له لارې عصبي پاملرنه.",
    subtitle:
      "له ډاکټر خالد خان ځدراڼ سره اشنا شئ، چې په کابل، افغانستان کې د اعصابو او مغز او ملا تیر جراح متخصص دی.",
    appointment: "د ملاقات غوښتنه",
    explore: "تخصصونه وګورئ",
    profileLabel: "مسلکي پېژندنه",
    profileTitle: "د تخصص او خواخوږۍ پر بنسټ طب",
    paragraph1:
      "ډاکټر خالد خان ځدراڼ د اعصابو جراح او د مغز او ملا تیر متخصص دی چې د کابل په رفاه طبي کمپلکس کې فعالیت کوي.",
    paragraph2:
      "په ورکړل شوو معلوماتو کې MBBS، MD، RMP، MCPS او FCPS د عصبي جراحۍ اسناد یاد شوي دي. مسلکي لېوالتیاوې یې عصبي اختلالات، پیچلي عصبي ټپونه، د ملا تیر مداخلې او د معاصرې جراحي ټکنالوژۍ کارول دي.",
    paragraph3:
      "د ناروغانو د پاملرنې تګلاره یې پر دقیقې کلینیکي ارزونې، روښانه اړیکو او د هر ناروغ اړتیاوو ته پر پاملرنې ټینګار کوي.",
    qualification: "تخصصي اسناد",
    qualificationText: "طبي او تخصصي اسناد",
    memberships: "مسلکي غړیتوبونه",
    membershipsText: "په ورکړل شوي پروفایل کې یادې شوې ټولنې",
    clinicalPractice: "کلینیکي فعالیت",
    clinicalPracticeText: "رفاه طبي کمپلکس",
    location: "ځای",
    locationText: "کابل، افغانستان",
    qualificationsEyebrow: "زده کړې او اسناد",
    qualificationsTitle: "مسلکي وړتیاوې",
    qualificationsText: "هغه طبي اسناد چې د ډاکټر په ورکړل شوي پروفایل کې یاد شوي دي.",
    degree1: "MBBS",
    degree1Text: "د طب او جراحۍ سند",
    degree2: "MD",
    degree2Text: "د طبي زده کړو سند",
    degree3: "RMP",
    degree3Text: "د ورکړل شوو معلوماتو له مخې مسلکي عنوان",
    degree4: "MCPS",
    degree4Text: "د تخصصي غړیتوب سند",
    degree5: "FCPS",
    degree5Text: "د عصبي جراحۍ تخصصي فیلوشپ",
    membershipsEyebrow: "مسلکي ټولنه",
    membershipsTitle: "مسلکي غړیتوبونه",
    membershipsText:
      "لاندې ټولنې په ورکړل شوي پروفایل کې یادې شوې دي. د دې معلوماتو له کارولو مخکې د اوسني غړیتوب حالت په مستقیم ډول تایید کړئ.",
    cpsp: "د پاکستان د ډاکټرانو او جراحانو کالج",
    aans: "د عصبي جراحانو امریکایي ټولنه",
    wfns: "د عصبي جراحۍ د ټولنو نړیوال فدراسیون",
    psn: "د پاکستان د عصبي جراحانو ټولنه",
    expertiseEyebrow: "مسلکي لېوالتیاوې",
    expertiseTitle: "د مغز او ملا تیر روغتیا ته پاملرنه",
    expertiseText:
      "د عصبي ارزونې، جراحي پاملرنې او معاصر کلینیکي فعالیت په برخو کې مسلکي لېوالتیا.",
    expertise1: "مغزي اختلالات",
    expertise1Text: "د مغز او عصبي سیستم د ناروغیو په اړه کلینیکي لېوالتیا.",
    expertise2: "عصبي ټپونه",
    expertise2Text: "د مغز او عصبي سیستم د ټپونو ارزونه او د پاملرنې اړتیاوې.",
    expertise3: "د ملا تیر پاملرنه",
    expertise3Text: "د ملا تیر د ناروغیو ارزونه او د مناسبو کلینیکي لارو څېړنه.",
    expertise4: "جراحي ټکنالوژي",
    expertise4Text: "د عصبي جراحۍ له معاصرو ټکنالوژیو او پرمختلونکو لارو سره لېوالتیا.",
    approachEyebrow: "د ناروغ پاملرنه",
    approachTitle: "د هر ناروغ لپاره سنجول شوې تګلاره",
    approachText:
      "عصبي ناروغۍ پېچلې کېدای شي. د ناروغ د اندېښنو درک کول او د کلینیکي لارو تشریح د پاملرنې مهمې برخې دي.",
    approach1: "دقیق کلینیکي ارزونه",
    approach1Text: "د درملنې تر ارزونې مخکې د نښو، تاریخچې او کلینیکي موندنو کتنه.",
    approach2: "روښانه اړیکه",
    approach2Text: "د ناروغ سره د هغه د حالت او راتلونکو ګامونو په پوهېدو کې مرسته.",
    approach3: "انفرادي پرېکړې",
    approach3Text: "د درملنې پرېکړې د ناروغ په حالت او طبي ارزونه پورې تړلې دي.",
    approach4: "دوامداره زده کړه",
    approach4Text: "د پوهې او معاصرې عصبي جراحۍ د پرمختګ په اړه لېوالتیا.",
    clinicEyebrow: "کلینیکي ځای",
    clinicTitle: "د فعالیت ځای",
    clinicName: "رفاه طبي کمپلکس",
    clinicLocation: "کابل، افغانستان",
    clinicText:
      "د ملاقات د وخت، پته او د نوبت د ترتیباتو د تایید لپاره له کلینیک سره اړیکه ونیسئ.",
    phoneLabel: "د کلینیک شمېره",
    contactButton: "له کلینیک سره اړیکه",
    contactPage: "د اړیکو معلومات",
    disclaimer:
      "د دې پاڼې معلومات د ورکړل شوي پروفایل پر بنسټ دي او په خپلواکه توګه نه دي تایید شوي. اسناد، غړیتوبونه او کلینیکي خدمات له ډاکټر یا کلینیک سره تایید کړئ.",
    medicalDisclaimer:
      "دا وېبپاڼه عمومي معلومات وړاندې کوي او د مسلکي طبي مشورې، تشخیص یا بیړنۍ درملنې ځای نه نیسي.",
  },
};

const qualifications = [
  { icon: GraduationCap, title: "degree1", detail: "degree1Text" },
  { icon: BookOpen, title: "degree2", detail: "degree2Text" },
  { icon: BriefcaseMedical, title: "degree3", detail: "degree3Text" },
  { icon: Award, title: "degree4", detail: "degree4Text" },
  { icon: ShieldCheck, title: "degree5", detail: "degree5Text" },
];

const affiliations = [
  { acronym: "CPSP", title: "cpsp" },
  { acronym: "AANS", title: "aans" },
  { acronym: "WFNS", title: "wfns" },
  { acronym: "PSN", title: "psn" },
];

const expertise = [
  { icon: Brain, title: "expertise1", description: "expertise1Text" },
  { icon: Activity, title: "expertise2", description: "expertise2Text" },
  { icon: Waves, title: "expertise3", description: "expertise3Text" },
  {
    icon: Microscope,
    title: "expertise4",
    description: "expertise4Text",
  },
];

const approaches = [
  { icon: Target, title: "approach1", description: "approach1Text" },
  {
    icon: HeartPulse,
    title: "approach2",
    description: "approach2Text",
  },
  {
    icon: Users,
    title: "approach3",
    description: "approach3Text",
  },
  {
    icon: BookOpen,
    title: "approach4",
    description: "approach4Text",
  },
];

function SectionHeading({ eyebrow, title, highlight, description, t }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
        <span className="h-px w-7 bg-teal-600" />
        {t(eyebrow)}
      </p>

      <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#142B45] sm:text-4xl lg:text-[46px]">
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

export default function About() {
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
      {/* PAGE HERO */}
      <section className="relative isolate overflow-hidden bg-[#F0F7FA]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-32 -z-10 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl"
        />

        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-xs font-bold text-teal-800">
              <Stethoscope size={16} />
              {t("eyebrow")}
            </div>

            <h1 className="max-w-3xl text-[40px] font-extrabold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-[64px]">
              {t("title")}{" "}
              <span className="text-teal-700">{t("highlight")}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
              {t("subtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-700 px-6 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                {t("appointment")}
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/specialties"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-bold transition hover:border-teal-200 hover:bg-teal-50"
              >
                {t("explore")}
                <ArrowRight size={17} className="text-teal-700" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-teal-700" />
                {t("qualification")}
              </span>
              <span className="inline-flex items-center gap-2">
                <Building2 size={15} className="text-teal-700" />
                {t("clinicalPracticeText")}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="absolute -right-3 top-7 h-[78%] w-[75%] rounded-[32px] border border-teal-200 sm:-right-5 sm:top-10" />

            <div className="relative aspect-[4/4.5] max-h-[550px] overflow-hidden rounded-[30px] bg-[#DCE9ED] shadow-[0_25px_70px_rgba(20,43,69,0.15)] sm:rounded-[38px]">
              <img
                src="/images/images.jpg"
                alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10263D]/80 via-transparent to-[#10263D]/5" />

              <div className="absolute left-4 right-4 top-4 rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur-md sm:left-6 sm:right-6 sm:top-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Brain size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      {t("profileLabel")}
                    </p>
                    <p className="mt-1 text-sm font-extrabold">
                      Dr. Khalid Khan Zadran
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/20 bg-[#10263D]/80 p-5 text-white backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                <p className="text-xs text-teal-300">{t("clinicalPractice")}</p>
                <h2 className="mt-2 text-lg font-extrabold">
                  {t("clinicName")}
                </h2>
                <p className="mt-1 text-xs text-slate-300">
                  {t("clinicLocation")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="profileLabel"
              title="profileTitle"
              highlight=""
              t={t}
            />

            <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/specialties"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#142B45] px-5 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                {t("explore")}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "qualification",
                description: "qualificationText",
              },
              {
                icon: Award,
                title: "memberships",
                description: "membershipsText",
              },
              {
                icon: Stethoscope,
                title: "clinicalPractice",
                description: "clinicalPracticeText",
              },
              {
                icon: Building2,
                title: "location",
                description: "locationText",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-100 bg-[#F6FAFC] p-5 transition hover:border-teal-200 hover:shadow-md sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-sm font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="bg-[#F3F7FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="qualificationsEyebrow"
            title="qualificationsTitle"
            highlight=""
            description="qualificationsText"
            t={t}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[22px] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-bold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {t(item.detail)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-xs leading-6 text-amber-900">
            <ShieldCheck size={19} className="mt-0.5 shrink-0" />
            <p>{t("disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL AFFILIATIONS */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="membershipsEyebrow"
            title="membershipsTitle"
            highlight=""
            description="membershipsText"
            t={t}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {affiliations.map((item) => (
              <div
                key={item.acronym}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 transition hover:border-teal-200 hover:bg-teal-50/40 sm:p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-teal-700 shadow-sm">
                  {item.acronym}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold leading-6">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.acronym}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#F3F7FA] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="expertiseEyebrow"
            title="expertiseTitle"
            highlight=""
            description="expertiseText"
            t={t}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-200/70 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-bold tracking-widest text-teal-700">
                    0{index + 1}
                  </span>

                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH TO CARE */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="approachEyebrow"
            title="approachTitle"
            highlight=""
            description="approachText"
            t={t}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approaches.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-slate-100 bg-[#F6FAFC] p-5 sm:p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-sm font-extrabold">
                    {t(item.title)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-slate-500">
                    {t(item.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLINIC CTA */}
      <section className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] bg-[#142B45] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300">
                {t("clinicEyebrow")}
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                {t("clinicTitle")}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {t("clinicText")}
              </p>

              <div className="mt-6 flex items-start gap-3">
                <Building2 size={21} className="mt-1 shrink-0 text-teal-300" />
                <div>
                  <p className="text-base font-extrabold">{t("clinicName")}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    {t("clinicLocation")}
                  </p>
                  <p className="mt-3 text-xs text-slate-300">
                    {t("phoneLabel")}: +93 78 765 4751
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/appointment"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal-600 px-6 text-sm font-bold text-white transition hover:bg-teal-500"
              >
                {t("appointment")}
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t("contactPage")}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-6 text-slate-400">
          {t("medicalDisclaimer")}
        </p>
      </section>
    </div>
  );
}
