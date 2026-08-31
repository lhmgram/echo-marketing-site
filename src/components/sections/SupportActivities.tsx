import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { supportActivities } from "@/lib/constants/supportActivities";

export function SupportActivities() {
  return (
    <section className="bg-brand-green-tint py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="支援内容"
          description="月次で回るPDCAサイクルを基盤に、広告・SNS・LP改善を継続的に推進します。"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {supportActivities.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="rounded-lg border border-brand-green/30 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-green-tint">
                  <item.icon className="h-4 w-4 text-brand-green" />
                </span>
                <h3 className="mb-2 text-sm font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
