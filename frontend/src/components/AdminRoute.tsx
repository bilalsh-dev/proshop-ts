import { useAppSelector } from "hooks";

import { Navigate, Outlet } from "@/lib/react-router-dom";

const AdminRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default AdminRoute;
