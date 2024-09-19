import express, { Request, Response} from "express";
import cors from "cors"

const app = express();
const port: number = 5000;
app.use(cors());

app.listen(port, () => {
    console.log("SERVER START 🚀️")
});