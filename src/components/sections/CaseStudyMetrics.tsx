import { caseStudyMetrics } from "@/lib/constants/caseStudy";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

export function CaseStudyMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {caseStudyMetrics.map((metric, index) => (
        <Reveal key={metric.label} delay={index * 100}>
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-5 pt-6 transition-shadow hover:shadow-md">
            <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-green to-brand-green/30" />
            <metric.icon className="mb-2 h-5 w-5 text-brand-green" />
            <p className="text-2xl font-bold text-brand-green md:text-3xl">
              <Counter
                target={metric.numericValue}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals}
              />
            </p>
            <p className="mt-1 text-xs font-medium text-brand-dark">
              {metric.label}
            </p>
            {metric.detail && (
              <p className="mt-1 text-xs text-gray-500">{metric.detail}</p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
