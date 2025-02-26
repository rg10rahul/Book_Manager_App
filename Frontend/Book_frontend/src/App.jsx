import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { Searchpage } from "./Pages/Searchpage.jsx";
import { DiscoverBooks } from "./Pages/DiscoverBooks.jsx";
import { About } from "./Pages/About.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/search" element={<Searchpage />} />
          <Route path="/books" element={<DiscoverBooks />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
