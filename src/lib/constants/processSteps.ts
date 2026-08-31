import {
  FileSignature,
  FileText,
  MessageCircle,
  RefreshCw,
  Rocket,
} from "lucide-react";
import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "初回相談(無料)",
    description: "現状の運用状況と課題感をヒアリングする。",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "提案資料作成",
    description:
      "貴社に最適な施策プランをカスタマイズして提案する。費用対効果を明確に説明する。",
    icon: FileText,
  },
  {
    step: 3,
    title: "契約締結",
    description: "プランに合意の上、契約書を締結する。余計な手続きはない。",
    icon: FileSignature,
  },
  {
    step: 4,
    title: "キックオフ",
    description:
      "施策開始。初月は現状分析と改善案の提示に注力し、確実な土台を構築する。",
    icon: Rocket,
  },
  {
    step: 5,
    title: "継続改善",
    description:
      "毎月の戦略会議とレポートで成果を最大化する。データを積み上げながら長期的な成長を支援する。",
    icon: RefreshCw,
  },
];
