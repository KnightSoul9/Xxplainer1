import { callLeadAPI } from "@/src/api";
import { auth } from "@/src/auth/firebase/Firebase.init";
import { APP_CONSTANT } from "@/src/config/constants";
import { GlobalContext } from "@/src/context/GlobalContext";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "@/src/store/features/auth/authSlice";
import { setUserData } from "@/src/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const [cookie, setCookie] = useCookies(["user"]);
  const router = useRouter();
  const { PAYMENT_MODAL } = useContext(GlobalContext);

  const redirectPath = router?.query?.redirect;
  console.log(router, "checkout");

  const handleGoogleLogin = async () => {
    try {
      dispatch(loginStart());
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      const body = {
        uid: user?.uid,
        displayName: user.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        creationTime: user?.metadata.creationTime,
        lastSignInTime: user?.metadata.lastSignInTime,
        emailVerified: true,
      };

      dispatch(loginSuccess(body));
      localStorage.setItem("customerEmail", user?.email);

      const payload = {
        email: user?.email,
        interest_section: "",
        url: router?.asPath,
        trigger_source: "",
        device: "WEB",
      };

      console.log(payload);
      await callLeadAPI(payload);

      // Checking if redirectPath contains '/quiz'
      if (redirectPath && redirectPath.includes("/quiz")) {
        router.push(redirectPath);
      } else if (
        redirectPath === "api-for-pm" ||
        redirectPath === "pricing-for-pm" ||
        redirectPath === "ux-writing"
      ) {
        PAYMENT_MODAL.handleCoursePayment(APP_CONSTANT.PAYMENT_MODE.STRIPE);
      } else if (router?.pathname == "/u/checkout") {
        router.push(router?.asPath);
      }
      else {
        router.push("/dashboard");
      }

      const expireDate = new Date();
      expireDate.setTime(expireDate.getDate() + 365);

      setCookie("user", JSON.stringify(body), {
        path: "/",
        maxAge: 10000000,
        sameSite: true,
        expires: expireDate,
      });
      setUserData(body);
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user") {
        toast.error("Login cancelled !");
        dispatch(loginFailed());
      } else {
        // console.log(err);
        dispatch(loginFailed());
      }
    }
  };

  return (
    <button className='socialBtn' onClick={() => handleGoogleLogin()}>
      <Image
        src='/images/social/google.svg'
        alt='Google Logo'
        className='mr-2 '
        width={20}
        height={20}
      />
      <span>Log in with Google</span>
    </button>
  );
};

export default GoogleLogin;
