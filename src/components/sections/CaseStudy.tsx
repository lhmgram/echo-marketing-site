import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
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

        <Reveal className="mb-12">
          <PhotoPlaceholder
            label={`${clinicProfile.name} 外観・内観`}
            className="aspect-[21/9] w-full"
          />
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
