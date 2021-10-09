import express from "express";
import { router as loginRoutes } from "./routes/loginRoutes";
import { router as rootRoutes } from "./routes/rootRoutes";
import { urlencoded } from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdf"] }));
app.use(loginRoutes);
app.use(rootRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
