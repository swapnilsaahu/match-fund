import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(bodyParser.json());
app.use(express.json()); //can use limit to limit the filesize for the recivable from user
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

export { app };
