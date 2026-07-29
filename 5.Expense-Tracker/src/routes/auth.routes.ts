import { Router } from "express";
import { signup } from "../controllers/auth.controller";

const authRoute = Router();



authRoute.post("/signup", signup);
// authRoute.post("/login");


export default authRoute;