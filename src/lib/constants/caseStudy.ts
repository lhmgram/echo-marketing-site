import { MousePointerClick, TrendingDown, Users, Wallet } from "lucide-react";
import type { CaseStudyMetric, CaseStudyPhase } from "@/types";

export const clinicProfile = {
  name: "美容クリニック様",
};

export const caseStudyMetrics: CaseStudyMetric[] = [
  {
    label: "広告月間運用額",
    numericValue: 157,
    prefix: "〜",
    suffix: "万円",
    detail: "大規模広告予算を効率的に運用・最適化",
    icon: Wallet,
  },
  {
    label: "CPA改善率",
    numericValue: 62,
    suffix: "%",
    detail: "顧客獲得単価を大幅に圧縮し、広告効率を向上",
    icon: TrendingDown,
  },
  {
    label: "CTR",
    numericValue: 4,
    prefix: "1% → ",
    suffix: "%",
    detail: "広告クリエイティブと配信設計の最適化による成果",
    icon: MousePointerClick,
  },
  {
    label: "集客数増加",
    numericValue: 2.2,
    decimals: 1,
    suffix: "倍",
    detail: "施策の連動設計により、総集客数を拡大",
    icon: Users,
  },
];

export const caseStudyPhases: CaseStudyPhase[] = [
  {
    phase: "before",
    label: "Before",
    period: "2024年8月〜2025年9月",
    heading: "予約件数は月平均35.4件で横ばい",
    description:
      "Meta広告・Instagram(3アカウント)・SEO/MEO・LINE公式アカウントは運用していたが、各施策が個別最適で、予約件数・カウンセリング数・新患数は伸び悩んでいた。",
    bullets: [
      "予約件数(月平均) 35.4件",
      "カウンセリング数(月平均) 36.2件",
      "新患数(月平均) 43.3人",
    ],
  },
  {
    phase: "phase1",
    label: "第1段階",
    period: "2025年10月〜2026年3月",
    heading: "広告配信の刷新とLP改修、SEOの効果が重なる",
    description:
      "Meta広告はASC(自動最適化)とブロード配信のA/Bテストを開始し、CTR4.19%→6.11%・CPC42.3円→35.6円まで改善。同時にLPへ追従CTAや訴求情報を追加し、2025年3月に体制構築したSEOの効果も表れ始めた。複数施策が重なったことで、予約件数は月平均35件台から43件台まで押し上がった。",
    bullets: [
      "Meta広告: CTR 4.19%→6.11%、CPC 42.3円→35.6円",
      "LP改修: 追従CTA・訴求情報・お客様の声を刷新",
      "SEO: 平均掲載順位22.8位→13.4位(2025年10月時点)",
    ],
  },
  {
    phase: "phase2",
    label: "第2段階",
    period: "2026年4月〜7月",
    heading: "Google広告の追加で、もう一段の伸びを実現",
    description:
      "Meta広告中心だった配信にGoogle広告を追加。開始月からCPC66円・コンバージョン単価538円という高効率な立ち上がりを記録し、これが引き金となって予約件数は月平均43件台から57件台まで押し上がり、以降月56〜61件で推移している。",
    bullets: [
      "Google広告: CPC 66円、コンバージョン単価538円(開始月)",
      "SEO: 2026年3月に平均掲載順位8.8位まで到達",
      "主力キーワード「クマ取り 福岡」で7.25位を獲得",
    ],
  },
];

export const caseStudyTools = [
  "Meta Ads Manager",
  "Google Ads",
  "Google Analytics",
  "Search Console",
  "LINE Official Account Manager",
  "Canva AI",
  "CapCut",
  "Illustrator",
  "Photoshop",
  "Premiere Pro",
  "Google Apps Script",
];
