import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  inHouseCostComparison,
  pricingConditions,
  pricingPlans,
} from "@/lib/constants/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Price"
          title="料金"
          description="上記の月額費用は広告運用代行(サービス提供)に対する対価で、広告費(媒体費)は含まれず別途クライアント様のご負担となります。広告運用は数字が安定するまでに一定期間が必要なため、契約期間は6ヶ月からとしています。"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.label} delay={index * 100}>
              <div
                className={`rounded-lg border p-6 transition-shadow hover:shadow-md ${
                  plan.highlighted
                    ? "border-brand-green bg-brand-green-tint"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-3 inline-block rounded-full bg-brand-green px-3 py-1 text-xs font-medium text-white">
                    先着2社限定
                  </span>
                )}
                <p className="text-sm font-medium text-gray-600">
                  {plan.label}
                </p>
                <p className="mt-2 text-3xl font-bold text-brand-dark">
                  {plan.price}
                  <span className="ml-1 text-base font-medium text-gray-600">
                    {plan.unit}
                  </span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
          {pricingConditions.map((condition) => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>

        <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
          <p className="text-sm font-medium text-gray-600">
            {inHouseCostComparison.label}
          </p>
          <p className="mt-1 text-2xl font-bold text-brand-dark">
            {inHouseCostComparison.value}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            {inHouseCostComparison.detail}
          </p>
        </div>
      </Container>
    </section>
  );
}
