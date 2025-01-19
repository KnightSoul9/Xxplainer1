import PageLayout from "@/src/layout/PageLayout";
import { useRouter } from "next/router";

const ResourceTemplateIdSlug = () => {
  const router = useRouter();
  const { resourceSlug, resourceTemplateIdSlug } = router.query;

  return (
    <>
      <PageLayout>
        <div className="container mx-auto px-2 pb-16 sm:px-3 lg:max-w-6xl lg:py-[56px]">
          <h3 className="font-bold">
            resource/product-management/resource - template - id
          </h3>
          <p>
            {resourceSlug}/{resourceTemplateIdSlug}
          </p>
        </div>
      </PageLayout>
    </>
  );
};

export default ResourceTemplateIdSlug;
