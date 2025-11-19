import HeroSearch from "./HeroSearch";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background video */}
      <video
        src="/parallaxclips.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OPTIONAL: Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <HeroSearch />
      </div>
    </section>
  );
}
