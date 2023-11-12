import { Request, Response } from "express";
import Order, { IOrder } from "../models/orderModel.js";

import asyncHandler from "../middleware/asyncHandler.js";

import { IUser } from "../models/userModel.js";

type AuthenticatedRequest = Request & { user: IUser };

// @desc   Create new order
// @route  POST /api/orders
// @access Private
const addOrderItems = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
    } else {
      const order = new Order({
        orderItems: orderItems.map((items) => ({
          ...items,
          product: items._id,
          _id: undefined,
        })),
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createOrder = await order.save();
      res.status(201).json(createOrder);
    }

    res.send("add order items");
  }
);

// @desc   Get logged in user orders
// @route  POST /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
  }
);

// @desc   Get order by ID
// @route  GET /api/orders/:id
// @access Private
const getOrderByID = asyncHandler(async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc   Update order to paid
// @route  PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req: Request, res: Response) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = new Date(Date.now());
    order.paymentResult = {
      id: req.body.id,
      status: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updateOrder = await order.save();

    res.status(200).json(updateOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc   Update order to delivered
// @route  PUT /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDeliver = asyncHandler(
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = new Date(Date.now());
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  }
);

// @desc   Get all orders
// @route  GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req: Request, res: Response) => {
  res.send("get all orders");
});
export {
  addOrderItems,
  getMyOrders,
  getOrderByID,
  updateOrderToDeliver,
  updateOrderToPaid,
  getOrders,
};
