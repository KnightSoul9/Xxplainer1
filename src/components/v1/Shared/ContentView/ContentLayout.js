import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../Blog/MDXComponents";

const ContentLayout = ({ content }) => {
  return (
    <>
      <MDXRemote {...content} components={{ ...MDXComponents }} />
    </>
  );
};

export default ContentLayout;
