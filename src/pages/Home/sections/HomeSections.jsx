
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  HeartPulse,
  Hospital,
  MapPin,
  MessageCircle,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Activity,
  Quote,
} from "lucide-react";

/* =========================================================
   DESIGN SYSTEM
   Consistent with the existing hero and navbar.
========================================================= */

const C = {
  navy: "#102B43",
  teal: "#087F86",
  tealDark: "#06676E",
  background: "#F3FAFC",
  surface: "#FFFFFF",
  pale: "#DDF1F3",
  border: "#D4E5EF",
  body: "#526D86",
  muted: "#758BA2",
};

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

/* =========================================================
   IMAGES
   Images are stored in public/images/.
========================================================= */

const images = {
  doctor: "/images/hero_image.png",
  about: "/images/about-doctor.jpg",
  brain: "/images/brain-surgery.jpg",
  spine: "/images/spine-care.jpg",
  consultation: "/images/consultation.jpg",
  research: "/images/medical-research.jpg",
  article1: "/images/article-brain.jpg",
  article2: "/images/article-spine.jpg",
  article3: "/images/article-neurosurgery.jpg",
};

/* =========================================================
   TRANSLATIONS
   en = English
   fa = Dari
   ps = Pashto
========================================================= */

const translations = {
  en: {
    aboutEyebrow: "MEET YOUR SPECIALIST",
    aboutTitle: "A commitment to better neurological care.",
    aboutDescription:
      "Dr. Khalid Khan Zadran is a consultant neurosurgeon based in Kabul, Afghanistan, with a clinical focus on brain and spine conditions.",
    aboutDescription2:
      "His professional journey reflects a commitment to specialist training, clinical assessment, medical research, and the development of neurosurgical care in Afghanistan.",
    qualification: "Professional qualification",
    qualificationValue: "FCPS Neurosurgery",
    location: "Practice location",
    locationValue: "Kabul, Afghanistan",
    exploreProfile: "Explore full profile",
    contactClinic: "Contact the clinic",

    whyEyebrow: "THE DIFFERENCE",
    whyTitle: "Specialist care. A thoughtful approach.",
    whyDescription:
      "Professional expertise and clear communication are important parts of informed medical care.",
    benefits: [
      {
        title: "Specialist Training",
        text: "Professional neurosurgical training and clinical experience.",
      },
      {
        title: "Patient-Focused Care",
        text: "Individual assessment and clear communication.",
      },
      {
        title: "Research & Learning",
        text: "An interest in neurological research and medical education.",
      },
      {
        title: "Care in Kabul",
        text: "Access to specialist consultation in Afghanistan.",
      },
    ],

    specialtyEyebrow: "CLINICAL EXPERTISE",
    specialtyTitle: "Areas of expertise.",
    specialtyDescription:
      "Learn about the clinical areas related to brain, spine, and neurological health.",
    allSpecialties: "Explore specialties",
    learnMore: "Learn more",
    specialties: [
      {
        title: "Brain Surgery",
        subtitle: "BRAIN & NEUROLOGICAL CARE",
        description:
          "Clinical assessment and surgical treatment planning for selected brain conditions.",
      },
      {
        title: "Spine Surgery",
        subtitle: "SPINE & NERVE CARE",
        description:
          "Assessment of spinal disorders, nerve compression, and appropriate treatment options.",
      },
      {
        title: "Neurotrauma",
        subtitle: "NEUROLOGICAL INJURIES",
        description:
          "Evaluation and treatment planning for brain and spinal injuries.",
      },
    ],

    serviceEyebrow: "HOW WE CAN HELP",
    serviceTitle: "Care built around your needs.",
    serviceDescription:
      "Understand your condition, discuss your options, and take the next step with informed guidance.",
    requestAppointment: "Request an appointment",
    servicesLink: "View all services",
    services: [
      {
        title: "Brain Conditions",
        description:
          "Clinical evaluation of neurological symptoms and brain disorders.",
      },
      {
        title: "Spine Assessment",
        description:
          "Assessment of spinal pain, nerve compression, and related conditions.",
      },
      {
        title: "Specialist Consultation",
        description:
          "Professional evaluation and discussion of appropriate next steps.",
      },
      {
        title: "Research & Education",
        description:
          "Engagement with neurological research and medical education.",
      },
    ],

    visitEyebrow: "YOUR VISIT",
    visitTitle: "Plan your consultation.",
    visitDescription:
      "Find out what to prepare before contacting the clinic.",
    consultationTypes: [
      {
        title: "Initial Consultation",
        description:
          "Discuss symptoms, medical history, and possible next steps.",
        points: [
          "Medical history",
          "Initial assessment",
          "Care recommendations",
        ],
      },
      {
        title: "Follow-up Visit",
        description:
          "Review previous findings, investigations, and treatment progress.",
        points: [
          "Review medical reports",
          "Discuss progress",
          "Plan follow-up",
        ],
      },
      {
        title: "Second Opinion",
        description:
          "Discuss an existing diagnosis and available treatment considerations.",
        points: [
          "Review existing records",
          "Clinical discussion",
          "Questions and answers",
        ],
      },
    ],
    askAvailability: "Ask about availability",
    feeNote:
      "Consultation fees, availability, and appointment procedures should be confirmed directly with the clinic.",

    contactEyebrow: "GET IN TOUCH",
    contactTitle: "Let's arrange your visit.",
    contactDescription:
      "Send your details to prepare an appointment inquiry through WhatsApp.",
    contactOverlayTitle: "Your health deserves careful attention.",
    contactOverlayDescription:
      "Contact the clinic to confirm consultation arrangements and the information needed for your visit.",
    fullName: "Full name",
    phoneNumber: "Phone number",
    consultationType: "Consultation type",
    additionalInfo: "Additional information",
    namePlaceholder: "Enter your full name",
    phonePlaceholder: "+93 ...",
    messagePlaceholder: "How can the clinic assist you?",
    optionBrain: "Brain or spine consultation",
    optionFollowup: "Follow-up consultation",
    optionSecond: "Second opinion",
    optionGeneral: "General appointment inquiry",
    sendWhatsApp: "Continue with WhatsApp",
    privacyNote:
      "WhatsApp will open with your message prepared. This does not confirm an appointment. Avoid including sensitive medical information.",

    educationEyebrow: "KNOWLEDGE & AWARENESS",
    educationTitle: "Medical knowledge that empowers.",
    educationDescription:
      "Explore educational topics that can help you understand neurological health and specialist assessment.",
    researchLink: "Explore research",
    educationCards: [
      {
        label: "BRAIN HEALTH",
        title: "Understanding neurological warning signs",
        description:
          "Why new or concerning neurological symptoms deserve careful medical assessment.",
      },
      {
        label: "SPINE HEALTH",
        title: "Understanding back and neck problems",
        description:
          "Learn about symptoms, clinical assessment, and when specialist advice may help.",
      },
      {
        label: "PATIENT EDUCATION",
        title: "Preparing for a specialist consultation",
        description:
          "Practical steps to help you prepare medical records and questions for your visit.",
      },
    ],
    educationalNote:
      "These are educational topics, not actual patient case records.",

    faqEyebrow: "HERE TO HELP",
    faqTitle: "Questions, answered.",
    faqDescription:
      "Useful information to help you prepare for your consultation.",
    faqContactTitle: "Need more information?",
    faqContactDescription:
      "Contact the clinic to confirm appointment arrangements and consultation requirements.",
    faqContactLink: "Contact the clinic",
    faqs: [
      {
        question: "How can I request an appointment?",
        answer:
          "Use the appointment button on this website or contact Rifah Medical Complex to confirm availability, consultation hours, and booking requirements.",
      },
      {
        question: "Where does Dr. Khalid Khan Zadran practice?",
        answer:
          "Dr. Khalid Khan Zadran is associated with Rifah Medical Complex in Kabul, Afghanistan. Contact the clinic to confirm current arrangements.",
      },
      {
        question: "What should I bring to my consultation?",
        answer:
          "Bring previous medical reports, relevant prescriptions, MRI or CT imaging results, and a list of current medications, if available.",
      },
      {
        question: "Can I request a second opinion?",
        answer:
          "Contact the clinic to ask whether a second-opinion consultation is available and which medical documents you should bring.",
      },
    ],

    patientEyebrow: "THE PATIENT EXPERIENCE",
    patientTitle: "Care begins with listening.",
    patientDescription:
      "Clear communication and thoughtful attention help patients understand their condition and the options available to them.",
    patientQuote:
      "Every consultation should create space for questions, clear explanations, and informed decisions.",
    patientRole: "Consultant Neurosurgeon",

    articleEyebrow: "MEDICAL KNOWLEDGE",
    articleTitle: "Read. Learn. Understand.",
    articleDescription:
      "Educational resources about brain health, spine care, and neurosurgical assessment.",
    articles: [
      {
        category: "BRAIN HEALTH",
        title: "A practical guide to understanding brain health",
        description:
          "Learn why neurological symptoms should be assessed carefully by a qualified professional.",
        read: "5 min read",
      },
      {
        category: "SPINE HEALTH",
        title: "When should you seek help for back or neck pain?",
        description:
          "Understand common symptoms and when specialist advice may be appropriate.",
        read: "4 min read",
      },
      {
        category: "NEUROSURGERY",
        title: "How specialist assessment guides treatment decisions",
        description:
          "Explore the role of medical history, diagnostic investigations, and clinical assessment.",
        read: "6 min read",
      },
    ],
    readMore: "Read more",
    healthEducation: "Health education",
  },

  fa: {
    aboutEyebrow: "آشنایی با متخصص",
    aboutTitle: "تعهد به مراقبت بهتر از سلامت مغز و اعصاب.",
    aboutDescription:
      "داکتر خالد خان زدران، متخصص جراحی مغز و اعصاب در کابل افغانستان است که در زمینه بیماری‌های مغز و ستون فقرات فعالیت می‌کند.",
    aboutDescription2:
      "مسیر مسلکی او بازتاب‌دهنده تعهد به آموزش تخصصی، ارزیابی بالینی، تحقیقات طبی و توسعه خدمات جراحی مغز و اعصاب در افغانستان است.",
    qualification: "تخصص مسلکی",
    qualificationValue: "فلوشیپ جراحی مغز و اعصاب",
    location: "محل فعالیت",
    locationValue: "کابل، افغانستان",
    exploreProfile: "مشاهده پروفایل",
    contactClinic: "تماس با کلینیک",

    whyEyebrow: "ویژگی‌های مسلکی",
    whyTitle: "مراقبت تخصصی با رویکرد سنجیده.",
    whyDescription:
      "تخصص مسلکی و ارتباط روشن، بخش‌های مهم مراقبت آگاهانه طبی هستند.",
    benefits: [
      {
        title: "آموزش تخصصی",
        text: "آموزش مسلکی در جراحی مغز و اعصاب و تجربه بالینی.",
      },
      {
        title: "توجه به بیمار",
        text: "ارزیابی فردی و ارتباط روشن با بیمار.",
      },
      {
        title: "تحقیق و آموزش",
        text: "علاقه‌مندی به تحقیقات عصبی و آموزش طبی.",
      },
      {
        title: "فعالیت در کابل",
        text: "دسترسی به مشوره تخصصی در افغانستان.",
      },
    ],

    specialtyEyebrow: "تخصص‌های بالینی",
    specialtyTitle: "حوزه‌های تخصصی فعالیت.",
    specialtyDescription:
      "با حوزه‌های مرتبط با سلامت مغز، ستون فقرات و سیستم عصبی آشنا شوید.",
    allSpecialties: "مشاهده تخصص‌ها",
    learnMore: "مطالعه بیشتر",
    specialties: [
      {
        title: "جراحی مغز",
        subtitle: "مراقبت از مغز و سیستم عصبی",
        description:
          "ارزیابی بالینی و برنامه‌ریزی درمان جراحی برای برخی بیماری‌های مغز.",
      },
      {
        title: "جراحی ستون فقرات",
        subtitle: "مراقبت از ستون فقرات و اعصاب",
        description:
          "ارزیابی مشکلات ستون فقرات، فشار بر اعصاب و گزینه‌های مناسب درمان.",
      },
      {
        title: "آسیب‌های عصبی",
        subtitle: "آسیب‌های مغز و ستون فقرات",
        description:
          "ارزیابی و برنامه‌ریزی درمان برای آسیب‌های مغز و ستون فقرات.",
      },
    ],

    serviceEyebrow: "چگونه کمک می‌کنیم",
    serviceTitle: "مراقبت متناسب با نیازهای شما.",
    serviceDescription:
      "وضعیت صحی خود را بهتر بشناسید، گزینه‌های درمانی را بررسی کنید و با آگاهی گام بعدی را بردارید.",
    requestAppointment: "درخواست نوبت",
    servicesLink: "مشاهده خدمات",
    services: [
      {
        title: "بیماری‌های مغز",
        description:
          "ارزیابی علایم عصبی و بیماری‌های مرتبط با مغز.",
      },
      {
        title: "ارزیابی ستون فقرات",
        description:
          "بررسی درد ستون فقرات، فشار بر اعصاب و مشکلات مرتبط.",
      },
      {
        title: "مشوره تخصصی",
        description:
          "ارزیابی مسلکی و بررسی مراحل بعدی مراقبت.",
      },
      {
        title: "تحقیق و آموزش",
        description:
          "فعالیت در زمینه تحقیقات عصبی و آموزش طبی.",
      },
    ],

    visitEyebrow: "مراجعه شما",
    visitTitle: "برای مشوره خود آماده شوید.",
    visitDescription:
      "پیش از تماس با کلینیک، از موارد مورد نیاز برای مراجعه آگاه شوید.",
    consultationTypes: [
      {
        title: "مشوره نخست",
        description:
          "بررسی علایم، سابقه صحی و مراحل احتمالی بعدی.",
        points: [
          "سابقه صحی",
          "ارزیابی ابتدایی",
          "پیشنهادهای مراقبتی",
        ],
      },
      {
        title: "مراجعه پیگیری",
        description:
          "بررسی نتایج قبلی، معاینات و روند پیشرفت درمان.",
        points: [
          "بررسی اسناد طبی",
          "بحث درباره پیشرفت",
          "برنامه پیگیری",
        ],
      },
      {
        title: "نظر تخصصی دوم",
        description:
          "بررسی تشخیص موجود و گزینه‌های احتمالی درمان.",
        points: [
          "بررسی اسناد موجود",
          "بحث بالینی",
          "پاسخ به پرسش‌ها",
        ],
      },
    ],
    askAvailability: "پرسش درباره نوبت",
    feeNote:
      "هزینه مشوره، زمان مراجعه و شرایط نوبت‌گیری را مستقیماً از کلینیک تأیید نمایید.",

    contactEyebrow: "با ما در تماس شوید",
    contactTitle: "برای مراجعه خود هماهنگ شوید.",
    contactDescription:
      "مشخصات خود را وارد کنید تا درخواست مراجعه از طریق واتساپ آماده شود.",
    contactOverlayTitle: "سلامت شما شایسته توجه دقیق است.",
    contactOverlayDescription:
      "برای تأیید زمان مشوره و معلومات مورد نیاز، با کلینیک تماس بگیرید.",
    fullName: "نام مکمل",
    phoneNumber: "شماره تماس",
    consultationType: "نوع مشوره",
    additionalInfo: "معلومات اضافی",
    namePlaceholder: "نام مکمل خود را وارد کنید",
    phonePlaceholder: "+93 ...",
    messagePlaceholder: "کلینیک چگونه می‌تواند کمک کند؟",
    optionBrain: "مشوره مغز یا ستون فقرات",
    optionFollowup: "مشوره پیگیری",
    optionSecond: "نظر تخصصی دوم",
    optionGeneral: "پرسش عمومی درباره نوبت",
    sendWhatsApp: "ادامه از طریق واتساپ",
    privacyNote:
      "واتساپ با پیام آماده باز می‌شود. این کار نوبت را تأیید نمی‌کند. از وارد کردن معلومات حساس طبی خودداری کنید.",

    educationEyebrow: "آگاهی و دانش",
    educationTitle: "دانش طبی برای آگاهی بیشتر.",
    educationDescription:
      "مطالب آموزشی درباره سلامت سیستم عصبی و ارزیابی تخصصی را مطالعه کنید.",
    researchLink: "مشاهده تحقیقات",
    educationCards: [
      {
        label: "سلامت مغز",
        title: "شناخت علایم هشداردهنده عصبی",
        description:
          "چرا علایم عصبی جدید یا نگران‌کننده به ارزیابی دقیق طبی نیاز دارند.",
      },
      {
        label: "سلامت ستون فقرات",
        title: "آشنایی با مشکلات کمر و گردن",
        description:
          "با علایم، ارزیابی بالینی و زمان مناسب برای مشوره تخصصی آشنا شوید.",
      },
      {
        label: "آگاهی بیمار",
        title: "آمادگی برای مشوره تخصصی",
        description:
          "چگونه اسناد طبی و پرسش‌های خود را برای مراجعه آماده سازید.",
      },
    ],
    educationalNote:
      "این مطالب موضوعات آموزشی هستند و سوابق واقعی بیماران نمی‌باشند.",

    faqEyebrow: "راهنمای شما",
    faqTitle: "پاسخ به پرسش‌های شما.",
    faqDescription:
      "معلومات مفید برای آمادگی پیش از مشوره تخصصی.",
    faqContactTitle: "به معلومات بیشتر نیاز دارید؟",
    faqContactDescription:
      "برای تأیید شرایط نوبت‌گیری و مشوره با کلینیک تماس بگیرید.",
    faqContactLink: "تماس با کلینیک",
    faqs: [
      {
        question: "چگونه می‌توانم نوبت بگیرم؟",
        answer:
          "از دکمه درخواست نوبت در این وب‌سایت استفاده کنید یا برای تأیید زمان و شرایط مراجعه با مجتمع طبی رفاه تماس بگیرید.",
      },
      {
        question: "داکتر خالد خان زدران در کجا فعالیت می‌کند؟",
        answer:
          "داکتر خالد خان زدران با مجتمع طبی رفاه در کابل افغانستان مرتبط است. برای تأیید شرایط فعلی مراجعه با کلینیک تماس بگیرید.",
      },
      {
        question: "برای مشوره چه اسنادی بیاورم؟",
        answer:
          "در صورت موجود بودن، گزارش‌های طبی قبلی، نسخه‌ها، تصاویر MRI یا CT و فهرست دواهای فعلی خود را همراه داشته باشید.",
      },
      {
        question: "آیا می‌توانم نظر تخصصی دوم بگیرم؟",
        answer:
          "با کلینیک تماس بگیرید تا درباره امکان دریافت نظر تخصصی دوم و اسناد مورد نیاز معلومات بگیرید.",
      },
    ],

    patientEyebrow: "تجربه مراجعه",
    patientTitle: "مراقبت با شنیدن آغاز می‌شود.",
    patientDescription:
      "ارتباط روشن و توجه سنجیده به بیماران کمک می‌کند تا وضعیت صحی و گزینه‌های موجود را بهتر درک کنند.",
    patientQuote:
      "هر مشوره باید فرصتی برای پرسش، توضیح روشن و تصمیم‌گیری آگاهانه فراهم سازد.",
    patientRole: "متخصص جراحی مغز و اعصاب",

    articleEyebrow: "دانش طبی",
    articleTitle: "بخوانید، بیاموزید، آگاه شوید.",
    articleDescription:
      "مطالب آموزشی درباره سلامت مغز، مراقبت ستون فقرات و ارزیابی جراحی اعصاب.",
    articles: [
      {
        category: "سلامت مغز",
        title: "راهنمای عملی برای شناخت سلامت مغز",
        description:
          "بیاموزید چرا علایم عصبی باید توسط متخصص واجد شرایط بررسی شوند.",
        read: "۵ دقیقه مطالعه",
      },
      {
        category: "سلامت ستون فقرات",
        title: "چه زمانی برای درد کمر یا گردن کمک بگیریم؟",
        description:
          "با علایم رایج و زمان مناسب برای دریافت مشوره تخصصی آشنا شوید.",
        read: "۴ دقیقه مطالعه",
      },
      {
        category: "جراحی اعصاب",
        title: "نقش ارزیابی تخصصی در تصمیم‌گیری درمانی",
        description:
          "با نقش سابقه صحی، معاینات تشخیصی و ارزیابی بالینی آشنا شوید.",
        read: "۶ دقیقه مطالعه",
      },
    ],
    readMore: "مطالعه بیشتر",
    healthEducation: "آموزش صحی",
  },

  ps: {
    aboutEyebrow: "له متخصص سره اشنا شئ",
    aboutTitle: "د دماغ او عصبي روغتیا غوره پاملرنې ته ژمنتیا.",
    aboutDescription:
      "ډاکټر خالد خان ځدراڼ په کابل، افغانستان کې د دماغ او ملا تیر د ناروغیو په برخه کې مشاور عصبي جراح دی.",
    aboutDescription2:
      "د هغه مسلکي سفر د تخصصي زده کړو، کلینیکي ارزونې، طبي څېړنو او په افغانستان کې د عصبي جراحۍ د خدمتونو د پراختیا ژمنتیا څرګندوي.",
    qualification: "مسلکي وړتیا",
    qualificationValue: "د عصبي جراحۍ FCPS",
    location: "د فعالیت ځای",
    locationValue: "کابل، افغانستان",
    exploreProfile: "بشپړ پروفایل وګورئ",
    contactClinic: "له کلینیک سره اړیکه",

    whyEyebrow: "زموږ ځانګړتیا",
    whyTitle: "تخصصي پاملرنه او سنجول شوی چلند.",
    whyDescription:
      "مسلکي تجربه او روښانه اړیکه د باخبره طبي پاملرنې مهمې برخې دي.",
    benefits: [
      {
        title: "تخصصي زده کړې",
        text: "د عصبي جراحۍ مسلکي زده کړې او کلینیکي تجربه.",
      },
      {
        title: "د ناروغ پاملرنه",
        text: "انفرادي ارزونه او روښانه اړیکه.",
      },
      {
        title: "څېړنه او زده کړه",
        text: "د عصبي څېړنو او طبي زده کړو سره لېوالتیا.",
      },
      {
        title: "په کابل کې پاملرنه",
        text: "په افغانستان کې تخصصي مشورې ته لاسرسی.",
      },
    ],

    specialtyEyebrow: "کلینیکي تخصص",
    specialtyTitle: "د تخصص مهمې برخې.",
    specialtyDescription:
      "د دماغ، ملا تیر او عصبي روغتیا اړوند برخو په اړه معلومات ترلاسه کړئ.",
    allSpecialties: "ټول تخصصونه وګورئ",
    learnMore: "نور معلومات",
    specialties: [
      {
        title: "د دماغ جراحي",
        subtitle: "د دماغ او عصبي سیستم پاملرنه",
        description:
          "د دماغ د ځینو ناروغیو کلینیکي ارزونه او د جراحي درملنې پلان جوړول.",
      },
      {
        title: "د ملا تیر جراحي",
        subtitle: "د ملا تیر او اعصابو پاملرنه",
        description:
          "د ملا تیر د ناروغیو، پر اعصابو فشار او د درملنې د مناسبو لارو ارزونه.",
      },
      {
        title: "عصبي ټپونه",
        subtitle: "د دماغ او ملا تیر ټپونه",
        description:
          "د دماغ او ملا تیر د ټپونو ارزونه او د درملنې پلان جوړول.",
      },
    ],

    serviceEyebrow: "موږ څنګه مرسته کولی شو",
    serviceTitle: "ستاسو د اړتیاوو مطابق پاملرنه.",
    serviceDescription:
      "خپل روغتیايي حالت وپېژنئ، د درملنې لارې وڅېړئ او په معلوماتو ولاړ راتلونکی ګام واخلئ.",
    requestAppointment: "د لیدنې غوښتنه",
    servicesLink: "ټول خدمتونه",
    services: [
      {
        title: "د دماغ ناروغۍ",
        description:
          "د عصبي نښو او د دماغ د ناروغیو کلینیکي ارزونه.",
      },
      {
        title: "د ملا تیر ارزونه",
        description:
          "د ملا تیر درد، پر اعصابو فشار او اړوندو ستونزو ارزونه.",
      },
      {
        title: "تخصصي مشوره",
        description:
          "مسلکي ارزونه او د راتلونکو ګامونو په اړه خبرې.",
      },
      {
        title: "څېړنه او زده کړه",
        description:
          "د عصبي څېړنو او طبي زده کړو په برخه کې فعالیت.",
      },
    ],

    visitEyebrow: "ستاسو لیدنه",
    visitTitle: "د خپلې مشورې لپاره چمتو شئ.",
    visitDescription:
      "له کلینیک سره تر اړیکې مخکې د اړینو معلوماتو په اړه پوه شئ.",
    consultationTypes: [
      {
        title: "لومړنۍ مشوره",
        description:
          "د نښو، روغتیايي تاریخچې او راتلونکو احتمالي ګامونو په اړه خبرې.",
        points: [
          "روغتیايي تاریخچه",
          "لومړنۍ ارزونه",
          "د پاملرنې سپارښتنې",
        ],
      },
      {
        title: "تعقیبي لیدنه",
        description:
          "د پخوانیو پایلو، معایناتو او درملنې د پرمختګ ارزونه.",
        points: [
          "د طبي اسنادو کتنه",
          "د پرمختګ ارزونه",
          "د تعقیب پلان",
        ],
      },
      {
        title: "دویم تخصصي نظر",
        description:
          "د موجود تشخیص او د درملنې د احتمالي لارو په اړه خبرې.",
        points: [
          "د اسنادو کتنه",
          "کلینیکي بحث",
          "پوښتنو ته ځوابونه",
        ],
      },
    ],
    askAvailability: "د وخت په اړه پوښتنه",
    feeNote:
      "د مشورې لګښت، وخت او د نوبت شرایط له کلینیک سره مستقیم تایید کړئ.",

    contactEyebrow: "اړیکه ونیسئ",
    contactTitle: "د خپلې لیدنې لپاره همغږي وکړئ.",
    contactDescription:
      "خپل معلومات ولیکئ څو د واټساپ له لارې د لیدنې غوښتنه چمتو شي.",
    contactOverlayTitle: "ستاسو روغتیا پاملرنې ته اړتیا لري.",
    contactOverlayDescription:
      "د مشورې د وخت او اړینو معلوماتو د تایید لپاره له کلینیک سره اړیکه ونیسئ.",
    fullName: "بشپړ نوم",
    phoneNumber: "د اړیکې شمېره",
    consultationType: "د مشورې ډول",
    additionalInfo: "اضافي معلومات",
    namePlaceholder: "خپل بشپړ نوم ولیکئ",
    phonePlaceholder: "+93 ...",
    messagePlaceholder: "کلینیک څنګه مرسته کولی شي؟",
    optionBrain: "د دماغ یا ملا تیر مشوره",
    optionFollowup: "تعقیبي مشوره",
    optionSecond: "دویم تخصصي نظر",
    optionGeneral: "د نوبت عمومي پوښتنه",
    sendWhatsApp: "د واټساپ له لارې دوام",
    privacyNote:
      "واټساپ به له چمتو شوي پیغام سره پرانیستل شي. دا د نوبت تایید نه دی. حساس طبي معلومات مه شریکوئ.",

    educationEyebrow: "پوهه او پوهاوی",
    educationTitle: "د لا پوهاوي لپاره طبي معلومات.",
    educationDescription:
      "د عصبي روغتیا او تخصصي ارزونې په اړه ښوونیز مطالب ولولئ.",
    researchLink: "څېړنې وګورئ",
    educationCards: [
      {
        label: "د دماغ روغتیا",
        title: "د عصبي خطرناکو نښو پېژندنه",
        description:
          "ولې نوې یا د اندېښنې وړ عصبي نښې دقیقې طبي ارزونې ته اړتیا لري.",
      },
      {
        label: "د ملا تیر روغتیا",
        title: "د ملا او غاړې د ستونزو پېژندنه",
        description:
          "د نښو، کلینیکي ارزونې او تخصصي مشورې د اړتیا په اړه معلومات.",
      },
      {
        label: "د ناروغ پوهاوی",
        title: "تخصصي مشورې ته چمتووالی",
        description:
          "د خپلې لیدنې لپاره د طبي اسنادو او پوښتنو د چمتو کولو لارې.",
      },
    ],
    educationalNote:
      "دا ښوونیز موضوعات دي، نه د حقیقي ناروغانو دوسیې.",

    faqEyebrow: "ستاسو لارښود",
    faqTitle: "ستاسو پوښتنو ته ځوابونه.",
    faqDescription:
      "د تخصصي مشورې لپاره ګټور معلومات.",
    faqContactTitle: "نورو معلوماتو ته اړتیا لرئ؟",
    faqContactDescription:
      "د نوبت او مشورې د شرایطو د تایید لپاره له کلینیک سره اړیکه ونیسئ.",
    faqContactLink: "له کلینیک سره اړیکه",
    faqs: [
      {
        question: "څنګه د لیدنې نوبت واخلم؟",
        answer:
          "په وېب‌پاڼه کې د نوبت غوښتنې تڼۍ وکاروئ یا د کابل له رفاه طبي کمپلکس سره اړیکه ونیسئ څو د وخت او نوبت شرایط تایید کړئ.",
      },
      {
        question: "ډاکټر خالد خان ځدراڼ چېرته فعالیت کوي؟",
        answer:
          "ډاکټر خالد خان ځدراڼ په کابل، افغانستان کې له رفاه طبي کمپلکس سره تړاو لري. د اوسنیو شرایطو د تایید لپاره له کلینیک سره اړیکه ونیسئ.",
      },
      {
        question: "مشورې ته کوم اسناد راوړم؟",
        answer:
          "که موجود وي، پخواني طبي راپورونه، نسخې، د MRI یا CT انځورونه او د اوسنیو درملو لېست له ځان سره راوړئ.",
      },
      {
        question: "ایا دویم تخصصي نظر غوښتلی شم؟",
        answer:
          "له کلینیک سره اړیکه ونیسئ څو د دویم تخصصي نظر د امکان او اړینو طبي اسنادو په اړه معلومات ترلاسه کړئ.",
      },
    ],

    patientEyebrow: "د ناروغ تجربه",
    patientTitle: "پاملرنه له اورېدو پیلېږي.",
    patientDescription:
      "روښانه اړیکه او پاملرنه له ناروغانو سره مرسته کوي چې خپل حالت او شته لارې په ښه ډول درک کړي.",
    patientQuote:
      "هره مشوره باید د پوښتنو، روښانه توضیحاتو او باخبره پرېکړو لپاره فرصت برابر کړي.",
    patientRole: "د عصبي جراحۍ متخصص",

    articleEyebrow: "طبي پوهه",
    articleTitle: "ولولئ، زده کړئ، پوه شئ.",
    articleDescription:
      "د دماغ روغتیا، د ملا تیر پاملرنې او عصبي جراحۍ په اړه ښوونیز مطالب.",
    articles: [
      {
        category: "د دماغ روغتیا",
        title: "د دماغ روغتیا د پېژندلو عملي لارښود",
        description:
          "پوه شئ چې ولې عصبي نښې باید د مسلکي متخصص له خوا وارزول شي.",
        read: "۵ دقیقې لوستل",
      },
      {
        category: "د ملا تیر روغتیا",
        title: "د ملا یا غاړې درد لپاره کله مرسته وغواړو؟",
        description:
          "د عامو نښو او تخصصي مشورې د اړتیا په اړه معلومات ترلاسه کړئ.",
        read: "۴ دقیقې لوستل",
      },
      {
        category: "عصبي جراحي",
        title: "د درملنې په پرېکړو کې د تخصصي ارزونې رول",
        description:
          "د روغتیايي تاریخچې، تشخیصي معایناتو او کلینیکي ارزونې رول وپېژنئ.",
        read: "۶ دقیقې لوستل",
      },
    ],
    readMore: "نور ولولئ",
    healthEducation: "روغتیايي زده کړه",
  },
};

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function useHomeLanguage() {
  const { i18n } = useTranslation();

  const rawLanguage = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).toLowerCase();

  const language = rawLanguage.startsWith("fa")
    ? "fa"
    : rawLanguage.startsWith("ps")
      ? "ps"
      : "en";

  const isRTL = language === "fa" || language === "ps";

  return {
    language,
    isRTL,
    t: translations[language],
  };
}

