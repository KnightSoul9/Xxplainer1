import Image from "next/image";
import GetCertificate from "./GetCertificate";

const FinalCertificate = ({ genCertificate, finalCertificate }) => {
  return (
    <div ref={finalCertificate}>
      <GetCertificate genCertificate={genCertificate} />
    </div>
  );
};

export default FinalCertificate;
