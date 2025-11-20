import { featuredCouples } from "../data/featuredCouples";
import FeatureCoupleCard from "./FeatureCoupleCard";

export default function RealWeddingTeamSection() {
  return (
    <section className="bg-white font-sans p-4">
      <div className="p-4">
        <h2 className="text-2xl text-black">Real wedding teams</h2>
        <h3 className="text-black">
          Get inspired by other couples and their dream team in your area
        </h3>
      </div>

      <div
        className="flex flex-row justify-center items-center gap-4 flex-wrap sm:flex-nowrap
   p-4 m-auto"
      >
        {featuredCouples.map((item) => (
          <FeatureCoupleCard
            key={item.coupleName}
            coupleImage={item.coupleImage}
            coupleName={item.coupleName}
            vendorCount={item.vendorCount}
            location={item.location}
          />
        ))}
      </div>

      <div className="flex">
        <span className="ml-auto text-link">view all</span>
      </div>
    </section>
  );
}
