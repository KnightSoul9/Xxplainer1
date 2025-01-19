import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

const TermsOfService = ({ posts }) => {
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
          <div className="container mx-auto px-6 pt-6 pb-6 lg:px-16">
            <h1 className="py-3 text-2xl font-semibold lg:text-3xl">
              Terms of Service
            </h1>

            <hr />

            <p className="pb-6">
            Please read these terms of service {'Terms'} carefully before using <a href="https://xplainerr.com/">https://xplainerr.com/</a>  ({"Site"}) operated by Xplainerr ({'us'}, {'we'}, or {'our'}).

            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Acceptable Use Policy
            </h2>

            <p>
              By accessing or using the Site, you agree to abide by our
              Acceptable Use Policy. This policy outlines what is considered
              acceptable behavior on the website and any prohibited activities.
              You may not use the Site for any illegal or unauthorized purpose,
              and you agree to comply with all applicable laws and regulations.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Intellectual Property Policy
            </h2>

            <p>
              The Site and its contents, including but not limited to text,
              graphics, images, logos, and software, are the property of
              Xplainerr and are protected by copyright, trademark, and other
              intellectual property laws. You may not modify, copy, distribute,
              transmit, display, perform, reproduce, publish, license, create
              derivative works from, transfer, or sell any information or
              content obtained from the Site without our express written
              permission.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Privacy Policy
            </h2>

            <p>Please visit privacy & policy page for more details</p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Payment Terms
            </h2>

            <p>
              If you purchase any products or services through the Site, you
              agree to our Payment Terms. These terms explain how payments are
              processed and any applicable fees or charges. By making a purchase
              on the Site, you agree to pay all fees and charges associated with
              your purchase.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Disclaimer of Liability
            </h2>
            <p>
              The Site is provided on an {"as"} {"is"} and {"as available"} basis.
              Xplainerr makes no warranties, express or implied, regarding the
              Site or its contents, including but not limited to the accuracy,
              completeness, or reliability of the information or content
              provided. You agree to use the Site at your own risk and Xplainerr
              shall not be liable for any damages, including but not limited to
              direct, indirect, incidental, consequential, or punitive damages,
              arising out of or in connection with the use or inability to use
              the Site or its contents.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Termination Clause
            </h2>
            <p>
              We reserve the right to terminate your access to the Site at any
              time, with or without cause, without notice or liability to you.
              If we terminate your access, you must immediately cease using the
              Site.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              User Content Policy
            </h2>
            <p>
              By submitting any content to the Site, including but not limited
              to comments, reviews, or other user-generated content, you grant
              Xplainerr a non-exclusive, royalty-free, perpetual, and
              irrevocable right to use, reproduce, modify, adapt, publish,
              translate, create derivative works from, distribute, and display
              such content throughout the world in any media. You represent and
              warrant that you have all necessary rights to grant this license
              and that your content does not infringe on the rights of any third
              party.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Changes to Terms
            </h2>
            <p>
              
              We reserve the right to modify or revise these Terms at any time
              without notice. By continuing to use the Site after such
              modifications or revisions, you agree to be bound by the modified
              or revised Terms. We may notify you of any material changes to
              these Terms by posting a notice on the Site or sending you an
              email or other communication.
            </p>

            <h2 className="py-3 text-xl font-semibold lg:text-2xl">
              Conclusion
            </h2>
            <p>
              If you do not agree to these Terms, you should not use the Site.
              We reserve the right to modify or discontinue the Site or any part
              thereof at any time without notice. Xplainerr shall not be liable
              to you or any third party for any modification, suspension, or
              discontinuance of the Site.
              <br />
              <br />
              Thank you for using
              <a className="text-blue-500" href="https://xplainerr.com">
                
                xplainerr.com
              </a>
            </p>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default TermsOfService;
