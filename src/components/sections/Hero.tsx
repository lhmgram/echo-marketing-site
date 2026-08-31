import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { services } from "@/lib/constants/services";

export function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Badge>集客責任者代行</Badge>
              <h1 className="mt-6 text-3xl font-bold leading-snug text-brand-dark sm:text-4xl md:leading-tight lg:text-5xl">
                月40万円のマーケティング担当を雇う前に。
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                集客を仕組み化する外部マーケティング担当。専任担当者を雇用するコストをかけずに、プロフェッショナルなマーケティング体制をつくります。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact">無料相談を申し込む</Button>
                <Button href="#results" variant="secondary">
                  実績を見る
                </Button>
              </div>
            </Reveal>

            <Reveal
              delay={200}
              className="mt-12 flex flex-wrap gap-6 border-t border-gray-100 pt-8"
            >
              {services.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <item.icon className="h-4 w-4 text-brand-green" />
                  <span className="text-xs font-medium text-gray-600">
                    {item.title}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={150}>
            <PhotoPlaceholder
              label="平山大剛 / 作業風景"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
