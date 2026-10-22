
import {
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";

const qualifications = [
  {
    abbreviation: "MBBS",
    title: "Bachelor of Medicine",
    description:
      "Foundational medical education and clinical training.",
    icon: GraduationCap,
  },
  {
    abbreviation: "MD",
    title: "Doctor of Medicine",
    description:
      "An additional medical qualification in his professional background.",
    icon: BookOpen,
  },
  {
    abbreviation: "MCPS",
    title: "Membership Qualification",
    description:
      "Membership qualification of the College of Physicians and Surgeons.",
    icon: ShieldCheck,
  },
  {
    abbreviation: "FCPS",
    title: "Neurosurgery",
    description:
      "Fellowship qualification in neurosurgery from CPSP, Pakistan.",
    icon: Award,
  },
];

const memberships = [
  {
    abbreviation: "WFNS",
    name: "World Federation of Neurosurgical Societies",
  },
  {
    abbreviation: "AANS",
    name: "American Association of Neurological Surgeons",
  },
  {
    abbreviation: "PSNS",
    name: "Pakistan Society of Neurosurgeons",
  },
];

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-[#F7F9FB] py-20 text-[#142B45] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-teal-100 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-teal-700 sm:text-xs">
                Professional Credentials
              </span>
            </div>

            <h2 className="max-w-[680px] text-[38px] font-extrabold leading-[1.12] tracking-[-0.05em] sm:text-5xl lg:text-[58px]">
              A foundation of
              <span className="block text-teal-700">
                knowledge & expertise.
              </span>
            </h2>
          </div>

          <p className="max-w-[500px] text-[15px] leading-8 text-slate-600 sm:text-base lg:justify-self-end lg:pb-2">
            A professional background grounded in medical education,
            specialist neurosurgical training, and engagement with the
            evolving field of brain and spine care.
          </p>
        </div>

        {/* Qualification cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {qualifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.abbreviation}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(20,43,69,0.025)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-[0_20px_45px_rgba(20,43,69,0.08)] sm:rounded-[28px] sm:p-7"
              >
                {/* Subtle decorative glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-teal-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5F3] text-teal-700 transition-all duration-300 group-hover:rounded-[18px] group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#F3F6F8] px-2 text-[10px] font-bold tracking-wider text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-8">
                  <h3 className="text-[30px] font-extrabold leading-none tracking-[-0.045em] text-[#142B45] sm:text-[34px]">
                    {item.abbreviation}
                  </h3>

                  <p className="mt-3 text-sm font-bold leading-6 text-[#30465D]">
                    {item.title}
                  </p>

                  <p className="mt-3 text-[13px] leading-[1.9] text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="relative mt-auto flex items-center justify-between pt-6">
                  <span className="h-1 w-9 rounded-full bg-teal-600 transition-all duration-300 group-hover:w-14" />

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-700">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Professional affiliations */}
        <div
          id="affiliations"
          className="mt-20 grid gap-9 lg:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
        >
          {/* Left content card */}
          <div className="rounded-[28px] bg-[#142B45] p-7 text-white sm:p-9 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-300 ring-1 ring-white/10">
              <Users size={22} />
            </div>

            <p className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-300 sm:text-xs">
              Professional Affiliations
            </p>

            <h3 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.2] tracking-[-0.04em] sm:text-4xl">
              Connected to the wider
              <span className="text-teal-300"> neurosurgical community.</span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-8 text-slate-300">
              Professional organizations provide opportunities for scientific
              exchange, continuing education, and engagement with developments
              in neurological surgery.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/10 text-teal-300">
                <ShieldCheck size={19} />
              </span>

              <p className="text-xs font-medium leading-6 text-slate-300">
                Professional affiliations and memberships
              </p>
            </div>
          </div>

          {/* Right membership cards */}
          <div className="flex flex-col gap-4">
            {memberships.map((item, index) => (
              <article
                key={item.abbreviation}
                className="group flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-900/[0.02] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg hover:shadow-slate-900/[0.04] sm:gap-5 sm:rounded-[24px] sm:p-5"
              >
                <div className="flex h-[58px] w-[62px] shrink-0 items-center justify-center rounded-2xl bg-[#EAF5F3] text-xs font-extrabold tracking-tight text-teal-800 transition-colors duration-300 group-hover:bg-teal-700 group-hover:text-white sm:h-[66px] sm:w-[72px] sm:text-sm">
                  {item.abbreviation}
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-teal-700 sm:text-[10px]">
                    Organization 0{index + 1}
                  </span>

                  <h4 className="mt-1.5 text-sm font-extrabold leading-6 text-[#142B45] sm:text-base">
                    {item.name}
                  </h4>
                </div>

                <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F6F8] text-slate-400 transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal-700 sm:flex">
                  <ArrowUpRight size={17} />
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Verification note */}
        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-teal-100 bg-white px-5 py-4 sm:px-6">
          <ShieldCheck
            size={19}
            className="mt-0.5 shrink-0 text-teal-700"
          />

          <p className="text-xs leading-7 text-slate-500 sm:text-sm">
            All professional qualifications and memberships should be
            verified with the doctor before publication.
          </p>
        </div>
      </div>
    </section>
  );
}
