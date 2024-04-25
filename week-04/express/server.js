import express from "express";

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("Server is listening on port 8080...");
});

app.get("/messages", (req, res) => {
  res.json({ message: "Hello, World!" });
});