function Section({ id, children, className = "" }) {
  const { isRTL } = useHomeLanguage();

  return (
    <section
      id={id}
      dir={isRTL ? "rtl" : "ltr"}
      className={`relative scroll-mt-24 overflow-hidden py-14 sm:py-[76px] lg:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
        {children}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  centered = false,
}) {
  return (
    <motion.div
      variants={reveal}
      className={`mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 ${
        centered
          ? "items-center text-center"
          : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={`max-w-[660px] ${centered ? "mx-auto" : ""}`}>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4E5EF] bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#087F86] shadow-sm sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#087F86]" />
          {eyebrow}
        </span>

        <h2 className="max-w-[620px] text-[clamp(1.85rem,4vw,3.1rem)] font-bold leading-[1.13] tracking-[-0.045em] text-[#102B43]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 max-w-[540px] text-[14px] leading-[1.9] text-[#526D86] sm:text-[15px]">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 sm:pb-1">{action}</div>
      )}
    </motion.div>
  );
}

function PrimaryLink({ to = "/contact", children }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#087F86] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_22px_rgba(8,127,134,0.15)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#06676E] focus:outline-none focus:ring-4 focus:ring-[#DDF1F3] sm:px-6 sm:text-[13px]"
    >
      {children}
      <ArrowRight
        size={16}
        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

function SecondaryLink({ to = "/about", children }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-[#D4E5EF] bg-white px-5 py-3 text-[12px] font-bold text-[#102B43] transition duration-300 hover:border-[#087F86] hover:text-[#087F86] sm:px-6 sm:text-[13px]"
    >
      {children}
      <ArrowUpRight
        size={16}
        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function IconBox({ icon: Icon, size = 48 }) {
  return (
    <span
      style={{ width: size, height: size }}
      className="inline-flex shrink-0 items-center justify-center rounded-[17px] bg-[#DDF1F3] text-[#087F86]"
    >
      <Icon size={21} strokeWidth={1.7} />
    </span>
  );
}

function MedicalImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = images.doctor;
      }}
      className={className}
    />
  );
}

