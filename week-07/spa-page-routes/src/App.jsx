import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./components/AboutPage";
import { HomePage } from "./components/HomePage";
import { NotFoundPage } from "./components/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <h1>Welcome to my website</h1>
      <nav>
        <Link to="/about">About</Link> | <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
