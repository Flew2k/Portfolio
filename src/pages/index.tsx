import { LandingPageOverallSection, LandingPageWelcomeSection } from "@/subsets";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-primary-white">
      <LandingPageWelcomeSection />
      <LandingPageOverallSection />
    </div>
  );
}
