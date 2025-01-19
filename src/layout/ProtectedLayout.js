import Cookies from "js-cookie";
import { withRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer2 from "../components/v1/Shared/Footer/Footer";
import Navbar from "../components/v3/Shared/Navbar/Navbar";
import { logout } from "../store/features/auth/authSlice";

const ProtectedLayout = ({ children, router }) => {
  const dispatch = useDispatch();

  /** Protected Page Layout  */
  
  useEffect(() => {
    const user = Cookies.get("user");
    if (!user) {
      dispatch(logout());
      localStorage.removeItem("customerEmail");
      router.push("/");
    }
  }, [dispatch, router]);

  return (
    <>
      {/* <Navbar router={router}/> */}
      <Navbar router={router} />

      {children}

      {/* <Footer /> */}
      <Footer2 />
    </>
  );
};

export default withRouter(ProtectedLayout);
