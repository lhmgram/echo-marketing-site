import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { painPoints } from "@/lib/constants/painPoints";

export function PainPoints() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Problem"
          title="こんな悩みありませんか"
          description="中小企業経営者が直面する、マーケティングの共通課題です。"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <Card>
                <span className="pointer-events-none absolute -top-3 -right-2 font-mono text-7xl font-bold text-brand-green/[0.06]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-tint">
                  <item.icon className="h-5 w-5 text-brand-green" />
                </span>
                <h3 className="relative mt-3 mb-2 text-base font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
