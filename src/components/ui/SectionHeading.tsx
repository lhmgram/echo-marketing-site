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
    <Reveal className="mb-10 md:mb-14">
      {eyebrow && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-brand-green" />
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-green uppercase">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-brand-dark md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}
