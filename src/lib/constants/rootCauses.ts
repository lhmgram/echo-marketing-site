import { BarChart3, Lightbulb, Monitor, RefreshCw, Shuffle } from "lucide-react";
import type { RootCause } from "@/types";

export const rootCauses: RootCause[] = [
  {
    title: "戦略がない",
    description:
      "「とりあえず広告を出す」「なんとなくSNSを更新する」という状態では、予算だけが消費される。誰に、何を、どのように届けるかの設計が不可欠。",
    icon: Lightbulb,
  },
  {
    title: "データを見ていない",
    description:
      "クリック率・コンバージョン率・CPAなど、改善の根拠となる数字を追っていなければ、次の打ち手を決めることができない。",
    icon: BarChart3,
  },
  {
    title: "施策がバラバラ",
    description:
      "広告・SNS・LPが連動していないと、せっかく集めた見込み客を途中で失う。全体を一つの導線として設計することが成果につながる。",
    icon: Shuffle,
  },
  {
    title: "継続性がない",
    description:
      "成果が出る前に施策を変えてしまうことで、データが蓄積されず改善サイクルが回らない。最低3ヶ月の継続運用が必要。",
    icon: RefreshCw,
  },
  {
    title: "専門知識がない",
    description:
      "Meta広告のアルゴリズム変更やInstagramの最新仕様など、プラットフォームは常に進化している。最新知識への継続的なキャッチアップが必須。",
    icon: Monitor,
  },
];
