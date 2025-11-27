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


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});