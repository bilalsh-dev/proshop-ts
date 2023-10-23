import { UserInfo } from "@/types";

const USER_INFO = "userInfo";
const getUserInfo: () => UserInfo | null = () => {
  const userInfo = localStorage.getItem(USER_INFO);
  return userInfo ? JSON.parse(userInfo) : null;
};
const setUserInfo = (userInfo: UserInfo) => {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
};

const removeUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};

export { getUserInfo, removeUserInfo, setUserInfo };
