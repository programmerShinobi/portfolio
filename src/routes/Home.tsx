import { Hero } from '@/components/sections/Hero';
import { ImpactHighlights } from '@/components/sections/ImpactHighlights';
import { CapabilityRadar } from '@/components/sections/CapabilityRadar';
import { SelectedCaseStudies } from '@/components/sections/SelectedCaseStudies';
import { HowIThink } from '@/components/sections/HowIThink';
import { TechnicalFocus } from '@/components/sections/TechnicalFocus';
import { PersonalExploration } from '@/components/sections/PersonalExploration';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactHighlights />
      <CapabilityRadar />
      <SelectedCaseStudies />
      <HowIThink />
      <TechnicalFocus />
      <PersonalExploration />
      <About />
      <ContactCTA />
    </>
  );
}
