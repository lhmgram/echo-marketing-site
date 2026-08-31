import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { contentWorksNote } from "@/lib/constants/contentWorks";
import { otherAccountAvatars } from "@/lib/constants/otherAccounts";

const loopedImages = [...otherAccountAvatars, ...otherAccountAvatars];

export function ContentWorks() {
  return (
    <div className="mt-20 border-t border-gray-200 pt-16 md:mt-28">
      <p className="mb-2 text-sm font-medium tracking-wide text-brand-green">
        Content Works
      </p>
      <h3 className="mb-2 text-xl font-bold text-brand-dark">
        コンテンツ制作実績
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600 md:text-base">
        {contentWorksNote}
      </p>

      <Reveal className="-my-3 overflow-hidden py-3">
        <div className="animate-marquee flex w-max gap-6">
          {loopedImages.map((avatar, index) => {
            const avatarClasses =
              "relative z-[45] h-28 w-28 shrink-0 overflow-hidden rounded-full border border-gray-200 transition-transform duration-300 md:h-36 md:w-36";
            const image = (
              <Image
                src={avatar.src}
                alt=""
                fill
                sizes="144px"
                className="object-cover"
              />
            );

            return avatar.href ? (
              <a
                key={`${avatar.src}-${index}`}
                href={avatar.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${avatarClasses} hover:scale-105`}
              >
                {image}
              </a>
            ) : (
              <div
                key={`${avatar.src}-${index}`}
                className={avatarClasses}
              >
                {image}
              </div>
            );
          })}
        </div>
      </Reveal>

      <p className="mt-4 text-xs text-gray-400">
        ※掲載しているアカウントの投稿すべてを制作したわけではありません。
      </p>
    </div>
  );
}
