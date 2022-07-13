const express = require("express");
const handler = require("./handler");
const middleware = require("./middleware");

const port = process.env.PORT || 8015;
const app = express();

// Pasang JSON Parser middleware
app.use(express.json());

// Router
app.post("/cars", handler.handleCreateCar);
app.get("/cars", handler.handleListCars);
app.get("/cars/:id", middleware.setCar, handler.handleGetCar);
app.put("/cars/:id", middleware.setCar, handler.handleUpdateCar);
app.delete("/cars/:id", middleware.setCar, handler.handleDeleteCar);

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
