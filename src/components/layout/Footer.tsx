import Image from "next/image";
import { AtSign } from "lucide-react";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  { label: "サービス内容", href: "#services" },
  { label: "実績", href: "#results" },
  { label: "自己紹介", href: "#profile" },
  { label: "料金", href: "#pricing" },
  { label: "契約までの流れ", href: "#flow" },
  { label: "お問い合わせ", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark py-14 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="relative z-[45] flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ECHO"
                width={40}
                height={34}
                className="brightness-0 invert"
              />
              <p className="text-2xl font-bold">ECHO</p>
            </div>
            <p className="text-sm text-white/70">集客責任者代行 / 平山大剛</p>
            <a
              href="https://www.instagram.com/design___hirotaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
            >
              <AtSign className="h-3.5 w-3.5" />
              design___hirotaka
            </a>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-wide text-white/50 uppercase">
              Menu
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium tracking-wide text-white/50 uppercase">
              Contact
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-green px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-green-hover"
            >
              無料相談を申し込む
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} ECHO
          </p>
        </div>
      </Container>
    </footer>
  );
}
