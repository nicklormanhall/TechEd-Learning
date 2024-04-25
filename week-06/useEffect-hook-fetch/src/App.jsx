import { useState, useEffect } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        // "https://jsonplaceholder.typicode.com/todos"
        "https://dummyjson.com/posts"
      );
      const data = await response.json();

      const posts = data.posts;

      setItems(posts);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}, {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
