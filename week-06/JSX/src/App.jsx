import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

export default function App() {
  return <MyComponent name="world" />;
}
