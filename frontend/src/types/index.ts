type Review = {
  _id: string;
  createdAt: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
};

type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating?: number;
  numReviews?: number;
  reviews?: Review[];
};
type ProductsResponse = {
  products: Product[];
  page: number;
  pages: number;
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
type UpdateUserInfo = {
  _id: string;
  name: string;
  email: string;
  password: string;
};
type OrderItem = {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: string;
};

type Order = {
  _id: string;
  user: { _id: string; name: string; email: string };
  orderItems: OrderItem[];
  paymentMethod: string;
  shippingAddress: ShippingAddress;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
};
type ReviewPayload = {
  productId: string;
  rating: number;
  comment: string;
};
export type {
  CartItem,
  CartState,
  LoginPayload,
  Order,
  Product,
  ProductsResponse,
  RegisterPayload,
  Review,
  ReviewPayload,
  ShippingAddress,
  UpdateUserInfo,
  UserInfo,
};
