import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto max-w-7xl px-4 pb-12 md:px-16 lg:pb-24 lg:pt-16">
      <div className="flex flex-col-reverse justify-between gap-8 lg:flex-row lg:space-x-12">
        <div className="lg:basis-5/12">
          <h2 className="pb-5 text-4xl font-semibold ">About the course</h2>

          <p className="text-[17px] text-[#041c33]">
            Whether you&lsquo;re an accomplished Product Manager excelling at
            your craft in companies like Google, Meta, Uber, Airbnb, or Amazon,{" "}
            <strong>cracking a PM interview demands serious practice. </strong>{" "}
            I&lsquo;m sure you&lsquo;ll agree with this fact. <br />
            <br />
            For aspiring Product Managers or those aiming to land a position in
            their dream company, there&lsquo;s{" "}
            <strong>no substitute for rigorous preparation.</strong> Even
            geniuses like <strong>Messi, Ronaldo, and Virat Kohli</strong>{" "}
            dedicate endless hours to practice and hone their craft.
            <br />
            <br />
            This course comprises around ‍<strong> 50 questions </strong>{" "}
            covering the most commonly asked categories, such as product{" "}
            <strong>
              design, improvement, metrics, execution, behavioral, and RCA.
            </strong>
            <br />
            <br />
            The ideal way to master the art of interviews is to{" "}
            <strong>
              {" "}
              first solve each question on your own in 30-45 minutes
            </strong>{" "}
            and then refer to the video or transcript.
            <br />
            <br /> With this course, you can{" "}
            <strong>take luck out of the equation</strong> for getting your
            dream PM job!
          </p>
        </div>
        <div className="lg:basis-6/12">
          <Image
            src="/images/mock/about.png"
            width={600}
            height={600}
            alt="image"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
