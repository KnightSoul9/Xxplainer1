import { allCourses } from "@/src/config/constants";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer2 = ({ disableMenus = false }) => {
  const getFullYear = new Date().getFullYear();
  const router = useRouter();
  // console.log(router);
  return (
    <>
      <footer
        aria-labelledby="footer-heading"
        className=" border-t border-slate-200 bg-gray-900"
        id="footer"
      >
        {/* <h2 className="sr-only" id="footer-heading">
          Footer
        </h2> */}
        <div
          className={`mx-auto max-w-7xl  ${
            disableMenus === false
              ? `px-4  pb-8 sm:px-6 lg:px-8  ${
                  router?.pathname === "/pm-interview"
                    ? "pt-72 lg:pt-60"
                    : "pt-8 lg:pt-16"
                }`
              : ""
          }`}
        >
          {disableMenus === false && (
            <div className="xl:grid xl:grid-cols-4 xl:gap-8">
              <div className="space-y-4 xl:col-span-1">
                <div>
                  <Link
                    href="/"
                    className=" inline-block text-xl font-bold text-white"
                  >
                    Xplainerr
                  </Link>
                </div>
                <p className="text-sm text-[#A3A9B9]">
                  We provide niche up-skilling courses to help your accelerate
                  and succeed in your career
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-3 xl:mt-0">
                <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                      Practice
                    </h3>
                    {/* {footerColOne.map((item, index) => (
                    <ul key={index} className="flex flex-col gap-y-3" role="list">
                      <li>
                        <span className="font-normal text-sm">
                          <Link key={index} href={`${item.slug}`} className="transition-colors text-[#A3A9B9] hover:text-primary_bold">{item.text}</Link>
                        </span>
                      </li>
                    </ul>
                  ))} */}
                    <ul className="flex flex-col gap-y-3" role="list">
                      <li>
                        <span className="text-sm font-normal">
                          <Link
                            className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                            href="/1"
                          >
                            Get Started
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="text-sm font-normal">
                          <Link
                            className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                            href="/#"
                          >
                            Product Management
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="text-sm font-normal">
                          <Link
                            className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                            href="/#"
                          >
                            Cohorts
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span className="text-sm font-normal">
                          <Link
                            className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                            href="/pm-interview"
                          >
                            Pm Interviews
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                        Courses
                      </h3>
                      <ul className="flex flex-col gap-y-3" role="list">
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href={`/courses/${allCourses[0].slug}`}
                            >
                              {" "}
                              {allCourses[0].title}{" "}
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href={`/courses/${allCourses[1].slug}`}
                            >
                              {" "}
                              {allCourses[1].title}{" "}
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href={`/courses/${allCourses[2].slug}`}
                            >
                              {" "}
                              {allCourses[2].title}{" "}
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
                  <div>
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                        Trending Blogs
                      </h3>
                      <ul className="flex flex-col gap-y-3" role="list">
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/blog/one-year-as-a-product-manager-reflections-and-key-learnings"
                            >
                              {" "}
                              One year journey as PM{" "}
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/blogs/ten-d2c-metrics-shark-tank"
                            >
                              10 D2C metrics to track{" "}
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/blog/why-should-product-managers&designers-learn-ux-writing"
                            >
                              UX Writing for PMs
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/blog/so-you-want-to-be-product-manager"
                            >
                              So you want to be a PM?{" "}
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
                        Company
                      </h3>
                      <ul className="flex flex-col gap-y-3" role="list">
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/terms-of-service"
                            >
                              Terms of service
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/contact-us"
                            >
                              Contact Us
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/privacy-policy"
                            >
                              Privacy & policy
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/cancellation"
                            >
                              Cancellations
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="https://www.appjunction.io/"
                              target="_blank"
                            >
                              Appjunction
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-normal">
                            <Link
                              className="text-[#A3A9B9] transition-colors hover:text-primary_bold"
                              href="/sitemap"
                            >
                              Sitemap
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="mt-12 md:mt-8">
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">Legal</h3>
                      <ul className="flex flex-col gap-y-3" role="list">
                        <li><span className="font-normal text-sm"><Link className="transition-colors text-[#A3A9B9] hover:text-primary_bold" href="/legal/privacy-policy">Privacy Policy</Link></span>
                        </li>
                        <li><span className="font-normal text-sm"><Link className="transition-colors text-[#A3A9B9] hover:text-primary_bold" href="/legal/terms">Terms of Service</Link></span></li>
                      </ul>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className=" mb-12 mt-2 border-t border-gray-700 pb-1 pt-4 md:mb-0 md:pt-8">
            <p className="text-center text-base text-[#94A3B8]">
              © {getFullYear} Xplainerr, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
