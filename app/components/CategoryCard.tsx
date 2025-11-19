type Props = {
  title: string;
  image: string;
  alt: string;
};

export default function CategoryCard({ title, image, alt }: Props) {
  return (
    <div className="bg-white shadow rounded-lg w-1/3">
      <img src={image} alt={alt} className="rounded-t-lg" />
      <span className="flex items-center justify-center text-black py-2">
        {title}
      </span>
    </div>
  );
}
