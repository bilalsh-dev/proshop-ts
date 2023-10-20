import { Request, Response } from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import User, { IUser } from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
// @desc   Auth user & get token
// @route  POST /api/user/login
// @access Public

const authUser = asyncHandler(async (req: Request, res: Response) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  res.send("auth user");
});

// @desc   Register user
// @route  POST /api/user
// @access Public

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc   Logout user / clear cookie
// @route  POST /api/user/logout
// @access Private

const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({
    message: "Logged out successfully",
  });
});

// @desc   Get user profile
// @route  GET /api/user/profile
// @access Private

const getUserProfile = asyncHandler(
  async (req: Request & { user: IUser }, res: Response) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  }
);

// @desc   Update user profile
// @route  PUT /api/user/profile
// @access Private

const updateUserProfile = asyncHandler(
  async (req: Request & { user: IUser }, res: Response) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updatedUser = await user.save();
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  }
);

// @desc   Get users
// @route  GET /api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req: Request, res: Response) => {
  res.send("Get users");
});

// @desc   Get user by ID
// @route  GET /api/users/:id
// @access Private/Admin

const getUserByID = asyncHandler(async (req: Request, res: Response) => {
  res.send("Get user by ID");
});

// @desc   Delete users
// @route  DELETE /api/users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  res.send("Delete users");
});

// @desc   Update users
// @route  PUT /api/users/:id
// @access Private/Admin

const updateUser = asyncHandler(async (req: Request, res: Response) => {
  res.send("Update users");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
