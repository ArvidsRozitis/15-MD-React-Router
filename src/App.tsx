import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { Characters } from "./pages/Characters";
import { About } from "./pages/About";
import "./App.scss";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters/:id" element={<Character />} />
      </Routes>
    </>
  );
}

export default App;
