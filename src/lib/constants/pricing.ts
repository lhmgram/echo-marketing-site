import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    label: "通常価格",
    price: "250,000",
    unit: "円/月",
  },
  {
    label: "先着2社限定価格",
    price: "200,000",
    unit: "円/月",
    highlighted: true,
  },
];

export const pricingConditions: string[] = [
  "初期費用 0円",
  "契約期間 6ヶ月から",
  "広告費(媒体費)は別途",
];

export const inHouseCostComparison = {
  label: "広報一人の人件費",
  value: "月40万円前後",
  detail: "賞与、社会保険料、各種手当を含めた月の給与",
};
