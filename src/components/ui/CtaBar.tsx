import { Container } from "@/components/ui/Container";

export function CtaBar() {
  return (
    <div className="bg-brand-green">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3 py-5 text-center sm:flex-row sm:gap-6">
          <p className="text-sm font-bold text-white md:text-base">
            まずは無料相談から。今の集客課題をお聞かせください。
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-bold text-brand-green transition-transform duration-200 hover:scale-105"
          >
            無料相談を申し込む
          </a>
        </div>
      </Container>
    </div>
  );
}
