import { Fragment } from "react";
import { caseStudyPhases } from "@/lib/constants/caseStudy";
import { Reveal } from "@/components/ui/Reveal";

const phaseStyles: Record<string, string> = {
  before: "bg-gray-100 text-gray-600",
  phase1: "bg-brand-green-tint text-brand-green",
  phase2: "bg-brand-dark text-white",
};

const stepCircleStyles: Record<string, string> = {
  before: "bg-gray-200 text-gray-600",
  phase1: "bg-brand-green text-white",
  phase2: "bg-brand-dark text-white",
};

export function CaseStudyStory() {
  return (
    <div>
      <div className="mb-6 hidden items-center md:flex">
        {caseStudyPhases.map((phase, index) => (
          <Fragment key={phase.phase}>
            <div className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${stepCircleStyles[phase.phase]}`}
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium text-brand-dark">
                {phase.label}
              </span>
            </div>
            {index < caseStudyPhases.length - 1 && (
              <div className="mx-4 h-px flex-1 bg-gray-200" />
            )}
          </Fragment>
        ))}
      </div>

      <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-4">
        {caseStudyPhases.map((phase, index) => (
          <Reveal key={phase.phase} delay={index * 150} className="flex-1">
            <div className="h-full rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${phaseStyles[phase.phase]}`}
                >
                  {phase.label}
                </span>
                <span className="text-xs text-gray-500">{phase.period}</span>
              </div>
              <h4 className="mt-4 text-base font-bold text-brand-dark">
                {phase.heading}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {phase.description}
              </p>
              {phase.bullets && (
                <ul className="mt-4 flex flex-col gap-2">
                  {phase.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l-2 border-brand-green pl-3 text-sm text-gray-600"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
