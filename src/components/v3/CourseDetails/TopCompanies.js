import Image from "next/image";

const TopCompanies = ({ topCompanies }) => {
  return (
    <div className="border py-5 px-0 lg:px-5">
      <h2 className="pb-5 text-center text-base font-bold text-[#1C1D1F] lg:pb-1 lg:text-start lg:text-xl">
        Learners from top companies
      </h2>
      <div className="flex flex-wrap justify-center  gap-3  lg:justify-between items-center">
        {topCompanies.map((logo, index) => (
          <div key={index}>
            <Image
              //****************  logo will be dynamic  *****************/
              src={`/images/brand/${logo}`}
              width={80}
              height={80}
              alt="logo"
              className="hidden lg:block"
            />
            <Image
              //****************  logo will be dynamic  *****************/
              src={`/images/brand/${logo}`}
              width={60}
              height={60}
              alt="logo"
              className="lg:hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
