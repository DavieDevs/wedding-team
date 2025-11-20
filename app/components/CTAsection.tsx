import Image from "next/image";

export default function CTAsection() {
  return (
    <section className="flex flex-row p-4 bg-brand">
      <div className="hidden md:block relative w-1/2 h-[350px] overflow-hidden rounded-xl ">
        <Image
          src="/images/wt_cta.jpg"
          alt="Wedding Team Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-4xl font-bold p-2">
          Ready to plan your dream wedding?
        </h2>
        <span className="text-white/80 max-w-md block p-2">
          Find trusted vendors, explore packages, and bring your big day to
          life, all in one place.
        </span>
        <div className="w-full flex items-center p-2">
          <button className="bg-white text-brand p-4 rounded-xl w-1/3">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
