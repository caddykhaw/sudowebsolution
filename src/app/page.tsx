import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
    </Layout>
  );
}
