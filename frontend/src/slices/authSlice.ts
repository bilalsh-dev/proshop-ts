import { getUserInfo, setUserInfo } from "utils";

import type { PayloadAction } from "@/lib/react-redux";
import { createSlice } from "@/lib/react-redux";
import type { UserInfo } from "@/types";

const initialState = {
  userInfo: getUserInfo(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      setUserInfo(action.payload);
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
