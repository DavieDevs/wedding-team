import { vendors } from "../data/vendors";
import CategoryCard from "./CategoryCard";

export default function ExploreCategories() {
  return (
    <section className="bg-white font-sans p-4">
      <div className="p-4">
        <h2 className="text-2xl text-black">Find your wedding dream team</h2>
        <h3 className="text-black">
          All the vendors you need, all in one place
        </h3>
      </div>

      <div className="flex flex-row p-4 gap-4">
        {vendors.map((item) => (
          <CategoryCard
            key={item.title}
            title={item.title}
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>

      <div className="flex">
        <span className="ml-auto text-link">view all</span>
      </div>
    </section>
  );
}
