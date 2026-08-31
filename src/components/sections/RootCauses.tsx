import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { rootCauses } from "@/lib/constants/rootCauses";

export function RootCauses() {
  return (
    <section className="bg-brand-green-tint py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why"
          title="なぜ成果が出ないのか"
          description="課題の背景には、5つの根本的な原因があります。一つひとつを解消しなければ、施策を変えても同じ結果になります。"
        />
        <div className="flex flex-col gap-6">
          {rootCauses.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="flex gap-4 border-l-2 border-brand-green pl-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-110">
                  <item.icon className="h-5 w-5 text-brand-green" />
                </span>
                <div>
                  <h3 className="mb-1 text-base font-bold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
