"use client";
import Image from "next/image";
import {
  FileText,
  Users,
  Briefcase,
  GraduationCap,
  FlaskConical,
  Mail,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Phone,
  MapPin,
  Recycle,
  Brain,
  Layers3,
  Activity,
  Leaf,
} from "lucide-react";
import { BsBank } from "react-icons/bs";

export default function HomePage() {
  const P1 = "#1E3A8A";
  const P3 = "#091f4e";

  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[650px] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="RUET Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-white/85 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-7xl font-bold leading-tight text-[#081B4B]">
              Faruque Abdullah
            </h1>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Assistant Professor
            </p>
            <h2 className="mb-3 text-3xl font-semibold text-slate-800">
              Department of Building Engineering <br /> &amp; Construction
              Management
            </h2>
            <p className="mb-8 text-lg text-slate-600">
              Rajshahi University of Engineering &amp; Technology (RUET)
            </p>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-slate-700">
              Research interests include Structural Engineering, Recycled
              Aggregate Concrete, Machine Learning Applications in Civil
              Engineering, FRP Strengthened Structures, Earthquake Engineering
              and Sustainable Construction Materials.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-xl bg-[#081B4B] px-8 py-4 text-xl font-bold text-white hover:bg-[#0b2a73]">
                <BookOpen size={20} />
                Publications
              </button>
              <button className="flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 font-medium text-white hover:bg-emerald-700">
                <FlaskConical size={20} />
                Research
              </button>
              <button className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium hover:bg-slate-50">
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 rounded-2xl border border-slate-200 bg-white md:grid-cols-4">
            <div className="border-r border-slate-200 py-8 text-center">
              <FileText size={48} className="mx-auto mb-5 text-emerald-600" />
              <h3 className="text-5xl font-bold text-[#081B4B]">25+</h3>
              <p className="mt-2 text-xl text-slate-700">Research Publications</p>
            </div>
            <div className="border-r border-slate-200 py-8 text-center">
              <Users size={48} className="mx-auto mb-5 text-emerald-600" />
              <h3 className="text-5xl font-bold text-[#081B4B]">12+</h3>
              <p className="mt-2 text-xl text-slate-700">Conference Papers</p>
            </div>
            <div className="border-r border-slate-200 py-8 text-center">
              <Briefcase size={48} className="mx-auto mb-5 text-emerald-600" />
              <h3 className="text-5xl font-bold text-[#081B4B]">8+</h3>
              <p className="mt-2 text-xl text-slate-700">Research Projects</p>
            </div>
            <div className="py-8 text-center">
              <GraduationCap size={48} className="mx-auto mb-5 text-emerald-600" />
              <h3 className="text-5xl font-bold text-[#081B4B]">50+</h3>
              <p className="mt-2 text-xl text-slate-700">Students Supervised</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* PHOTO */}
            <div className="lg:col-span-3">
              <Image
                src="/images/photo.jpg"
                alt="Faruque Abdullah"
                width={450}
                height={550}
                className="w-full rounded-3xl border border-slate-200 object-cover shadow-lg"
              />
            </div>

            {/* ABOUT CONTENT */}
            <div className="lg:col-span-5">
              <h2 className="mb-6 text-5xl font-bold text-blue-900">About Me</h2>
              <p className="mb-5 text-lg leading-8 text-slate-700">
                I am an Assistant Professor in the Department of Building
                Engineering &amp; Construction Management (BECM) at Rajshahi
                University of Engineering &amp; Technology (RUET).
              </p>
              <p className="mb-5 text-lg leading-8 text-slate-700">
                My research interests include Structural Engineering, Sustainable
                Construction Materials, Recycled Aggregate Concrete,
                FRP-Strengthened Structures, Earthquake Engineering, and Machine
                Learning Applications in Civil Engineering.
              </p>
              <p className="text-lg leading-8 text-slate-700">
                My work focuses on developing innovative and sustainable solutions
                for modern infrastructure through experimental research, numerical
                modeling, and data-driven approaches. I am also actively involved
                in teaching, supervising student research, and contributing to the
                advancement of engineering education and professional practice.
              </p>
              <button className="mt-8 flex items-center gap-3 rounded-xl bg-[#081B4B] px-8 py-4 font-semibold text-white transition hover:bg-[#0b2a73]">
                Read More About Me
                <ArrowRight size={20} />
              </button>
            </div>

            {/* CONTACT CARD */}
            <div className="lg:col-span-4">
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
                <h3 className="mb-8 text-3xl font-bold text-blue-900">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <BsBank className="mt-1 text-[#081B4B]" size={28} />
                    <div>
                      <h4 className="mb-1 font-semibold text-emerald-600">
                        Department
                      </h4>
                      <p className="text-slate-700">
                        Building Engineering &amp; Construction Management
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail size={24} className="mt-1 shrink-0 text-[#081B4B]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-emerald-600">Email</h4>
                      <p className="break-all text-slate-700">
                        abdullah@becm.ruet.ac.bd
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={24} className="mt-1 shrink-0 text-[#081B4B]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-emerald-600">Phone</h4>
                      <p className="text-slate-700">+880 18673 00023</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin size={24} className="mt-1 shrink-0 text-[#081B4B]" />
                    <div>
                      <h4 className="mb-1 font-semibold text-emerald-600">Office</h4>
                      <p className="text-slate-700">
                        Academic Building-5, RUET,
                        <br />
                        Rajshahi-6204, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6 text-center">

    <h2 className="mb-12 text-4xl font-bold text-blue-900">
      Research Interests
    </h2>

    <div className="grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

      {/* Structural Engineering */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          src="/icons/structural-bridge.png"
          alt="Structural Engineering"
          width={130}
          height={130}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-[#081B4B]">
          Structural Engineering
        </h3>
      </div>

      {/* Recycled Aggregate Concrete */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          src="/icons/recycled-aggregate.png"
          alt="Recycled Aggregate Concrete"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-[#081B4B]">
          Recycled Aggregate Concrete
        </h3>
      </div>

      {/* Machine Learning */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          src="/icons/machine-learning.png"
          alt="Machine Learning"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-[#081B4B]">
          Machine Learning Applications
        </h3>
      </div>

      {/* FRP */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          src="/icons/frp.png"
          alt="FRP Strengthening"
          width={130}
          height={130}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-[#081B4B]">
          FRP Strengthening
        </h3>
      </div>

      {/* Sustainable */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <Image
          src="/icons/sustainable.png"
          alt="Sustainable Construction"
          width={90}
          height={90}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-[#081B4B]">
          Sustainable Construction
        </h3>
      </div>

    </div>

  </div>
</section>

      {/* LATEST PUBLICATIONS */}
      <section className="bg-slate-50 pb-8 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold" style={{ color: P1 }}>
                Recent Research Works
              </h2>
            </div>
            <button className="hidden items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 md:flex">
              View All Publications
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Publication 1 */}
            <div className="flex flex-col gap-6 border-b border-slate-200 p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <FileText size={40} className="mt-1 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#081B4B]">
                    Optimizing Recycled Aggregate Concrete Strength Through
                    Surface Treatments and Machine Learning
                  </h3>
                  <p className="text-blue-700">
                    Construction and Building Materials
                    <span className="mx-3 text-slate-400">•</span>
                    <span className="text-slate-600">2024</span>
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-[#081B4B] hover:bg-slate-50">
                View Paper
                <ExternalLink size={18} />
              </button>
            </div>
            {/* Publication 2 */}
            <div className="flex flex-col gap-6 border-b border-slate-200 p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <FileText size={40} className="mt-1 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#081B4B]">
                    Structural Behavior of Damaged Building Frame Joint
                    Strengthened by Different Techniques Under Static and Dynamic
                    Loading
                  </h3>
                  <p className="text-blue-700">
                    Engineering Structures
                    <span className="mx-3 text-slate-400">•</span>
                    <span className="text-slate-600">2024</span>
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-[#081B4B] hover:bg-slate-50">
                View Paper
                <ExternalLink size={18} />
              </button>
            </div>
            {/* Publication 3 */}
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <FileText size={40} className="mt-1 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-[#081B4B]">
                    Machine Learning Models for Predicting Compressive Strength
                    of Recycled Aggregate Concrete
                  </h3>
                  <p className="text-blue-700">
                    Structures
                    <span className="mx-3 text-slate-400">•</span>
                    <span className="text-slate-600">2023</span>
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-medium text-[#081B4B] hover:bg-slate-50">
                View Paper
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 font-semibold text-blue-700">
              View All Publications
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHTS & TEACHING */}
      <section className="bg-white pb-20 pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Research Highlights */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2
                className="mb-8 text-2xl font-bold uppercase tracking-wide"
                style={{ color: P3 }}
              >
                Research Highlights
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="mt-1 shrink-0 text-emerald-600" />
                  <p className="text-lg text-slate-700">
                    Developed machine learning models for predicting recycled
                    aggregate concrete properties with high accuracy.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="mt-1 shrink-0 text-emerald-600" />
                  <p className="text-lg text-slate-700">
                    Investigated innovative strengthening techniques for
                    reinforced concrete structures.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="mt-1 shrink-0 text-emerald-600" />
                  <p className="text-lg text-slate-700">
                    Published research in reputed international journals and
                    presented findings at international conferences.
                  </p>
                </div>
              </div>
              <button
                className="mt-8 flex items-center gap-3 rounded-xl border px-8 py-4 font-semibold transition hover:bg-slate-50"
                style={{ color: P1 }}
              >
                View All Highlights
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Teaching & Courses */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2
                className="mb-8 text-2xl font-bold uppercase tracking-wide"
                style={{ color: P3 }}
              >
                Teaching &amp; Courses
              </h2>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <BookOpen size={24} style={{ color: P1 }} />
                  <p className="text-lg text-slate-700">Structural Analysis</p>
                </div>
                <div className="flex items-center gap-4">
                  <BookOpen size={24} style={{ color: P1 }} />
                  <p className="text-lg text-slate-700">
                    Reinforced Concrete Design
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <BookOpen size={24} style={{ color: P1 }} />
                  <p className="text-lg text-slate-700">Construction Materials</p>
                </div>
                <div className="flex items-center gap-4">
                  <BookOpen size={24} style={{ color: P1 }} />
                  <p className="text-lg text-slate-700">
                    Project Management in Construction
                  </p>
                </div>
              </div>
              <button
                className="mt-8 flex items-center gap-3 rounded-xl border px-8 py-4 font-semibold transition hover:bg-slate-50"
                style={{ color: P1 }}
              >
                View All Courses
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}