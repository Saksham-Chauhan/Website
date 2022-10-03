import { Routes, Route } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { Blog, Home } from "./pages";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
