import { updateCart } from "utils";

import type { PayloadAction } from "@/lib/react-redux";
import { createSlice } from "@/lib/react-redux";
import type { CartItem, CartState, ShippingAddress } from "@/types";

const cartData = localStorage.getItem("cart");
const initialState: CartState = cartData
  ? JSON.parse(cartData)
  : {
      cartItems: [],
      shippingAddress: {},
      paymentMethod: "PayPal",
      itemsPrice: 0,
      shippingPrice: 0,
      taxPrice: 0,
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) => cartItem._id === item._id
      );

      if (existItem) {
        // Update the quantity of the existing item
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        // Add the item to the cart with qty: 1
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
    saveShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    },
  },
});

export const {
  addToCart,
  clearCartItems,
  removeFromCart,
  savePaymentMethod,
  saveShippingAddress,
} = cartSlice.actions;

export default cartSlice.reducer;
