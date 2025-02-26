import bookimage from "../assets/Bookpreview.png";
export function Hero() {
  return (
    <div className="hero bg-[#E3F2FD] pt-44 lg:pt-24 h-auto">
      <div className="hero-content flex-col lg:flex-row-reverse items-center mx-auto px-4 lg:gap-14 py-0 lg:max-h-80">
        <img src={bookimage} className="w-full max-w-sm object-contain" />
        <div className="max-w-2xl text-black">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Explore the World of Stories!
          </h1>
          <p className="py-6">
            Dive into the world of literature! Whether you love fiction,
            non-fiction, mystery, or romance, find the perfect book for you.
          </p>
        </div>
      </div>
    </div>
  );
}
