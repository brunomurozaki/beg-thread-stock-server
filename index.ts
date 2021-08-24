import express, { Application, Request, Response, Router } from "express";
import register from "./src/web";

const app: Application = express();
const port = 3000;
const router = express.Router();
register(router);

function loggerMiddleware(request: express.Request, response: express.Response, next: any) {
    console.log(`${request.method} ${request.path}`);
    next();
  }

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware)
app.use("/", router)


app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`); 
    });
} catch (error: any) {
    console.error(`Error occured: ${error.message}`);
}