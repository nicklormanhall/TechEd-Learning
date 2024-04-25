import Database from "better-sqlite3";
const db = new Database("database.db");

const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);

const messagesSponge = db
  .prepare("SELECT name FROM messages WHERE name = '%s%'")
  .all();

console.log("messages", messagesSponge);
