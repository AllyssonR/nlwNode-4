import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "os Dados foram salvos com sucesso" });
});
app.post("/", (request, response) => {
  return response.json({ message: "os Dados foram salvos com sucesso" });
});

app.listen(3333, () => {
  console.log("server is running ");
});
