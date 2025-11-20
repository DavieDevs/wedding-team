import Hero from "./components/Hero";
import ExploreCategories from "./components/ExploreCategories";
import Banner from "./components/Banner";
import RealWeddingTeamSection from "./components/RealWeddingTeamSection";
import CTAsection from "./components/CTAsection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ExploreCategories />
      <Banner />
      <RealWeddingTeamSection />
      <CTAsection />
    </div>
  );
}
