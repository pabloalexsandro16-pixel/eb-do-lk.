
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

// Verifica se o servidor está funcionando.
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    project: "EB DO LK",
    message: "Servidor funcionando"
  });
});

// Mostra o site que está na pasta do repositório.
app.use(express.static(__dirname));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor EB DO LK iniciado na porta ${PORT}`);
});
