import Database from "better-sqlite3";

const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    name TEXT,
    message TEXT
  )
`);

db.prepare(`INSERT INTO messages (name, message) VALUES (?, ?)`).run(
  "Spongebob",
  "Hello world"
);

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run("Spongebob", "Hello world");
insertStatement.run("Patrick", "Hi Spongebob");
insertStatement.run("Squidward", "I hate you both");
