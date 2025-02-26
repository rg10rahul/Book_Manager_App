import { useContext } from "react";
import { Card } from "../Components/Card";
import { GlobalContext } from "../Context/Bookcontext";
import { Loader } from "../Components/Loader";
export function Searchpage() {
  const { searchedbook, loading } = useContext(GlobalContext);
  console.log("Searched book", searchedbook);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1400px] pt-60 lg:pt-40 pb-19 mx-auto justify-items-center gap-10">
          {searchedbook.map((book) => (
            <Card key={book._id} book={book}></Card>
          ))}
        </div>
      )}
    </>
  );
}
