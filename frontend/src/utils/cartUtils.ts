import type { CartState } from "@/types";

const addDecimals = (num: number) => {
  return Math.round(num * 100) / 100;
};
const updateCart = (state: CartState) => {
  // Recalculate prices
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // calculate  shipping price (If order is over 100$ then free else 10$ )
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

  // calculate  tax price ( 15% tax )
  state.taxPrice = addDecimals(0.15 * state.itemsPrice);

  // calculate  total price
  state.totalPrice = addDecimals(
    state.itemsPrice + state.shippingPrice + state.taxPrice
  );

  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};
export { addDecimals, updateCart };
