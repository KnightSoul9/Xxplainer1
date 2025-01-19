import Image from "next/image";

const Settings = ({ currentUser }) => {
  // console.log(currentUser);
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center gap-5 rounded-xl border border-[#C2C2C2] bg-[#FAFAFA] py-3 lg:flex-row lg:p-5">
        <div>
          {currentUser?.photoURL !== null && (
            <Image
              className="rounded-full"
              src={currentUser?.photoURL}
              width={140}
              height={140}
              alt={currentUser?.displayName}
            />
          )}
        </div>
        <div>
          <h3 className="big:text-4xl text-center text-lg font-medium leading-6 lg:text-start lg:text-xl lg:font-bold">
            {currentUser?.displayName}
          </h3>
          <p className="py-3 text-sm lg:text-base">
            Last Login : {currentUser?.lastSignInTime?.slice(0, 16)}
          </p>
          <p className=" text-sm lg:text-base">
            Joined : {currentUser?.creationTime?.slice(0, 16)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
