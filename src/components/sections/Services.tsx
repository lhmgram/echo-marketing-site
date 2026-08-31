import { Layers, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/constants/services";

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Service"
          title="サービス内容"
          description="広告運用・SNS運用・LP改善・データ分析とクリエイティブ制作をワンストップで支援します。専任担当者を雇用するコストをかけずに、プロフェッショナルなマーケティング体制をつくります。"
        />

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-green" />
              <p className="text-xs font-medium text-brand-green">
                対象企業
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              マーケティング専任者の採用が難しく、集客を仕組み化したいと考えている企業様。
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <Layers className="h-5 w-5 text-brand-green" />
              <p className="text-xs font-medium text-brand-green">
                提供価値
              </p>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              外部マーケティング担当として、広告・SNS・LPの全施策を一元管理する。施策間の連動性を確保し、データに基づく改善で成果を積み上げる。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 100}>
              <Card>
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-tint">
                  <item.icon className="h-5 w-5 text-brand-green" />
                </span>
                <h3 className="mb-2 text-base font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
