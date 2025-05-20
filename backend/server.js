import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hallo, dies ist eine einfache API !");
});
app.listen(port, () => {
  console.log(`server läuft auf http://localhost:${port}`);
});
