import Database from "better-sqlite3";
const db = new Database("database.db");

db.prepare("UPDATE messages SET message = ? WHERE name = ?").run(
  "test1",
  "Spongebob"
);
