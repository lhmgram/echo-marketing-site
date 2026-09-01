import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { adPlatforms, snsPlatforms } from "@/lib/constants/platforms";

export function PlatformCoverage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Medium"
          title="対応プラットフォーム"
          description="広告運用・SNS運用ともに、主要なプラットフォームに対応しています。"
        />
        <div className="mx-auto flex max-w-2xl flex-col gap-8">
          <Reveal className="flex flex-col items-center gap-4 sm:flex-row">
            <p className="w-20 shrink-0 text-sm font-bold text-brand-dark">
              広告
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              {adPlatforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-brand-dark transition-shadow hover:shadow-md"
                >
                  {platform}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="flex flex-col items-center gap-4 sm:flex-row"
          >
            <p className="w-20 shrink-0 text-sm font-bold text-brand-dark">
              SNS
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              {snsPlatforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-brand-green/30 bg-brand-green-tint px-5 py-2 text-sm font-medium text-brand-green transition-shadow hover:shadow-md"
                >
                  {platform}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
