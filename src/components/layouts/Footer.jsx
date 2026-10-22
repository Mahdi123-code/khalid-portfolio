import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  Brain,
  MapPin,
  Phone,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  HeartPulse,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "About Dr. Khalid", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

const specialties = [
  "Brain & Neurological Disorders",
  "Brain Surgery",
  "Spine Conditions & Surgery",
  "Neurosurgical Research",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#10263D] text-white">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Appointment call to action */}
        <div className="relative -top-1 mb-12 pt-10 sm:mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#183C51] to-[#164D58] p-6 sm:p-9 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/[0.07]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-12 h-48 w-48 rounded-full border border-white/[0.07]"
            />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-200">
                  <HeartPulse size={14} />
                  Brain & Spine Care
                </span>

                <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Your neurological health
                  <br className="hidden sm:block" /> deserves expert attention.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                  Contact Dr. Khalid Khan Zadran to learn about consultations
                  and available neurosurgical care in Kabul.
                </p>
              </div>

              <a
                href="#appointment"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-teal-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
              >
                Request Appointment
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand and description */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Dr. Khalid Khan Zadran home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-400/10 text-teal-300 transition-colors duration-300 group-hover:bg-teal-400 group-hover:text-[#10263D]">
                <Brain size={27} strokeWidth={1.7} />
              </span>

              <span>
                <span className="block text-base font-bold tracking-tight text-white">
                  Dr. Khalid Khan Zadran
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                  Consultant Neurosurgeon
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Dedicated to brain and spine care, neurological research,
              and advancing neurosurgical practice in Afghanistan.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/DrKhalidkhanzadran/"
                target="_blank"
                rel="noreferrer"
                aria-label="Official Facebook page"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://af.linkedin.com/in/dr-khalid-khan-zadran-67597036"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <FaLinkedinIn size={17} />
              </a>

              <a
                href="https://www.facebook.com/DrKhalidkhanzadran/"
                target="_blank"
                rel="noreferrer"
                aria-label="Medical updates and professional videos"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <FaInstagram size={17} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-sm font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      to="/"
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-teal-300"
                    >
                      <ChevronRight
                        size={14}
                        className="text-teal-500 transition-transform group-hover:translate-x-1"
                      />
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-teal-300"
                    >
                      <ChevronRight
                        size={14}
                        className="text-teal-500 transition-transform group-hover:translate-x-1"
                      />
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Clinical expertise */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-bold text-white">
              Areas of Focus
            </h3>

            <ul className="space-y-4">
              {specialties.map((specialty) => (
                <li key={specialty} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-teal-400/10 text-teal-300">
                    <ShieldCheck size={13} />
                  </span>

                  <span className="text-sm leading-5 text-slate-400">
                    {specialty}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-bold text-white">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-teal-300">
                  <MapPin size={17} />
                </span>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Clinic Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Rifah Medical Complex
                    <br />
                    Kabul, Afghanistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-teal-300">
                  <Phone size={17} />
                </span>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Contact Number
                  </p>

                  <a
                    href="tel:+93787654751"
                    className="mt-1 inline-block text-sm text-slate-400 transition-colors hover:text-teal-300"
                  >
                    +93 78 765 4751
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-teal-300">
                  <Clock size={17} />
                </span>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Appointments
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Contact the clinic to confirm
                    <br />
                    available consultation times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="border-t border-white/10 py-5">
          <p className="max-w-5xl text-xs leading-6 text-slate-500">
            The information on this website is intended for general
            educational purposes and does not replace a professional medical
            consultation, diagnosis, or treatment. For urgent medical
            emergencies, seek immediate medical assistance.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {currentYear} Dr. Khalid Khan Zadran. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="#privacy"
              className="text-xs text-slate-500 transition-colors hover:text-teal-300"
            >
              Privacy Policy
            </a>

            <a
              href="#contact"
              className="text-xs text-slate-500 transition-colors hover:text-teal-300"
            >
              Contact
            </a>

            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-teal-300 transition-colors hover:text-teal-200"
            >
              Back to top
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
