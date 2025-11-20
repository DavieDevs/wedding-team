type Props = {
  coupleImage: string;
  coupleName: string;
  vendorCount: number;
  location: string;
};

export default function FeatureCoupleCard({
  coupleImage,
  coupleName,
  vendorCount,
  location,
}: Props) {
  return (
    <div className="bg-white shadow rounded-lg w-full  max-w-xs sm:w-1/3">
      <img src={coupleImage} alt="" className="rounded-t-lg" />
      <span className="flex items-center justify-center text-black py-2 text-xl">
        {coupleName}
      </span>
      <div className="flex flex-row justify-between px-2">
        <div className="p-4">
          <span className="flex items-center text-black text-xs">
            {vendorCount} vendors
          </span>
          <span className="flex items-center text-black">{location}</span>
        </div>

        <div className="flex items-center">
          <button className="text-black shadow border border-gray-300 rounded-lg px-2">
            +Follow
          </button>
        </div>
      </div>
    </div>
  );
}
