import React from 'react'
import CommonHead from '../CommonHead';
import PageLayout from '@/src/layout/PageLayout';
import Link from 'next/link';

const ComingSoon = () => {
  return (
    <>
      <CommonHead
        title={"Xplainerr | Coming Soon"}
        description={"description"}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="flex h-[80vh] flex-col items-center justify-center">
          <h2 className="text-3xl font-bold lg:text-4xl 2xl:text-5xl">
            {" "}
            Coming Soon . . .{" "}
          </h2>
          <Link href={"/"}>
            <h2 className="mt-6 cursor-pointer text-xl font-bold text-blue-600">
              {" "}
              Back to Home{" "}
            </h2>
          </Link>
        </div>
      </PageLayout>
    </>
  );
}

export default ComingSoon