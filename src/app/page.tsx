import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { RootCauses } from "@/components/sections/RootCauses";
import { Services } from "@/components/sections/Services";
import { PlatformCoverage } from "@/components/sections/PlatformCoverage";
import { SupportActivities } from "@/components/sections/SupportActivities";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Profile } from "@/components/sections/Profile";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Faq } from "@/components/sections/Faq";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaBar } from "@/components/ui/CtaBar";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <CtaBar />
      <RootCauses />
      <Services />
      <PlatformCoverage />
      <CtaBar />
      <SupportActivities />
      <CaseStudy />
      <CtaBar />
      <Profile />
      <Pricing />
      <CtaBar />
      <ProcessSteps />
      <Faq />
      <ContactForm />
    </>
  );
}
