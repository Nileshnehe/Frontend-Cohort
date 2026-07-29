import { Request, Response } from "express";
import { RegisterInput } from "../types/user.type"
import jwt from "jsonwebtoken"
import User from "../model/user.model";


export const signup = async (
    req: Request<{}, {}, RegisterInput>,
    res: Response
) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exist" });
        }

        const newUser = await User.create({ name, email, password });

        // console.log(newUser);
        
        const token: string = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .status(201)
            .json({
                message: "User registered successfully",
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                },
                token,
            });

    } catch (error) {
        console.error("Signup Error:", error); 
        res.status(500).json({ message: "Something went wrong", error });
    }
}

