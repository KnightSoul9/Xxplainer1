import Image from "next/image";
import Link from "next/link";
import { PopupContainer } from ".";

const CouponModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <PopupContainer>
      <div className="relative rounded-md bg-white  px-6 py-12 2xl:p-12 ">
        <button
          className="py-.5 absolute right-4 top-4 mb-2 rounded-full border border-[#e6e5e5] bg-white px-2 text-lg font-semibold text-black"
          onClick={() => onClose()}
        >
          X
        </button>
        <div>
          <div className="text-center">
            <h3 className="my-1 inline-block animate-pulse whitespace-nowrap bg-gradient-to-l from-[#4f46e5] to-pink-500 bg-clip-text text-lg font-bold text-transparent lg:text-2xl">
              CONGRATULATIONS
            </h3>
            <p className="text-md mt-4 font-medium">Your Coupon code is </p>
            <div className="my-2 rounded-lg border-2 border-dashed border-[#845cc7] py-4">
              {/* <p className="py-1 font-medium text-lg">Your</p>
                <h3 className="bg-gradient-to-l from-[#f38c8f] to-[#b086ff] bg-clip-text text-transparent text-6xl font-semibold">{`50%`}</h3>
                <h4 className="text-[#a273ff] text-2xl font-bold">Discount</h4> */}
              <p className="text-lg font-medium">XPLAINERR-50</p>
            </div>
            <h3 className="text-5xl font-bold">
              $10{" "}
              <small className="text-2xl">
                <del> $20</del>
              </small>
            </h3>
          </div>
        </div>
        <div>
          <Link href="/courses?coupon=NY2023" onClick={() => onClose()}>
            <button className="mt-8 w-full rounded-lg bg-gradient-to-r from-[#0070F4] to-[#8253db] px-8 py-2 text-lg  font-semibold uppercase text-white">
              buy now
            </button>
          </Link>
        </div>
      </div>
    </PopupContainer>
  );
};

export default CouponModal;
