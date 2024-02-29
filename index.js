import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: "https://nkuliappdev.onrender.com",
  methods: 'POST', 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

app.post("/api/auto-responder", router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
