import {
  Clock,
  HelpCircle,
  LayoutTemplate,
  Megaphone,
  Users,
  Wallet,
} from "lucide-react";
import type { PainPoint } from "@/types";

export const painPoints: PainPoint[] = [
  {
    title: "広告を出しても成果が出ない",
    description:
      "費用だけがかかり、問い合わせや受注につながらない。ROIが見えない状態が続いている。",
    icon: Megaphone,
  },
  {
    title: "SNS運用に時間がかかるが効果が不明確",
    description:
      "投稿を続けているが、フォロワー数や保存数の変化と集客の関係が見えず、工数に見合っているか判断できない。",
    icon: Clock,
  },
  {
    title: "LPやWebサイトの改善方法がわからない",
    description:
      "アクセスはあるのに問い合わせに至らない。どこをどう直せばいいか判断できない。",
    icon: LayoutTemplate,
  },
  {
    title: "マーケティング専任者を雇う余裕がない",
    description: "採用・教育コストを含めると月40万円以上の負担になる。",
    icon: Wallet,
  },
  {
    title: "複数の施策を誰が管理するのか不明確",
    description:
      "広告・SNS・LPそれぞれを別々の担当や代理店に任せており、全体を見る責任者がいない。",
    icon: Users,
  },
  {
    title: "広告代理店の提案が本当に効果的か判断できない",
    description:
      "専門知識がないため、提案内容の妥当性を検証する手段がなく、言われるがままになっている。",
    icon: HelpCircle,
  },
];
