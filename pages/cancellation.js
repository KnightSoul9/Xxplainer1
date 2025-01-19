import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

const Cancellation = ({ posts }) => {
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
            Cancellation Policy
            </h2>
            <hr/>
	<p className="pt-4">At Xplainerr.com, we strive to provide the best experience for our customers. However, please note that we do not offer any cancellations for our services.</p>
	<br/>
    <p>Once you have subscribed to our services, you will have access to them for the entire duration of your subscription. We are unable to issue any refunds or cancel your subscription before its expiration date.</p>
	<br/>
    <p>We apologize for any inconvenience this may cause. If you have any questions or concerns, please contact our support team at <a href="mailto:xplainerr.com@gmail.com">xplainerr.com@gmail.com</a>.</p>
	<br/>
    <p>Thank you for your understanding.</p>
	<br/>
    <p>Team Xplainerr.com </p>
          </div>
        </PageLayout>
      </main>
    </>
  );
};

export default Cancellation;
