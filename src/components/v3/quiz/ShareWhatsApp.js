// pages\quiz\[domainSlug]\[quizSlug]\view-report.js

import Image from "next/image";
import React from "react";

const ShareWhatsApp = ({ handleShareWhatsApp }) => {
  return (
    <div className="">
      <div className="fixed bottom-12 left-0 right-0 z-50 mx-auto mb-4 text-center">
        <button onClick={handleShareWhatsApp}>
          <div className="mb-2 flex items-center justify-center">
            <Image
              src="/svg/whatsapp-share-button-icon.svg"
              width={120}
              height={80}
              alt="whatsapp icon"
            />
          </div>
        </button>
        <p className="px-4 text-sm  md:text-base">
          Unlock detailed report card by Sharing the Quiz on WhatsApp
        </p>
      </div>
    </div>
  );
};

export default ShareWhatsApp;
