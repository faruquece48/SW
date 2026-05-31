import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Award,
  Brain,
} from "lucide-react";

export default function AboutPage() {
  const P1 = "#1E3A8A";

  return (
    <main className="bg-white">

      {/* PAGE HEADER */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1
            className="mb-4 text-5xl font-bold"
            style={{ color: P1 }}
          >
            About Me
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Assistant Professor, Department of Building Engineering &
            Construction Management, Rajshahi University of Engineering
            & Technology (RUET).
          </p>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-12">

            <div className="lg:col-span-4">
              <Image
                src="/images/photo.jpg"
                alt="Faruque Abdullah"
                width={500}
                height={650}
                className="rounded-3xl border border-slate-200 shadow-lg"
              />
            </div>

            <div className="lg:col-span-8">

              <h2
                className="mb-6 text-4xl font-bold"
                style={{ color: P1 }}
              >
                Biography
              </h2>

              <p className="mb-5 text-lg leading-8 text-slate-700">
                I am an Assistant Professor in the Department of
                Building Engineering & Construction Management (BECM)
                at Rajshahi University of Engineering & Technology
                (RUET), Bangladesh.
              </p>

              <p className="mb-5 text-lg leading-8 text-slate-700">
                My research focuses on Structural Engineering,
                Sustainable Construction Materials, Recycled Aggregate
                Concrete, FRP Strengthening Techniques, Earthquake
                Engineering, and Machine Learning Applications in Civil
                Engineering.
              </p>

              <p className="text-lg leading-8 text-slate-700">
                I actively engage in teaching, supervising student
                research, publishing scientific articles, and
                contributing to innovative engineering solutions for
                sustainable infrastructure development.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2
            className="mb-10 text-4xl font-bold"
            style={{ color: P1 }}
          >
            Education
          </h2>

          <div className="space-y-6">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <GraduationCap
                  size={40}
                  className="text-emerald-600"
                />

                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    M.Sc. Engineering in Civil Engineering
                  </h3>

                  <p className="text-slate-600">
                    Rajshahi University of Engineering &
                    Technology (RUET)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <GraduationCap
                  size={40}
                  className="text-emerald-600"
                />

                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    B.Sc. Engineering in Civil Engineering
                  </h3>

                  <p className="text-slate-600">
                    Rajshahi University of Engineering &
                    Technology (RUET)
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2
            className="mb-10 text-4xl font-bold"
            style={{ color: P1 }}
          >
            Professional Experience
          </h2>

          <div className="rounded-3xl border border-slate-200 p-8">

            <div className="flex gap-4">
              <Briefcase
                size={40}
                className="text-emerald-600"
              />

              <div>
                <h3 className="text-2xl font-semibold">
                  Assistant Professor
                </h3>

                <p className="text-slate-600">
                  Department of Building Engineering &
                  Construction Management, RUET
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2
            className="mb-10 text-4xl font-bold"
            style={{ color: P1 }}
          >
            Research Interests
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Structural Engineering",
              "Recycled Aggregate Concrete",
              "Machine Learning in Civil Engineering",
              "FRP Strengthening",
              "Earthquake Engineering",
              "Sustainable Construction Materials",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Brain
                    size={24}
                    className="text-emerald-600"
                  />
                  <span className="font-medium">
                    {item}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2
            className="mb-10 text-4xl font-bold"
            style={{ color: P1 }}
          >
            Awards & Achievements
          </h2>

          <div className="rounded-3xl border border-slate-200 p-8">

            <div className="flex gap-4">
              <Award
                size={40}
                className="text-emerald-600"
              />

              <div>
                <h3 className="text-xl font-semibold">
                  Research Excellence & Academic Contributions
                </h3>

                <p className="text-slate-600">
                  Publications in international journals,
                  conference presentations, and academic
                  supervision activities.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}