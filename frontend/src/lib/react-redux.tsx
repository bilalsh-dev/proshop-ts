import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";

export {
  configureStore,
  createApi,
  createSlice,
  fetchBaseQuery,
  FetchBaseQueryError,
  Provider,
  useDispatch,
  useSelector,
};
export type { PayloadAction, TypedUseSelectorHook };
