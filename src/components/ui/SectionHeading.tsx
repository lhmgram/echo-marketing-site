import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 flex flex-col items-center text-center md:mb-14">
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <span className="hidden h-px w-8 shrink-0 bg-brand-dark sm:block md:w-16" />
        <h2 className="text-xl font-black tracking-tight text-brand-dark sm:text-2xl md:text-4xl">
          {title}
        </h2>
        <span className="hidden h-px w-8 shrink-0 bg-brand-dark sm:block md:w-16" />
      </div>
      {eyebrow && (
        <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-brand-green uppercase">
          {eyebrow}
        </p>
      )}
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
