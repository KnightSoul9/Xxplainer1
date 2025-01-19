import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

const PrivacyPolicy = ({ posts }) => {
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
            <h1 className="py-3 text-2xl font-semibold lg:text-3xl">
              Privacy & Policy
            </h1>

            <hr />

            <p className="pb-6">
              At Xplainerr.com, we value your privacy and are committed to
              protecting your personal information. This privacy policy outlines
              the types of information we collect, how we use and protect it,
              and your rights regarding your personal data.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Collection of Information
            </h2>

            <p>
              We collect personal information from you when you visit our
              website, subscribe to our newsletter, fill out a form, or contact
              us through our website. The information we collect may include
              your name, email address, and other information you choose to
              provide.
            </p>
            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Use of Information
            </h2>
            <p>
              We may use your personal information for the following purposes:
            </p>
            <ul>
              <li>To provide and improve our services to you</li>
              <li>To personalize your experience on our website</li>
              <li>To send you newsletters and marketing communications</li>
              <li>To respond to your inquiries or requests</li>
            </ul>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Protection of Information
            </h2>
            <p>
              We are committed to protecting your personal information and have
              implemented appropriate technical and organizational measures to
              safeguard it. We also limit access to your personal information to
              employees and contractors who need to know it to perform their job
              duties.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Sharing of Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              However, we may share your information with trusted third-party
              service providers who assist us in operating our website or
              providing our services to you.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Your Rights
            </h2>
            <p>
              Under the General Data Protection Regulation (GDPR), you have
              certain rights regarding your personal data. These rights include:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to have your personal data corrected or erased</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              You can exercise these rights by contacting us at{" "}
              <a href="mailto:privacy@xplainerr.com">xplainerr.com@gmail.com</a>.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">Cookies</h2>
            <p>
              We use cookies on our website to improve your browsing experience.
              A cookie is a small text file that is stored on your device. You
              can control cookies through your browser settings.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Changes to Privacy Policy
            </h2>
            <p>
              We reserve the right to update this privacy policy at any time. We
              will notify you of any changes by posting the new privacy policy
              on our website.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us at{" "}
              <a href="mailto:xplainerr.com@gmail.com">xplainerr.com@gmail.com</a>.
            </p>

            <h2 className="py-3 text-2xl font-semibold lg:text-2xl">
              Conclusion
            </h2>

            <p>
              {" "}
              We take your privacy seriously and are committed to protecting
              your personal information. By using our website and services, you
              consent to the collection and use of your information as outlined
              in this privacy policy.{" "}
            </p>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default PrivacyPolicy;
