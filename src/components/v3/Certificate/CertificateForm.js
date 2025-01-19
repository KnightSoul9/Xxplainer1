import useAuthService from "@/src/hooks/auth/useAuthService";
import { useEffect, useState } from "react";
import ReactToPrint from "react-to-print";
import FinalCertificate from "./FinalCertificate";

const CertificateForm = ({ finalCertificate, detail }) => {
  const { currentUser } = useAuthService();
  // console.log(detail,'23 detail')

  const [genCertificate, setGenCertificate] = useState({});

  useEffect(() => {
    setGenCertificate({
      name: currentUser?.displayName,
      instructor: detail?.instructor,
      course: detail?.title,
    });
  }, [currentUser?.displayName, detail?.instructor, detail?.title]);

  return (
    <div className="my-8">
      {/* Certificate Area  */}
      {genCertificate && (
        <FinalCertificate
          finalCertificate={finalCertificate}
          genCertificate={genCertificate}
        />
      )}

      {/* Export buttons  */}
      <div className="my-5 flex flex-col items-center justify-center gap-5 lg:flex-row">
        <ReactToPrint
          trigger={() => (
            <button className="rounded-md bg-primary py-2 px-[15px] text-sm font-semibold text-white hover:bg-primary_bold">
              Export as PDF
            </button>
          )}
          content={() => finalCertificate.current}
        />
      </div>
    </div>
  );
};

export default CertificateForm;
