import { auth } from "@/src/auth/firebase/Firebase.init";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "@/src/store/features/auth/authSlice";
import { setUserData } from "@/src/utils/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const LoginModal = ({ isVisible, setLoginModal, onClose, setQuizStarted }) => {
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const [cookie, setCookie] = useCookies(["user"]);

  const handleLogin = async () => {
    dispatch(loginStart());

    try {
      const result = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      const body = {
        uid: user?.uid,
        displayName: user.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        creationTime: user?.metadata.creationTime,
        lastSignInTime: user?.metadata.lastSignInTime,
      };
      dispatch(loginSuccess(body));
      setLoginModal(false);
      setQuizStarted(true);

      const expireDate = new Date();
      expireDate.setTime(expireDate.getDate() + 365);

      setCookie("user", JSON.stringify(body), {
        path: "/",
        maxAge: 10000000,
        sameSite: true,
        expires : expireDate
      });
      // update the firestore
      setUserData(body);
    } catch (err) {
      // Handle Errors here.
      // console.log(err);
      dispatch(loginFailed());
    }
  };

  //loading
  if (isLoading) {
    return (
      <p className="flex h-screen  items-center justify-center text-2xl font-bold">
        Loading...
      </p>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center bg-black bg-opacity-80 px-3 pt-[10%] md:items-center md:pt-5 lg:px-0">
      <div className="flex  w-[450px]  flex-col ">
        <div className="">
          <div className="shadow-[0_10px_20px_5px_rgb(0 0 0 / 5%)] flex rounded-xl bg-white">
            {/* ******************************Right Section*******************************/}
            <div className="relative flex w-full flex-col items-center justify-center px-5 pb-10 pt-12 text-center lg:w-[29.375rem] lg:px-10">
              <button
                className="py-.5  absolute right-4 top-4 mb-2 rounded-full border border-[#e6e5e5] px-2 text-lg font-semibold text-black"
                onClick={() => onClose()}
              >
                X
              </button>
              <div className="w-full">
                <div className=" mb-6 text-[1.75rem] font-extrabold text-[#171421]">
                  Log in to your account
                </div>
                <div>
                  <div>
                    <div className="mx-0 mb-8 mt-6">
                      <span>Please enter your email to receive</span>
                      <br />
                      one time password
                    </div>
                    <input
                      type="text"
                      required="required"
                      className="w-full rounded-lg border border-[#e6e5e5] px-5 py-4 text-[#171421] outline-[none]"
                      placeholder="Email"
                    />
                    <button
                      disabled="disabled"
                      className="mt-3 w-full rounded-lg bg-[#6334c8] px-0 py-4 font-semibold text-white disabled:opacity-[.2]"
                    >
                      Get OTP{" "}
                    </button>
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center py-5">
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                    <span className="mx-4 flex-shrink text-[#bdbdbd]">OR</span>
                    <div className="flex-grow border-t border-[#bdbdbd]"></div>
                  </div>
                  <button
                    onClick={() => handleLogin()}
                    className="flex w-full items-center justify-center rounded-lg border border-[#e6e5e5]  py-4 text-sm font-bold text-[#171421]"
                  >
                    <div className="flex items-center gap-1">
                      <Image
                        src="/images/brand/1.svg"
                        width={25}
                        height={25}
                        alt="google"
                      />
                      Continue with Google
                    </div>
                  </button>
                  <div className="mt-6 text-sm text-[#828282]">
                    {"Don't"} have an account?
                    <span className="cursor-pointer px-2 font-bold text-[#6334c8]">
                      Sign up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
