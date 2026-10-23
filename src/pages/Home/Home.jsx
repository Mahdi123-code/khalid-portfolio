import Hero from './sections/Hero'
import {
  AboutPreview,
  WhyChooseMe,
  AreasOfExpertise,
  ServicesShowcase,
  ConsultationFees,
  ContactSection,
  CaseStudies,
  FAQSection,
  PatientReviews,
  ArticlesSection,
} from "./sections/HomeSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E4F2F0] font-sans">
      <Hero />

      <AboutPreview />

      <WhyChooseMe />

      <AreasOfExpertise />

      <ServicesShowcase />

      <ConsultationFees />

      <ContactSection />

      <CaseStudies />

      <FAQSection />

      <PatientReviews />

      <ArticlesSection />
    </main>
  );
}

