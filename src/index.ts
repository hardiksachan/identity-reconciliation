import express from "express";
const port = process.env.PORT || "8000";

const app = express();

app.get("/health", (_, res) => {
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
