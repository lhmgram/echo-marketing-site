"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Image src="/logo.png" alt="ECHO" width={44} height={37} />
            <span className="text-2xl font-bold tracking-wide text-brand-dark">
              ECHO
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-md bg-brand-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-green-hover"
          >
            無料相談
          </a>
        </div>
      </Container>
    </header>
  );
}
