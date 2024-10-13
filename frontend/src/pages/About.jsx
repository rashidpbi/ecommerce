import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";
const About = () => {
  return (
    <div className="text-center py-8">
      <div className=" text-3xl">
        <Title text1={"ABOUT"} text2={"US"} />{" "}
      </div>
      <div className="flex flex-col sm:flex-row gap-10 text-center justify-center ">
        <img
          src={assets.about_img}
          className="mb-10 w-full md:max-w-[450px] "
          alt=""
        />
        <div className="text-base text-gray-500 flex flex-col gap-8 w-full md:max-w-[450px]">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className="text-gray-600 font-semibold">Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className=" text-3xl">
        <Title text1={"ABOUT"} text2={"US"} />{" "}
      </div>
      <div className="flex flex-col md:flex-row  ">
        <div className="border">
          <p>Quality Assurance:</p>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <hr />

        <div className="border">
          <p>Convenience:</p>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border">
          <p>Exceptional Customer Service:</p>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
        <NewsLetterBox/>
    </div>
  );
};

export default About;
