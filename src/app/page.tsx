import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { RootCauses } from "@/components/sections/RootCauses";
import { Services } from "@/components/sections/Services";
import { SupportActivities } from "@/components/sections/SupportActivities";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Profile } from "@/components/sections/Profile";
import { Pricing } from "@/components/sections/Pricing";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <RootCauses />
      <Services />
      <SupportActivities />
      <CaseStudy />
      <Profile />
      <Pricing />
      <ProcessSteps />
      <ContactForm />
    </>
  );
}
