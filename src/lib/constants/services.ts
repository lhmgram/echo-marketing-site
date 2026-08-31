import { Camera, MousePointerClick, PenTool, Target } from "lucide-react";
import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "広告運用代行",
    description:
      "Meta広告・Google広告・LINE広告など各種プラットフォームの入札調整・クリエイティブテスト・予算配分最適化を日次で実施します。",
    icon: Target,
  },
  {
    title: "SNS運用代行",
    description:
      "Instagram・TikTok・YouTubeを中心とした企画・投稿・コメント対応・分析まで一貫して対応。見た目の良さだけでなく集客に特化した運用を行います。",
    icon: Camera,
  },
  {
    title: "LP改善",
    description:
      "コンバージョン率向上のためのA/Bテスト・ユーザー行動分析・改善提案と実装を行います。アクセスを問い合わせへ転換します。",
    icon: MousePointerClick,
  },
  {
    title: "データ分析・クリエイティブ制作",
    description:
      "全施策の効果測定と改善提案に加え、広告バナー・SNS投稿画像の制作にも対応。分析と制作を一気通貫で実施します。",
    icon: PenTool,
  },
];
