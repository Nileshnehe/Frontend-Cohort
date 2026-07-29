import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../types/user.type.js";

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(this.password, 10);
});


userSchema.methods.comparePassword = async function (password:string): Promise<boolean>{
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model<IUser>("User", userSchema);
export default User;