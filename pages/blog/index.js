import { getDatabase } from "@/src/lib/notion";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
import BlogListView from "@/src/components/v1/Blog/BlogListView";

export const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
      <CommonHead
        title={"Xplainerr - Blog"}
        description={
          "Read free articles on tech, design, marketing, product management, and more at xplainerr blog"
        }
        ogTitle={"Xplainerr - Blog"}
        ogImage={"https://ik.imagekit.io/zwxa4kttt/home/xplainerr-home.jpg"}
        ogUrl={"https://xplainerr.com/blog"}
      />
      <main>
        <PageLayout>
          <div className="container  mx-auto max-w-3xl  px-4 py-12">
            <div className="flex min-h-screen flex-col overflow-hidden">
              <div className="grow">
                <BlogListView posts={posts} disableHeader={true} />
              </div>
            </div>
          </div>
        </PageLayout>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const posts = await getDatabase('blog');

  return {
    props: {
      posts,
    },
  };
};
