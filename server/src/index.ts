import express from "express";
import { router } from "./routes/loginRoutes";
import { urlencoded } from "body-parser";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