/* =========================================================
   01 — ABOUT THE DOCTOR
========================================================= */

export function AboutPreview() {
  const { t } = useHomeLanguage();

  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-[76px]">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[30px] border-l-2 border-t-2 border-[#087F86]/30 sm:-left-5 sm:-top-5" />

          <div className="relative rounded-[25px] border border-[#D4E5EF] bg-white p-2 shadow-[0_24px_70px_rgba(16,43,67,0.09)]">
            <MedicalImage
              src={images.about}
              alt="Dr. Khalid Khan Zadran"
              className="h-[280px] w-full rounded-[19px] object-cover object-top sm:h-[390px] lg:h-[440px]"
            />

            <div className="absolute inset-x-4 bottom-5 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-7 sm:p-5">
              <IconBox icon={Award} size={50} />

              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold leading-5 text-[#102B43] sm:text-[15px]">
                  {t.qualificationValue}
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#526D86] sm:text-xs">
                  {t.qualification}
                </p>
              </div>

              <ShieldCheck size={23} className="shrink-0 text-[#087F86]" />
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-br-[30px] border-b-2 border-r-2 border-[#087F86]/30 sm:-bottom-5 sm:-right-5" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={reveal}>
            <SectionHeading
              eyebrow={t.aboutEyebrow}
              title={t.aboutTitle}
              description={t.aboutDescription}
            />
          </motion.div>

          <motion.p
            variants={reveal}
            className="max-w-[600px] text-[14px] leading-[2] text-[#526D86] sm:text-[15px]"
          >
            {t.aboutDescription2}
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            {[
              {
                label: t.qualification,
                value: t.qualificationValue,
                icon: GraduationCap,
              },
              {
                label: t.location,
                value: t.locationValue,
                icon: MapPin,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-[#D4E5EF] bg-white p-4 sm:p-5"
              >
                <IconBox icon={item.icon} size={44} />
                <div className="min-w-0">
                  <p className="text-[10px] leading-5 text-[#758BA2] sm:text-[11px]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[12px] font-bold leading-5 text-[#102B43] sm:text-[13px]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={reveal} className="mt-7 flex flex-wrap gap-3">
            <PrimaryLink to="/about">{t.exploreProfile}</PrimaryLink>
            <SecondaryLink to="/contact">{t.contactClinic}</SecondaryLink>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

/* =========================================================
   02 — WHY CHOOSE THE SPECIALIST
========================================================= */

export function WhyChooseMe() {
  const { t } = useHomeLanguage();

  const icons = [GraduationCap, HeartPulse, Microscope, Hospital];

  return (
    <Section className="border-y border-[#D4E5EF]/80 bg-white/65">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionHeading
          eyebrow={t.whyEyebrow}
          title={t.whyTitle}
          description={t.whyDescription}
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                variants={reveal}
                key={item.title}
                className="group rounded-[21px] border border-[#D4E5EF] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#9BCFD3] hover:shadow-[0_16px_35px_rgba(16,43,67,0.06)] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <IconBox icon={Icon} />
                  <span className="text-[11px] font-bold tracking-[0.15em] text-[#A3B6C6]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-[15px] font-bold leading-snug tracking-[-0.02em] text-[#102B43] sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#526D86]">
                  {item.text}
                </p>

                <div className="mt-5 h-[2px] w-9 rounded-full bg-[#DDF1F3] transition-all duration-300 group-hover:w-16 group-hover:bg-[#087F86]" />
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   03 — AREAS OF EXPERTISE
========================================================= */

export function AreasOfExpertise() {
  const { t } = useHomeLanguage();

  const icons = [Brain, Activity, HeartPulse];
  const imgs = [images.brain, images.spine, images.consultation];

  return (
    <Section id="specialties">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeading
          eyebrow={t.specialtyEyebrow}
          title={t.specialtyTitle}
          description={t.specialtyDescription}
          action={
            <SecondaryLink to="/services">
              {t.allSpecialties}
            </SecondaryLink>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          {t.specialties.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                variants={reveal}
                key={item.title}
                className="group overflow-hidden rounded-[23px] border border-[#D4E5EF] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,43,67,0.09)]"
              >
                <div className="relative overflow-hidden bg-[#DDF1F3]">
                  <MedicalImage
                    src={imgs[index]}
                    alt={item.title}
                    className="h-[205px] w-full object-cover transition duration-700 group-hover:scale-[1.045] sm:h-[235px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B43]/70 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/95 px-3 py-2 text-[10px] font-bold text-[#102B43]">
                    0{index + 1} / 03
                  </span>

                  <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#087F86] shadow-lg">
                    <Icon size={21} />
                  </span>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] leading-relaxed text-[#087F86]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-[19px] font-bold leading-tight tracking-[-0.035em] text-[#102B43] sm:text-[21px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.9] text-[#526D86]">
                    {item.description}
                  </p>

                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#087F86] hover:text-[#06676E]"
                  >
                    {t.learnMore}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   04 — SERVICES
========================================================= */

export function ServicesShowcase() {
  const { t } = useHomeLanguage();

  const icons = [Brain, Activity, Stethoscope, Microscope];

  return (
    <Section id="services" className="bg-white/65">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-[#D4E5EF] bg-[#F3FAFC] p-5 sm:p-8 lg:p-11">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[36px] border-[#DDF1F3]/70" />

          <div className="relative grid items-center gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4E5EF] bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#087F86]">
                <Sparkles size={14} />
                {t.serviceEyebrow}
              </span>

              <h2 className="mt-6 max-w-[440px] text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.05em] text-[#102B43]">
                {t.serviceTitle}
              </h2>

              <p className="mt-5 max-w-[430px] text-[14px] leading-[2] text-[#526D86] sm:text-[15px]">
                {t.serviceDescription}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryLink to="/contact">
                  {t.requestAppointment}
                </PrimaryLink>
                <SecondaryLink to="/services">
                  {t.servicesLink}
                </SecondaryLink>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-[#D4E5EF] pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDF1F3] text-[#087F86]">
                  <ShieldCheck size={21} />
                </span>

                <p className="max-w-[280px] text-[12px] leading-[1.8] text-[#526D86]">
                  {t.whyDescription}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid gap-3 sm:grid-cols-2"
            >
              {t.services.map((item, index) => {
                const Icon = icons[index];

                return (
                  <motion.article
                    variants={reveal}
                    key={item.title}
                    className={`group rounded-[20px] border border-[#D4E5EF] bg-white p-5 transition duration-300 hover:border-[#9BCFD3] hover:shadow-[0_14px_30px_rgba(16,43,67,0.06)] sm:p-6 ${
                      index === 1 || index === 2 ? "sm:translate-y-3" : ""
                    }`}
                  >
                    <IconBox icon={Icon} size={46} />

                    <h3 className="mt-5 text-[14px] font-bold leading-snug text-[#102B43] sm:text-[15px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[12px] leading-[1.9] text-[#526D86] sm:text-[13px]">
                      {item.description}
                    </p>

                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold text-[#087F86]"
                    >
                      {t.learnMore}
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   05 — CONSULTATION INFORMATION
========================================================= */

export function ConsultationFees() {
  const { t } = useHomeLanguage();

  const icons = [Stethoscope, CalendarDays, MessageCircle];

  return (
    <Section id="consultation">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeading
          eyebrow={t.visitEyebrow}
          title={t.visitTitle}
          description={t.visitDescription}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {t.consultationTypes.map((item, index) => {
            const featured = index === 1;
            const Icon = icons[index];

            return (
              <motion.article
                variants={reveal}
                key={item.title}
                className={`relative flex flex-col rounded-[22px] border p-5 transition duration-300 sm:p-6 ${
                  featured
                    ? "border-[#087F86] bg-[#087F86] text-white shadow-[0_18px_40px_rgba(8,127,134,0.15)]"
                    : "border-[#D4E5EF] bg-white text-[#102B43] hover:border-[#9BCFD3]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-[17px] ${
                      featured
                        ? "bg-white/15 text-white"
                        : "bg-[#DDF1F3] text-[#087F86]"
                    }`}
                  >
                    <Icon size={21} />
                  </span>

                  <span
                    className={`text-[11px] font-bold tracking-[0.15em] ${
                      featured ? "text-white/65" : "text-[#A3B6C6]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-[19px] font-bold leading-tight tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p
                  className={`mt-3 text-[13px] leading-[1.9] ${
                    featured ? "text-white/80" : "text-[#526D86]"
                  }`}
                >
                  {item.description}
                </p>

                <div
                  className={`my-5 h-px ${
                    featured ? "bg-white/20" : "bg-[#D4E5EF]"
                  }`}
                />

                <ul className="flex-1 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-2.5 text-[12px] leading-relaxed ${
                        featured ? "text-white/90" : "text-[#526D86]"
                      }`}
                    >
                      <CheckCircle2
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          featured ? "text-white" : "text-[#087F86]"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[12px] font-bold transition ${
                    featured
                      ? "bg-white text-[#087F86] hover:bg-[#DDF1F3]"
                      : "border border-[#D4E5EF] bg-[#F3FAFC] text-[#102B43] hover:border-[#087F86]"
                  }`}
                >
                  {t.askAvailability}
                  <ArrowRight size={15} />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-5 text-[11px] leading-[1.8] text-[#758BA2]">
          {t.feeNote}
        </p>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   06 — APPOINTMENT / CONTACT
========================================================= */

export function ContactSection() {
  const { t, language, isRTL } = useHomeLanguage();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    reason: "brain",
    message: "",
  });

  const phoneNumber = "93787654751";

  const reasonLabels = {
    brain: t.optionBrain,
    followup: t.optionFollowup,
    second: t.optionSecond,
    general: t.optionGeneral,
  };

  function updateField(event) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Appointment Request",
      "",
      `${t.fullName}: ${form.name}`,
      `${t.phoneNumber}: ${form.phone}`,
      `${t.consultationType}: ${reasonLabels[form.reason]}`,
      `${t.additionalInfo}: ${form.message || "-"}`,
    ].join("\n");

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <Section id="contact" className="bg-white/65">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={reveal}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="grid overflow-hidden rounded-[26px] border border-[#D4E5EF] bg-white shadow-[0_20px_60px_rgba(16,43,67,0.06)] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative min-h-[320px] lg:min-h-full">
            <MedicalImage
              src={images.consultation}
              alt="Medical consultation"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102B43]/95 via-[#102B43]/40 to-[#102B43]/5" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2 text-[11px] font-semibold backdrop-blur-md">
                <MapPin size={14} />
                {t.locationValue}
              </span>

              <h3 className="mt-5 max-w-[380px] text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.17] tracking-[-0.04em]">
                {t.contactOverlayTitle}
              </h3>

              <p className="mt-4 max-w-[380px] text-[13px] leading-[1.9] text-white/80 sm:text-[14px]">
                {t.contactOverlayDescription}
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow={t.contactEyebrow}
              title={t.contactTitle}
              description={t.contactDescription}
            />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2.5 block text-[12px] font-bold text-[#102B43]">
                    {t.fullName} *
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={updateField}
                    required
                    autoComplete="name"
                    dir={isRTL ? "rtl" : "ltr"}
                    placeholder={t.namePlaceholder}
                    className="min-h-[50px] w-full rounded-xl border border-[#D4E5EF] bg-[#F8FBFD] px-4 text-[13px] text-[#102B43] outline-none transition placeholder:text-[#9AAEBE] focus:border-[#087F86] focus:ring-4 focus:ring-[#DDF1F3]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2.5 block text-[12px] font-bold text-[#102B43]">
                    {t.phoneNumber} *
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={updateField}
                    required
                    type="tel"
                    autoComplete="tel"
                    dir="ltr"
                    placeholder={t.phonePlaceholder}
                    className="min-h-[50px] w-full rounded-xl border border-[#D4E5EF] bg-[#F8FBFD] px-4 text-[13px] text-[#102B43] outline-none transition placeholder:text-[#9AAEBE] focus:border-[#087F86] focus:ring-4 focus:ring-[#DDF1F3]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2.5 block text-[12px] font-bold text-[#102B43]">
                  {t.consultationType} *
                </span>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={updateField}
                  dir={isRTL ? "rtl" : "ltr"}
                  className="min-h-[50px] w-full rounded-xl border border-[#D4E5EF] bg-[#F8FBFD] px-4 text-[13px] text-[#102B43] outline-none focus:border-[#087F86] focus:ring-4 focus:ring-[#DDF1F3]"
                >
                  <option value="brain">{t.optionBrain}</option>
                  <option value="followup">{t.optionFollowup}</option>
                  <option value="second">{t.optionSecond}</option>
                  <option value="general">{t.optionGeneral}</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2.5 block text-[12px] font-bold text-[#102B43]">
                  {t.additionalInfo}
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={3}
                  dir={isRTL ? "rtl" : "ltr"}
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-y rounded-xl border border-[#D4E5EF] bg-[#F8FBFD] px-4 py-3.5 text-[13px] leading-[1.9] text-[#102B43] outline-none transition placeholder:text-[#9AAEBE] focus:border-[#087F86] focus:ring-4 focus:ring-[#DDF1F3]"
                />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#087F86] px-5 py-3 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(8,127,134,0.14)] transition hover:bg-[#06676E] focus:outline-none focus:ring-4 focus:ring-[#DDF1F3] sm:w-auto sm:px-6 sm:text-[13px]"
              >
                <MessageCircle size={17} />
                {t.sendWhatsApp}
                <ArrowUpRight size={16} />
              </button>

              <p className="text-[11px] leading-[1.9] text-[#758BA2]">
                {t.privacyNote}
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   07 — EDUCATIONAL TOPICS
========================================================= */

export function CaseStudies() {
  const { t } = useHomeLanguage();

  const imgs = [images.brain, images.spine, images.consultation];

  return (
    <Section id="case-studies">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeading
          eyebrow={t.educationEyebrow}
          title={t.educationTitle}
          description={t.educationDescription}
          action={
            <SecondaryLink to="/research">
              {t.researchLink}
            </SecondaryLink>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {t.educationCards.map((item, index) => (
            <motion.article
              variants={reveal}
              key={item.title}
              className="group overflow-hidden rounded-[22px] border border-[#D4E5EF] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(16,43,67,0.07)]"
            >
              <div className="relative overflow-hidden">
                <MedicalImage
                  src={imgs[index]}
                  alt={item.title}
                  className="h-[185px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[205px]"
                />

                <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#087F86]">
                  {item.label}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <span className="text-[10px] font-semibold text-[#758BA2]">
                  0{index + 1} / {t.healthEducation}
                </span>

                <h3 className="mt-3 text-[16px] font-bold leading-[1.5] tracking-[-0.025em] text-[#102B43]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#526D86]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 text-[11px] leading-[1.9] text-[#758BA2]">
          {t.educationalNote}
        </p>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   08 — FAQ ACCORDION
========================================================= */

export function FAQSection() {
  const { t, isRTL } = useHomeLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="bg-white/65">
      <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading
            eyebrow={t.faqEyebrow}
            title={t.faqTitle}
            description={t.faqDescription}
          />

          <div className="rounded-[22px] border border-[#D4E5EF] bg-white p-5 sm:p-6">
            <IconBox icon={MessageCircle} size={50} />

            <h3 className="mt-5 text-[17px] font-bold tracking-[-0.02em] text-[#102B43]">
              {t.faqContactTitle}
            </h3>

            <p className="mt-3 text-[13px] leading-[1.9] text-[#526D86]">
              {t.faqContactDescription}
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#087F86] hover:text-[#06676E]"
            >
              {t.faqContactLink}
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {t.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                variants={reveal}
                key={faq.question}
                className={`overflow-hidden rounded-[18px] border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#9BCFD3] bg-white shadow-[0_8px_24px_rgba(16,43,67,0.045)]"
                    : "border-[#D4E5EF] bg-white"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-[70px] w-full items-center justify-between gap-4 px-4 py-4 text-start sm:px-5"
                >
                  <span className="flex items-start gap-3.5">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold ${
                        isOpen
                          ? "bg-[#087F86] text-white"
                          : "bg-[#DDF1F3] text-[#087F86]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-[13px] font-bold leading-[1.7] text-[#102B43] sm:text-[14px]">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#087F86] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p
                        dir={isRTL ? "rtl" : "ltr"}
                        className="px-5 pb-5 text-[13px] leading-[2] text-[#526D86] sm:px-6"
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

/* =========================================================
   09 — PATIENT EXPERIENCE
   Editorial feature, not a fabricated patient testimonial.
========================================================= */

export function PatientReviews() {
  const { t } = useHomeLanguage();

  return (
    <Section>
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative overflow-hidden rounded-[27px] bg-[#087F86] p-6 text-white sm:p-9 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[40px] border-white/[0.07]" />

          <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full border-[35px] border-white/[0.06]" />

          <div className="relative grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90">
                <HeartPulse size={15} />
                {t.patientEyebrow}
              </span>

              <h2 className="mt-6 max-w-[410px] text-[clamp(2rem,4vw,3.3rem)] font-bold leading-[1.13] tracking-[-0.045em]">
                {t.patientTitle}
              </h2>

              <p className="mt-5 max-w-[410px] text-[14px] leading-[2] text-white/80">
                {t.patientDescription}
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-5 py-3 text-[12px] font-bold text-[#087F86] transition hover:bg-[#DDF1F3]"
              >
                {t.contactClinic}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative rounded-[23px] border border-white/20 bg-white/[0.10] p-6 backdrop-blur-sm sm:p-9">
              <Quote
                size={35}
                className="mb-6 text-white/60"
                fill="currentColor"
              />

              <p className="text-[clamp(1.2rem,2.4vw,1.85rem)] font-semibold leading-[1.65] tracking-[-0.025em] text-white">
                {t.patientQuote}
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-white/20 pt-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <Stethoscope size={22} />
                </span>

                <div>
                  <p className="text-[13px] font-bold text-white">
                    Dr. Khalid Khan Zadran
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/70">
                    {t.patientRole}
                  </p>
                </div>

                <ShieldCheck
                  size={23}
                  className="ml-auto shrink-0 text-white/80"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* =========================================================
   10 — MEDICAL ARTICLES
========================================================= */

export function ArticlesSection() {
  const { t } = useHomeLanguage();

  const imgs = [images.article1, images.article2, images.article3];

  return (
    <Section id="articles" className="bg-white/65">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionHeading
          eyebrow={t.articleEyebrow}
          title={t.articleTitle}
          description={t.articleDescription}
          action={
            <SecondaryLink to="/research">
              {t.researchLink}
            </SecondaryLink>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {t.articles.map((article, index) => (
            <motion.article
              variants={reveal}
              key={article.title}
              className="group overflow-hidden rounded-[22px] border border-[#D4E5EF] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#9BCFD3] hover:shadow-[0_18px_38px_rgba(16,43,67,0.07)]"
            >
              <div className="relative overflow-hidden">
                <MedicalImage
                  src={imgs[index]}
                  alt={article.title}
                  className="h-[190px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[210px]"
                />

                <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/95 px-3 py-2 text-[9px] font-bold tracking-[0.08em] text-[#087F86]">
                  {article.category}
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-[11px] text-[#758BA2]">
                  <BookOpen size={14} className="shrink-0 text-[#087F86]" />
                  <span>{article.read}</span>
                  <span>·</span>
                  <span>{t.healthEducation}</span>
                </div>

                <h3 className="mt-4 text-[16px] font-bold leading-[1.55] tracking-[-0.025em] text-[#102B43] transition-colors group-hover:text-[#087F86] sm:text-[17px]">
                  {article.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-[#526D86]">
                  {article.description}
                </p>

                <Link
                  to="/research"
                  className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold text-[#087F86] hover:text-[#06676E]"
                >
                  {t.readMore}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
