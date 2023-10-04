import { Request, Response } from "express";
import Product, { IProduct } from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc   Fetch all products
// @route  Get /api/products
// @access Public

const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
  const products: IProduct[] = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product: IProduct | null = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Resource not found");
});

export { getAllProducts, getProductById };
