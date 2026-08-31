import {
  Calendar,
  FileBarChart,
  MousePointerClick,
  TrendingUp,
  Camera,
} from "lucide-react";
import type { ServiceItem } from "@/types";

export const supportActivities: ServiceItem[] = [
  {
    title: "月1回の戦略会議",
    description:
      "施策の方向性を確認し、翌月の改善案を提案。経営者と認識を合わせながら施策を推進。",
    icon: Calendar,
  },
  {
    title: "広告運用(日次)",
    description:
      "入札調整・クリエイティブテスト・予算配分の最適化を日々実施。無駄な広告費を排除。",
    icon: TrendingUp,
  },
  {
    title: "SNS運用(週次)",
    description: "投稿企画・コンテンツ制作・コメント対応・分析を週単位で実施。",
    icon: Camera,
  },
  {
    title: "LP改善(随時)",
    description:
      "A/Bテスト・ユーザー行動分析・改善提案を随時実施。コンバージョン率の継続的な向上。",
    icon: MousePointerClick,
  },
  {
    title: "月次レポート",
    description:
      "全施策の成果を数字で可視化。広告費・CTR・CPA・集客数など主要KPIをまとめて報告。",
    icon: FileBarChart,
  },
];
