const { default: Link } = require("next/link");

const BackButton = () => {
  return (
    <div className="mb-2 text-lg text-gray-600">
      <div>
        <div className="mt-3 lg:mt-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-base font-medium text-blue-600 hover:underline"
          >
            <svg
              className="mr-2 h-3 w-3 shrink-0 fill-current text-blue-400"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z" />
            </svg>
            <span>Back to the blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackButton;
