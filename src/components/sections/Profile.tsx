import Image from "next/image";
import { AtSign } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { profileHistory } from "@/lib/constants/profile";

const instagramUrl = "https://www.instagram.com/design___hirotaka/";

export function Profile() {
  return (
    <section id="profile" className="bg-brand-green-tint py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Profile" title="自己紹介" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr]">
          <div className="flex flex-col gap-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-[45] aspect-square w-full max-w-[320px] overflow-hidden rounded-full border border-gray-200 bg-white transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/profile.jpg"
                alt="平山大剛"
                fill
                sizes="320px"
                className="object-cover"
              />
            </a>
            <div>
              <p className="text-base font-bold text-brand-dark">
                平山大剛(ひらやま ひろたか)
              </p>
              <p className="text-sm text-gray-600">ECHO / 集客責任者代行</p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-brand-green hover:underline"
              >
                <AtSign className="h-3.5 w-3.5" />
                design___hirotaka
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {profileHistory.map((item, index) => (
              <Reveal key={item.role} delay={index * 120}>
                <div className="border-l-2 border-brand-green pl-5">
                  <p className="text-xs font-medium text-brand-green">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-brand-dark">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
