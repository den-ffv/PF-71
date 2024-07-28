import express, { Request, Response} from "express";
import cors from "cors"

const app = express();

const port: number = 5000;

type USER = {
    username: string,
    email: string
    age: number
}

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send("Hello user!!!")
});

const User: USER[] = [
    {
        username: "Devid",
        email: "dev@ff.com",
        age: 21
    },  {
        username: "Oliver",
        email: "mylfhanter@mum.cum",
        age: 10
    },  {
        username: "Olivia",
        email: "ooliv@ff.com",
        age: 21
    },
]

app.get('/user', (req: Request, res: Response) => {
    res.status(200).json(User)
});

app.listen(port, () => {
    console.log("SERVER START⚠️")
});