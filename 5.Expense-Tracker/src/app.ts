import cookieParser from "cookie-parser";
import express from "express";
import authRoute from "./routes/auth.routes";
const app = express();


app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/api/auth", authRoute);



export default app;