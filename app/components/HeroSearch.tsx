export default function HeroSearch() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 h-full w-full">
      <h1
        className="text-4xl font-semibold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.45)]
"
      >
        Your perfect wedding team starts here
      </h1>

      <form action="" className="w-3/4 md:w-1/2 ">
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
