import Image from "next/image";

const ShareWhatsAppModal = ({ showModal, handleShareWhatsApp }) => {
  if (showModal) {
    return (
      <div className="  fixed inset-0  z-[9999] flex items-center justify-center bg-black bg-opacity-10 px-3 pt-[8%] md:pt-0">
        <div className="flex w-[99%]  flex-col md:w-[50%] lg:w-[400px] ">
          <div className="shadow-t-2 relative rounded-md border-t  bg-[#fff] shadow  ">
            <div className="">
              <div className=" z-50 mx-auto px-7 py-[30px] text-center">
                <button onClick={handleShareWhatsApp}>
                  <div className="mb-2 flex items-center justify-center">
                    <Image
                      src="/svg/whatsapp-share-button-icon.svg"
                      width={150}
                      height={80}
                      alt="whatsapp icon"
                      className="h-[120px] w-[180px]"
                    />
                  </div>
                </button>
                <p className="px-4 text-sm  md:text-base">
                  Unlock detailed report card by sharing the quiz on WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ShareWhatsAppModal;
