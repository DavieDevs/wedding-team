export default function HeroSearch() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 h-full w-full">
      <h1 className="text-2xl font-sans font-sans">
        Your perfect wedding team starts here
      </h1>

      <form action="" className="w-3/4">
        <div className="flex items-stretch gap-2 bg-white/90 rounded-lg shadow h-12">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-black px-2"
            placeholder="Search vendor category or name"
          />
          <button
            className="bg-brand text-white px-6 rounded-r-lg
           flex items-center justify-center"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
