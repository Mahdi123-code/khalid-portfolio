import { Link } from "react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const credentials = [
  { title: "FCPS", subtitle: "Neurosurgery" },
  { title: "Brain", subtitle: "Neurological care" },
  { title: "Spine", subtitle: "Surgical expertise" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#F3F7FA] text-[#142B45]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[480px] w-[480px] rounded-full bg-teal-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-3xl"
      />

      <div className="mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:min-h-[700px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-16 xl:gap-16">
        {/* LEFT: INTRODUCTION */}
        <div className="relative z-10 max-w-2xl">
          {/* Professional badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-teal-100 bg-white/80 px-4 py-2 shadow-sm shadow-slate-200/40">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <ShieldCheck size={16} />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#31566A] sm:text-xs">
              Consultant Neurosurgeon · Kabul, Afghanistan
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-2xl text-[40px] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#142B45] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]">
            Advancing{" "}
            <span className="relative inline-block text-teal-700">
              Brain
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[5px] w-[85%] rounded-full bg-teal-200"
              />
            </span>{" "}
            & Spine Care.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
           Dedicated to neurological health, modern neurosurgical practice,
            and compassionate patient care.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#appointment"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-teal-600 px-7 text-sm font-bold text-white shadow-lg shadow-teal-700/15 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-700/20"
            >
              <CalendarDays size={18} />

              Request an Appointment

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#about"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-7 text-sm font-bold text-[#142B45] transition-all duration-300 hover:border-teal-200 hover:bg-teal-50"
            >
              Explore Profile

              <MoveUpRight
                size={16}
                className="text-teal-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Credentials */}
          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-slate-200 pt-6">
            {credentials.map((item, index) => (
              <div
                key={item.title}
                className={`px-2 first:pl-0 sm:px-5 ${
                  index !== 0 ? "border-l border-slate-200" : ""
                }`}
              >
                <p className="text-xl font-extrabold tracking-tight text-[#142B45] sm:text-2xl">
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PORTRAIT */}
        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
          {/* Decorative frame */}
          <div
            aria-hidden="true"
            className="absolute -right-3 top-8 h-[75%] w-[75%] rounded-[36px] border border-teal-200/80 sm:-right-5 sm:top-10"
          />

          {/* Portrait container */}
          <div className="relative mx-auto aspect-[4/4.5] max-h-[570px] w-full overflow-hidden rounded-[28px] bg-[#DCE9ED] shadow-[0_25px_70px_rgba(20,43,69,0.13)] sm:rounded-[36px]">
            {/* Replace with the doctor's real portrait */}
            <img
              src="/images/images.jpg"
              alt="Dr. Khalid Khan Zadran, Consultant Neurosurgeon"
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />

            {/* Image gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#10263D]/65 via-transparent to-[#10263D]/5"
            />

            {/* Top label */}
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
              <Sparkles size={15} className="text-teal-700" />

              <span className="text-[10px] font-bold text-[#142B45] sm:text-xs">
                Professional Excellence
              </span>
            </div>

            {/* Portrait caption */}
            <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7">
              <div className="rounded-2xl border border-white/20 bg-[#10263D]/75 p-4 backdrop-blur-xl sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-400/15 text-teal-200">
                    <Brain size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-sm font-bold text-white sm:text-base">
                      Dr. Khalid Khan Zadran
                    </h2>

                    <p className="mt-1 text-xs text-slate-300">
                      Brain & Spine Surgery
                    </p>
                  </div>

                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-teal-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating clinic information */}
          <div className="absolute -left-2 top-[36%] hidden max-w-[190px] items-center gap-3 rounded-2xl border border-white bg-white p-3.5 shadow-xl shadow-slate-900/10 sm:flex lg:-left-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
              <ShieldCheck size={21} />
            </div>

            <div>
              <p className="text-xs font-extrabold text-[#142B45]">
                FCPS
              </p>

              <p className="mt-1 text-[10px] leading-4 text-slate-500">
                Neurosurgery qualification
              </p>
            </div>
          </div>

          {/* Clinic location badge */}
          <div className="absolute -bottom-5 right-3 flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl shadow-slate-900/10 sm:right-6">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500 ring-4 ring-teal-50" />

            <div>
              <p className="text-xs font-bold text-[#142B45]">
                Rifah Medical Complex
              </p>

              <p className="mt-0.5 text-[10px] text-slate-500">
                Kabul, Afghanistan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors hover:text-teal-700 lg:flex"
      >
        Discover More

        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
