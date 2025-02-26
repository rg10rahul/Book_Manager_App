export function Card({ book }) {
  return (
    <div className="card card-compact bg-base-100 w-80 shadow-xl border-1 border-gray-300 max-h-[420px]">
      <figure className="max-h-64">
        <img src={book.image} alt="" className="h-full w-full object-contain" />
      </figure>
      <div className="card-body pb-6">
        <h2 className="card-title">{book.title}</h2>
        <div className="flex flex-col">
          <p>{book.category}</p>
          <p>{`$${book.price}`}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-neutral btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
