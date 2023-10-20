import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User, { IUser } from "../models/userModel.js";

interface CustomRequest extends Request {
  user?: IUser; // Define 'user' property
}
// Protect routes
const protect = asyncHandler(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    // let token: Jwt;

    // Read the JWT from cookie
    let token = req.cookies.jwt;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        req.user = await User.findById(decoded.userId).select("-password");
        next();
      } catch (error) {
        console.log("error", error);
        res.status(401);
        throw new Error("Not Authorized, token failed");
      }
    } else {
      res.status(401);
      throw new Error("Not Authorized, no token");
    }
  }
);

// Admin middleware
const admin = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as admin");
  }
};

export { protect, admin };
