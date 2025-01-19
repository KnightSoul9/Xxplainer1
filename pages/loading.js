import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

const Loading = () => {
  return (
    <>
      <CommonHead
        title={"Xplainerr | Loading"}
        description={"Loading"}
        favIcon={"/favicon.ico"}
      />
      <PageLayout>
        <div className="flex h-screen items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
        </div>
      </PageLayout>
    </>
  );
};

export default Loading;
