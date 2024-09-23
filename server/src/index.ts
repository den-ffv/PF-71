import express from "express";
import cors from "cors"

import routes from "./routes/routes";

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`SERVER START IN ${port} 🚀️`)
});