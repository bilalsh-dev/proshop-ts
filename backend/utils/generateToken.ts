import { Response } from "express";

import jwt from "jsonwebtoken";

const generateToken = (res: Response, userID: string) => {
  const token = jwt.sign(
    {
      userId: userID,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  // Set JWT as HTTP-only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in mili-seconds
  });
};

export default generateToken;
