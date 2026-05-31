import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[750px] overflow-hidden">
      {/* Full Width Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="RUET Campus"
        fill
        priority
        className="object-cover"
      />

      {/* White Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/70 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto h-full max-w-7xl px-6">
        <div className="flex h-full items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              WELCOME TO MY PLATFORM
            </p>

            <h1 className="mb-6 text-6xl font-bold leading-tight text-[#081B4B]">
              Academic Resources,
              <br />
              Research & Career
              <br />
              Development
            </h1>

            <p className="mb-10 max-w-xl text-xl leading-relaxed text-slate-700">
              A comprehensive platform for students and professionals
              to access learning materials, research outputs and
              career preparation resources.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="rounded-xl bg-[#081B4B] px-8 py-4 font-medium text-white transition hover:bg-[#0b2a73]">
                Academics
              </button>

              <button className="rounded-xl bg-emerald-600 px-8 py-4 font-medium text-white transition hover:bg-emerald-700">
                Career
              </button>

              <button className="rounded-xl border border-slate-400 bg-white px-8 py-4 font-medium text-slate-800 transition hover:bg-slate-100">
                Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}