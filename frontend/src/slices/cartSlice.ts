import { updateCart } from "utils";

import type { PayloadAction } from "@/lib/react-redux";
import { createSlice } from "@/lib/react-redux";
import type { CartItem, CartState } from "@/types";

const cartData = localStorage.getItem("cart");
const initialState: CartState = cartData
  ? JSON.parse(cartData)
  : {
      cartItems: [],
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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

// import type { PayloadAction } from "@/lib/react-redux";
// import { createSlice } from "@/lib/react-redux";
// import type { Product } from "@/types";

// type CartItem = Product & {
//   qty: number;
//   itemsPrice: number;
//   shippingPrice: number;
//   taxPrice: number;
// };

// const cartData = localStorage.getItem("cart");
// const initialState: CartItem[] = cartData
//   ? JSON.parse(cartData)
//   : { cartItems: [] };

// const addDecimals = (num: number) => {
//   return (Math.round(num * 100) / 100).toFixed(2);
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       const item = action.payload;
//       const existItem = state.cartItems.find(
//         (cartItem) => cartItem._id === item._id
//       );
//       if (existItem) {
//         state.cartItems = state.cartItems.map((cartItem) =>
//           cartItem._id === existItem._id ? item : cartItem
//         );
//       } else {
//         state.cartItem = [...state.cartItems, item];
//       }
//       // calculate  item price
//       state.itemsPrice = addDecimals(
//         state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
//       );
//       // calculate  shipping price (If order is over 100$ then free else 10$ )
//       state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
//       // calculate  tax price ( 15% tax )
//       state.taxPrice = addDecimals(
//         Number((0.15 * state.itemsPrice).toFixed(2))
//       );
//       // calculate  total price
//       state.totalPrice = (
//         Number(state.itemsPrice) +
//         Number(state.shippingPrice) +
//         Number(state.taxPrice)
//       ).toFixed(2);

//       localStorage.setItem("cart", JSON.stringify(state));
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;
