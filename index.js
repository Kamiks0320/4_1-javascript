'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  //TODO1  
  const {r} = req.params;

  if(!r)
  {
    const missingpara = [];
    if(!r) missingpara.push("r");

    const error = `Brakuje potrzebnych parametrów get: ${missingpara.join(", ")}`;
    return res.status(400).send(error);
  }

  const message = `Pole: ${3.14 * r * r}, obwód: ${2 * 3.14 * r}`;
  res.type("text").send(message);
  res.json(result);
});

//TODO2
app.get("/math/rectangle/:width/:height", (req, res) =>
{
  const {width, height} = req.params;

  if(!width || !height)
  {
    const missingpara = [];
    if(!width) missingpara.push("w");
    if(!height) missingpara.push("h");

    const error = `Brakuje potrzebnych parametrów get: ${missingpara.join(", ")}`;
    return res.status(400).send(error);
  }

  const message = `Pole: ${width * height}, obwód: ${2 * width + 2 * height}`;
  res.type("text").send(message);
  res.json(result);
})

//TODO3
app.get("/math/power/:base/:ex/", (req, res) =>
{
  const {base, ex} = req.params;
  const {root} = req.query;

  if(!base || !ex)
  {
    const missingpara = [];
    if(!width) missingpara.push("base");
    if(!height) missingpara.push("ex");

    const error = `Brakuje potrzebnych parametrów get: ${missingpara.join(", ")}`;
    return res.status(400).send(error);
  }

  const message = `Potęga: ${Math.pow(base, ex)}, pierwiastek: ${root == "true" ? "root: " + Math.sqrt(base) : ""}`;
  res.type("text").send(message);
  res.json(result);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});