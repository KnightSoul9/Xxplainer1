import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

const ContactUs = ({ posts }) => {
  return (
    <>
      <CommonHead
        title={
          "Upskilling & Interview prep courses on product managment, engineering, design & more - Xplainerr"
        }
        description={
          "Upskill and prepare for your interviews by learning all the concepts which are highly useful in your daily professional job. "
        }
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <div className="container mx-auto px-6 pt-12 pb-6 lg:px-16">
            <h2 className="py-3 text-xl font-semibold lg:text-3xl">
              Contact Us
            </h2>
            <p>Feel free to reach out if you have any queries</p>
            <br />
            <p>
              <b>Email</b> : xplainerr.com@gmail.com
            </p>
            <p>
              <b>Linkedin</b> :
              <a
                className="text-blue-600"
                href="https://www.linkedin.com/company/xplainerr-1"
                target={"_blank"}
                rel="noreferrer"
              >
                https://www.linkedin.com/company/xplainerr-1
              </a>
            </p>
            <p> <span className="font-bold"> Address : </span> 279, BTM 1st Stage, Bangalore - 560068,
            Karnataka, India </p>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default ContactUs;
