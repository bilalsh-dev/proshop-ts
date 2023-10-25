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

type ShippingAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

type CartState = {
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
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

type OrderItem = {
  name: string;
  qty: 1;
  image: string;
  price: number;
  product: string;
};

type Order = {
  user: string;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type {
  CartItem,
  CartState,
  LoginPayload,
  Order,
  Product,
  RegisterPayload,
  ShippingAddress,
  UserInfo,
};
