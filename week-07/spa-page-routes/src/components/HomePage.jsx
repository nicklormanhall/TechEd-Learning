import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h2>Home page</h2>
      <Link to="/about">About</Link>
    </div>
  );
}
