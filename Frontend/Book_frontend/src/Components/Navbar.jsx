import { IoMdSearch } from "react-icons/io";
import { GlobalContext } from "../Context/Bookcontext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
export default function Navbar() {
  const [text, setText] = useState("");
  const { setTerm } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setTerm(text);
    console.log(text);
    navigate("/search");
  };
  return (
    <div className="navbar fixed top-0 w-full left-0 flex-col lg:flex-row justify-between items-center bg-black shadow-md shadow-black pl-4 pr-10 py-6 z-50 ">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <IoMenuSharp className="size-8 fill-white"></IoMenuSharp>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/books">Discover Books</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center my-2 lg:my-0">
        <a className="text-4xl text-sky-400 font-bold ">Book Manager</a>
      </div>
      <div className="navbar-end w-auto mt-2 lg:mt-0">
        <form
          className="flex items-center bg-white rounded px-2 py-1 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search books"
            className="border-0"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button type="Submit">
            <IoMdSearch className="size-6 cursor-pointer"></IoMdSearch>
          </button>
        </form>
      </div>
    </div>
  );
}
