import { useContext } from "react";
import { Card } from "../Components/Card";
import { GlobalContext } from "../Context/Bookcontext";
import { Hero } from "../Components/Hero";
import { Loader } from "../Components/Loader";

export function Home() {
  const { books, loading } = useContext(GlobalContext);
  const featuredbooks = books.filter(
    (filteredbook) => filteredbook.price <= 20
  );

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <Hero></Hero>
          <h3 className="my-12 text-center font-semibold text-3xl text-red-700">
            Best Sellers
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-items-center max-w-[1400px] gap-10 mb-15">
            {featuredbooks.map((book) => (
              <Card key={book._id} book={book}></Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}
