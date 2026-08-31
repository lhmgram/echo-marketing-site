import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyMetrics } from "@/components/sections/CaseStudyMetrics";
import { CaseStudyStory } from "@/components/sections/CaseStudyStory";
import { ReservationChart } from "@/components/sections/ReservationChart";
import { ContentWorks } from "@/components/sections/ContentWorks";
import { caseStudyTools, clinicProfile } from "@/lib/constants/caseStudy";

export function CaseStudy() {
  return (
    <section id="results" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="実績"
          description={`${clinicProfile.name}における実績です。Meta広告・Google広告・SNS運用(3アカウント)・SEO/MEO・LINE公式アカウント・LP制作・コンテンツ制作までを一人で担当し、感覚に頼らず数字を追いながら運用を継続しています。`}
        />

        <Reveal className="mb-12 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <div className="relative z-[45] aspect-video w-full max-w-2xl">
            <Image
              src="/case-study-profile.jpg"
              alt={clinicProfile.name}
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-contain"
            />
          </div>
        </Reveal>

        <CaseStudyMetrics />

        <div className="mt-12">
          <CaseStudyStory />
        </div>

        <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-base font-bold text-brand-dark">
            主要指標の推移(月平均)
          </h3>
          <ReservationChart />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {caseStudyTools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
            >
              {tool}
            </span>
          ))}
        </div>

        <ContentWorks />
      </Container>
    </section>
  );
}
