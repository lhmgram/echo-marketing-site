import { Users, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
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
        <Reveal className="mb-4 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="h-px w-12 bg-brand-dark md:w-20" />
            <h2 className="text-3xl font-black tracking-tight text-brand-dark md:text-5xl">
              PRICE
            </h2>
            <span className="h-px w-12 bg-brand-dark md:w-20" />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-500">
            ECHOの利用料金
          </p>
        </Reveal>

        <Reveal delay={80} className="mx-auto mb-10 max-w-xl">
          <div className="rounded-full bg-brand-green px-6 py-4 text-center shadow-sm">
            <p className="text-sm font-bold text-white md:text-base">
              ご予算に合わせた <span className="font-extrabold">ECHO</span>{" "}
              のプラン紹介
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mb-3 text-center">
          <h3 className="text-xl font-bold leading-relaxed text-brand-dark md:text-2xl">
            マーケティング担当を新規雇用するより
            <br className="hidden md:block" />
            圧倒的に安い料金設定でご利用できます
          </h3>
        </Reveal>

        <Reveal delay={160} className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            下記の月額費用に広告費(媒体費)は含まれず、別途クライアント様のご負担となります。数字が安定するまでに一定期間が必要なため、契約期間は6ヶ月からとしています。
          </p>
        </Reveal>

        <Reveal delay={200} className="mb-6">
          <h3 className="text-lg font-bold text-brand-dark md:text-xl">
            圧倒的な <span className="text-brand-green">コストパフォーマンス</span>
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal delay={240}>
            <div className="h-full rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-4 py-2">
                <Users className="h-4 w-4 text-white" />
                <span className="text-sm font-bold text-white">
                  自社でマーケターを新規雇用した場合
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600">
                {inHouseCostComparison.label}
              </p>
              <p className="mt-2 text-4xl font-bold text-brand-dark">
                {inHouseCostComparison.value}
              </p>
              <p className="mt-2 text-xs text-gray-500">
                {inHouseCostComparison.detail}
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="h-full rounded-lg border border-brand-green bg-brand-green-tint p-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2">
                <TrendingUp className="h-4 w-4 text-white" />
                <span className="text-sm font-bold text-white">
                  ECHOにご依頼の場合
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-gray-600">
                        {plan.label}
                      </p>
                      {plan.highlighted && (
                        <span className="rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-medium text-white">
                          先着2社限定
                        </span>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-brand-dark">
                      {plan.price}
                      <span className="ml-1 text-sm font-medium text-gray-600">
                        {plan.unit}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-brand-green/20 pt-4 text-xs text-gray-600">
                {pricingConditions.map((condition) => (
                  <li key={condition}>{condition}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
