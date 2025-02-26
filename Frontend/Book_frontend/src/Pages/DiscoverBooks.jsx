import { useContext } from "react";
import { GlobalContext } from "../Context/Bookcontext";
import { Card } from "../Components/Card";
import { Loader } from "../Components/Loader";

export function DiscoverBooks() {
  const { books, loading } = useContext(GlobalContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-60 lg:pt-40 pb-19 mx-auto justify-items-center max-w-[1400px] gap-10">
          {books.map((book) => (
            <Card key={book._id} book={book}></Card>
          ))}
        </div>
      )}
    </>
  );
}
