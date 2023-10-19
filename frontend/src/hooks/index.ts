import type { AppDispatch, RootState } from "store";

import type { TypedUseSelectorHook } from "@/lib/react-redux";
import { useDispatch, useSelector } from "@/lib/react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
