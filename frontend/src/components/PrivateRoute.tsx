import { useAppSelector } from "@/hooks";
import { Navigate, Outlet } from "@/lib/react-router-dom";

const PrivateRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
