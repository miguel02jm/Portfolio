import express from "express";
import indexRoutes from "./routes/index.routes";
import exphbs from "express-handlebars";
import path from "path";
import { engine } from "express-handlebars";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "/views"));

app.engine(
  ".hbs",
  engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    // partialsDir: path.join(app.get("views"), "partials"), => No es necesario escribir esta linea
    defaulLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);

export default app;
