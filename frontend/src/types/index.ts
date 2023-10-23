type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};
type CartItem = Product & {
  qty: number;
};

type CartState = {
  cartItems: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
};

type UserInfo = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};
type LoginPayload = {
  email: string;
  password: string;
};
type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};
export type {
  CartItem,
  CartState,
  LoginPayload,
  Product,
  RegisterPayload,
  UserInfo,
};
