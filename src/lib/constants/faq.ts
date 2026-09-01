export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "契約期間はどれくらいですか?",
    answer:
      "6ヶ月からとなります。広告運用は数字が安定するまでに一定期間が必要なため、このように設定しています。",
  },
  {
    question: "広告費はサービス料金に含まれますか?",
    answer:
      "含まれません。月額費用は広告運用代行(サービス提供)に対する対価で、広告費(媒体費)は別途クライアント様のご負担となります。",
  },
  {
    question: "契約から施策開始までどれくらいかかりますか?",
    answer:
      "初回相談から最短2〜3週間で施策を開始できます。難しい手続きはありません。",
  },
  {
    question: "どのプラットフォームに対応していますか?",
    answer:
      "広告はMeta広告・Google広告・LINE広告、SNSはInstagram・TikTok・YouTubeに対応しています。",
  },
  {
    question: "初期費用はかかりますか?",
    answer: "初期費用は0円です。月額費用のみでご利用いただけます。",
  },
  {
    question: "自社の業種でも依頼できますか?",
    answer:
      "従業員10〜50名規模の中小企業を中心にご対応しています。業種を問わず、まずは無料相談でご状況をお聞かせください。",
  },
];
