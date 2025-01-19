import IframeResizer from "iframe-resizer-react";

const TestimonialsCarousel = ({ slug }) => {
  return (
    <div className="big:px-36 large:px-96 container mx-auto mb-5 px-5 pt-12 lg:pt-20">
      {/* Section header */}
      <div className="mx-auto  max-w-3xl pb-9 text-center  pb-4">
        <h1 className="mb-4 text-2xl font-extrabold ">
          {"Not just testimonials! Find love letter from our learners ❤️"}
        </h1>
      </div>

      <section>
        {slug === "api-for-pm" ? (
          <>
            <IframeResizer
              src="https://embed.testimonial.to/w/api-for-pm?theme=light&card=base"
              style={{ width: "1px", minWidth: "100%" }}
            />
          </>
        ) : (
          <IframeResizer
            src="https://embed-v2.testimonial.to/w/pricing-for-pm?theme=light&card=medium&loadMore=on&initialCount=20&tag=all"
            style={{ width: "1px", minWidth: "100%" }}
          />
        )}
      </section>
    </div>
  );
};

export default TestimonialsCarousel;
