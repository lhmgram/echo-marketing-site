import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/constants/processSteps";

const chevronStyles = [
  "bg-white text-brand-dark",
  "bg-[#b7ddc4] text-brand-dark",
  "bg-brand-green text-white",
  "bg-brand-green-hover text-white",
  "bg-brand-dark text-white",
];

export function ProcessSteps() {
  return (
    <section id="flow" className="bg-brand-green-tint py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Flow"
          title="契約までの流れ"
          description="初回相談から施策開始まで、最短3週間で稼働できます。"
        />
        <div className="flex flex-col gap-6 md:flex-row md:gap-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 100} className="flex-1">
              <div
                className={`flex h-12 items-center gap-3 pr-8 pl-5 text-lg font-bold ${chevronStyles[index % chevronStyles.length]}`}
                style={{
                  clipPath:
                    "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
                }}
              >
                <step.icon className="h-4 w-4 shrink-0" />
                {String(step.step).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-base font-bold text-brand-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
