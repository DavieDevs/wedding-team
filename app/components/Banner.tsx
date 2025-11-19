import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-[25vh] overflow-hidden">
      <Image
        src="/images/wt_banner.jpg"
        alt="Wedding Team Banner"
        fill
        priority
        className="object-cover object-bottom"
      />
    </section>
  );
}
