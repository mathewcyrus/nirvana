import WebsiteProject from "@components/components/WebsiteProject";
import { seoProjects, websites } from "@components/data";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { useState, useReducer } from "react";
import Testimonial from "@components/components/Testimonial";
import Button from "@components/components/Button";
import CommentIcon from "@mui/icons-material/Comment";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectType, setProjectType] = useState("web");
  const [activeProject, setActiveProject] = useState(0);
  // const [inputInfo, setInputinfo] = useReducer(
  //   (prev, next) => {
  //     const newInputinfo = { ...prev, ...next };
  //     return newInputinfo;
  //   },
  //   {
  //     testimonial: {
  //       email: "",
  //       message: "",
  //     },
  //     enquiry: {
  //       firstname: "",
  //       lastname: "",
  //       email: "",
  //       message: "",
  //     },
  //     subscription: {
  //       email: "",
  //     },
  //   }
  // );
  const handleNext = () => {
    setActiveProject((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= websites.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setActiveProject((prevIndex) => {
      const nextIndex = prevIndex - 1;
      if (nextIndex < 0) {
        return websites.length - 1;
      }
      return nextIndex;
    });
  };
  const sendTestimonial = () => {
    console.log("hello");
  };

  return (
    <main>
      <section className=" flex flex-col sm:px-4 relative items-center  lg:px-20 bg-bgdarkmode ">
        <section
          className=" w-full  bg-center bg-contain  relative h-screen bg-no-repeat sm:max-h-screen lg:max-h-mh flex justify-center items-center "
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2FMy%20project.png?alt=media&token=61215f63-1f60-4098-943e-9acd775a49b3)",
          }}>
          <div className="  lg:h-1/2 sm:h-3/4 sm:w-full lg:w-1/2 flex flex-col items-center lg:gap-6 sm:gap-12 justify-center text-white">
            <h1 className=" font-corm sm:text-xl  lg:text-4xl tracking-wider bg-gradient-to-l bg-clip-text ">
              Maximize Your Online Precense
            </h1>
            <h3 className=" text-2xl tracking-wide font-corm  ">
              Trust Our Strategies
            </h3>
            <Button text="Get in Touch" />
          </div>
          <div className=" ">
            <div className=" absolute right-0 bottom-9  bg-secondaryColor p-1 text-white w-16 h-16 rounded-full flex items-center justify-center border ">
              <CommentIcon />
            </div>
          </div>
        </section>
        <section className=" w-full relative flex sm:mb-36 lg:mb-0  lg:flex-row sm:flex-col max-h-mh sm:mt-0 lg:mt-0  text-white  items-center gap-12  ">
          <div className=" sm:order-2 lg:order-1 sm:w-full sm:h-80 lg:flex-1  sm:overflow-visible w-1/2  flex items-center justify-center gap-6 flex-col overflow-hidden  h-screen relative ">
            <div className="flex items-center justify-center gap-6 flex-col ">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Falexander-shatov-mr4JG4SYOF8-unsplash-removebg.png?alt=media&token=e8b35f05-1732-42cd-a2a1-02923da19de5"
                width={500}
                height={450}
                loading="lazy"
                alt="hit the skies"
                className=" sm:w-48 lg:w-96 lg:h-96 lg:relative sm:h-48 object-cover sm:absolute sm:-top-60 lg:top-0 sm:right-4 sm:overflow-visible"
              />
              <div className="flex items-center gap-5 z-10 sm:mt-0 lg:-mt-5">
                <div className=" lg:w-64 sm:w-56 text-xl bg-white text-primary font-bold tracking-wider border-none text-center border p-2 rounded-3xl">
                  Contact us
                </div>
                <div className=" w-10 h-10 p-2 rounded-full border border-secondaryColor flex items-center justify-center">
                  <ExpandMoreIcon className=" text-4xl" />
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:flex lg:order-2 lg:flex md:flex flex flex-1  flex-col gap-6">
            <h1 className="   border-b text-secondaryColor tracking-normal font-corm font-medium text-3xl w-3/4 pb-4">
              We focus on helping brands build and market their products and
              services online
            </h1>
            <p className=" sm:text-sm  lg:text-base tracking-wide">
              Here at Nirvana, we take a comprehensive approach to help your
              brand succeed online. We begin by understanding your unique
              business goals and audience, and then develop a tailored strategy
              to maximize your online presence. Our team of experts specialize
              in SEO, social media, content marketing, and PPC advertising to
              ensure that your brand reaches and engages with the right
              audience. We believe that building a strong online presence is
              essential for businesses to succeed in today's digital world, and
              we're here to help you every step of the way.
            </p>
            <div className=" sm:h-56 sm:flex-col sm:w-max rounded-3xl border lg:h-12 lg:flex-row lg:w-1/2 p-2 lg:mt-6 sm:mt-4 border-secondaryColor flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                <FacebookIcon /> <span className=" text-xs">10M+</span>
              </div>
              <div className="flex items-center gap-1">
                <InstagramIcon />
                <span className=" text-xs">30M+</span>
              </div>
              <div className="flex items-center gap-1">
                <TwitterIcon /> <span className=" text-xs">55M+</span>
              </div>
            </div>
          </div>
        </section>
        <section className=" w-full min-h-max lg:mt-8 sm:mt-0 flex flex-col items-center text-white">
          <h1 className=" font-corm text-3xl tracking-wider mb-3 text-secondaryColor">
            Our Core Services
          </h1>
          <div className=" w-full h-full lg:grid lg:grid-cols-4 sm:w-full sm:gap-65 lg:gap-0  sm:grid-cols-4 sm:grid lg:overflow-hidden sm:overflow-scroll ">
            <div className=" lg:h-96 sm:h-80 relative lg:w-full sm:w-60 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Faustin-distel-tLZhFRLj6nY-unsplash.jpg?alt=media&token=89107944-1223-405a-bdc9-857470e88b8a"
                height={500}
                loading="lazy"
                width={500}
                className=" object-cover h-full"
                alt="social media marketing"
              />
              <div className=" absolute z-10 text-white flex flex-col gap-6 px-2 justify-center  top-0 w-full bg-card2color  h-full">
                <h2 className="text-2xl"> SOCIAL MEDIA MANAGEMENT</h2>
                <p className=" lg:text-lg sm:text-lg ">
                  Worry less about your online engagements and posts. We will
                  handle you campaigns so you can focus on the product.
                </p>
                <div className=" flex gap-2 hover:gap-3 items-center text-white ">
                  <p className=" lg:text-xl sm:text-xl">Learn more</p>
                  <ArrowForwardIosOutlinedIcon className="lg:text-xl sm:text-3xl" />
                </div>
              </div>
              <div className=" absolute w-full h-full bg-card2shade  top-24 rotate-45 translate-x-20 " />
            </div>
            <div className="lg:h-96 sm:h-80 relative lg:w-full sm:w-60 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Faustin-distel-wD1LRb9OeEo-unsplash.jpg?alt=media&token=1917c2a8-1a05-4179-a502-5eb8a931a548"
                height={500}
                width={500}
                loading="lazy"
                className=" object-cover h-full"
                alt="social media marketing"
              />
              <div className=" absolute z-10 text-white flex flex-col gap-6 px-2 justify-center  top-0 w-full bg-card1color  h-full">
                <h2 className="text-2xl">DIGITAL MARKETING</h2>
                <p className=" lg:text-lg sm:text-lg">
                  Worry less about your online engagements and posts. We will
                  handle you campaigns so you can focus on the product.
                </p>
                <div className=" flex gap-2 items-center text-white ">
                  <p className=" lg:text-xl sm:text-xl">Learn more</p>
                  <ArrowForwardIosOutlinedIcon className="lg:text-xl sm:text-3xl" />
                </div>
              </div>
              <div className=" absolute w-full h-full bg-card1shade  top-24 rotate-45 translate-x-20 " />
            </div>
            <div className="lg:h-96 sm:h-80 relative lg:w-full sm:w-60 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fcampaign-creators-gMsnXqILjp4-unsplash.jpg?alt=media&token=7b7b6ac7-2163-434b-9336-f98822740665"
                height={500}
                width={500}
                loading="lazy"
                className=" object-cover h-full"
                alt="social media marketing"
              />
              <div className=" absolute z-10 text-white flex flex-col gap-6 px-2 justify-center  top-0 w-full bg-card3color  h-full">
                <h2 className="text-2xl"> SEARCH ENGINE OPTIMIZATION</h2>
                <p className=" lg:text-lg sm:text-lg">
                  Worry less about your online engagements and posts. We will
                  handle you campaigns so you can focus on the product.
                </p>
                <div className=" flex gap-2 items-center text-white ">
                  <p className=" lg:text-xl sm:text-xl">Learn more</p>
                  <ArrowForwardIosOutlinedIcon className="lg:text-xl sm:text-3xl" />
                </div>
              </div>
              <div className=" absolute w-full h-full bg-card3shade  top-24 rotate-45 translate-x-20 " />
            </div>
            <div className=" lg:h-96 sm:h-80 relative lg:w-full sm:w-60 overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fsean-pollock-PhYq704ffdA-unsplash.jpg?alt=media&token=7a506b07-b154-49b9-9de2-3a5dcbc4f4c1"
                width={500}
                height={500}
                loading="lazy"
                className=" object-cover h-full"
                alt="social media marketing"
              />
              <div className=" absolute z-10 text-white flex flex-col gap-6 px-2 justify-center  top-0 w-full bg-card4color  h-full">
                <h2 className="text-2xl"> WEB DEVELOPMENT</h2>
                <p className=" text-lg">
                  Worry less about your online engagements and posts. We will
                  handle you campaigns so you can focus on the product.
                </p>
                <div className=" flex gap-2 items-center text-white ">
                  <p className=" lg:text-xl sm:text-xl">Learn more</p>
                  <ArrowForwardIosOutlinedIcon className=" lg:text-xl sm:text-3xl" />
                </div>
              </div>
              <div className=" absolute w-full h-full bg-card4shade  top-24 rotate-45 translate-x-20 " />
            </div>
          </div>
          <div className=" w-full text-right py-1 ">
            Learn more about our services
          </div>
        </section>
        <section className=" min-h-max pb-20 w-full z-20 flex text-white flex-col  pt-2 items-center gap-4">
          <h1 className=" font-corm text-3xl tracking-wider text-secondaryColor">
            Our Work
          </h1>
          <p className=" lg:w-2/3 sm:w-full sm:text-base text-center">
            Below is a selection of our best work over the years ranging from
            website develeopment to how we helped companies rank higher in
            search engines
          </p>
          <div className=" flex w-full flex-wrap  sm:gap-6 lg:gap-0  ">
            <div className="flex-auto sm:flex lg:flex-col sm:w-full  md:w-1/4 lg:w-1/4 h-11">
              <ul className=" text-sm lg:flex sm:h-16 lg:flex-col gap-2 pr-4 sm:flex md:flex-col md:overflow-visible sm:w-full sm:overflow-scroll lg:overflow-visible ">
                <li
                  className={`cursor-pointer lg:w-full sm:w-48 ${
                    activeIndex === 0
                      ? "text-base font-bold h-10 text-primary bg-secondaryColor"
                      : " "
                  } py-1 px-2 h-10 flex items-center hover:bg-secondaryColor hover:text-primary hover:text-base hover:font-bold`}
                  onClick={() => {
                    setActiveIndex(0);
                    setProjectType("web");
                    setActiveProject(0);
                  }}>
                  Web Development
                </li>
                <li
                  className={`cursor-pointer  lg:w-full sm:w-48 ${
                    activeIndex === 1
                      ? "text-base font-bold h-10 text-primary bg-secondaryColor"
                      : " "
                  } py-1 px-2 h-10 flex items-center hover:bg-secondaryColor hover:text-primary hover:text-base hover:font-bold`}
                  onClick={() => {
                    setActiveIndex(1);
                    setProjectType("seo");
                    setActiveProject(0);
                  }}>
                  SEO
                </li>
              </ul>
            </div>
            <div className="flex-auto sm:w-full md:w-1/4 lg:w-1/4 text-base ">
              <h1 className=" tracking-wider py-1  text-primary font-bold bg-secondaryColor text-base text-center ">
                Our Approach
              </h1>
              <div className=" ml-2 w-full h-max text-base  ">
                {projectType === "web" &&
                  "creating and maintaining high-quality websites that are user-friendly and optimized for search engines."}
                {projectType === "seo" &&
                  "helping clients optimize their website to rank higher in search engine results pages (SERPs) for relevant keywords."}
              </div>
            </div>
            <div className="flex-auto relative  sm:w-full md:w-full lg:w-1/2 flex items-center justify-center  ">
              {projectType === "web" &&
                websites.map((website, i) => {
                  const isVisible = i === activeProject;
                  return (
                    <div
                      key={i}
                      className={`${
                        !isVisible ? "hidden" : "block"
                      } sm:-mt-8 lg:mt-0`}>
                      <WebsiteProject website={website} />
                    </div>
                  );
                })}
              {projectType === "seo" &&
                seoProjects.map((website, i) => {
                  const isVisible = i === activeProject;
                  return (
                    <div
                      key={i}
                      className={`${
                        !isVisible ? "hidden" : "block"
                      } sm:-mt-8 lg:mt-0`}>
                      <WebsiteProject website={website} />
                    </div>
                  );
                })}

              <div className="absolute lg:top-80 sm:-top-8 sm:px-4 sm:bottom-0 sm:justify-between md:flex md:justify-between md:px-12 md:gap-4  z-20 w-full flex lg:justify-center items-center lg:gap-16">
                <div className=" w-12 h-12  lg:bg-transparent  sm:bg-secondaryColor flex items-center justify-center rounded-full">
                  <ArrowBackIosNewOutlinedIcon
                    className=" sm:text-2xl md:text-6xl lg:text-2xl w-max hover:cursor-pointer  sm:hover:text-white lg:hover:text-secondaryColor hover:font-extrabold"
                    onClick={handlePrev}
                  />
                </div>
                <span className=" sm:hidden lg:block">
                  {activeProject + 1 + "/" + websites.length}
                </span>
                <div className=" w-12 h-12  lg:bg-transparent  sm:bg-secondaryColor flex items-center justify-center rounded-full">
                  <ArrowForwardIosOutlinedIcon
                    className=" sm:text-2xl md:text-6xl lg:text-2xl   w-max hover:cursor-pointer sm:hover:text-white lg:hover:text-secondaryColor hover:font-extrabold"
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" sm:-mt-20 lg:mt-4 w-full min-h-max lg:flex  flex-col sm:flex sm:gap-4 lg:gap-2">
          <h1 className=" font-corm text-3xl text-center text-secondaryColor">
            Hear From Our Clients Around The Globe.
          </h1>
          <div className=" w-full lg:flex sm:flex sm:flex-col lg:flex-row gap-8">
            <div className=" sm:w-full lg:w-2/3  grid sm:grid-flow-col  lg:grid-cols-2 lg:grid-flow-row gap-2 sm:overflow-scroll lg:overflow-visible">
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
            </div>
            <div className=" lg:w-1/3 sm:w-full flex flex-col justify-center items-center">
              <h2 className=" text-base  text-white italic">
                Let us hear from you 🖐
              </h2>
              <form className=" flex w-full flex-col items-center gap-2">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className=" w-full text-sm p-2 bg-transparent text-white  border-b-secondaryColor border-0 border-b hover:border hover:border-secondaryColor rounded-xl focus:outline-0 focus:border focus:border-secondaryColor"
                />
                <input
                  placeholder="enter you message"
                  required
                  type="text"
                  className=" w-full  p-2 h-20 text-sm bg-transparent text-white  border-b-secondaryColor border-0 border-b hover:border hover:border-secondaryColor rounded-xl focus:outline-0 focus:border focus:border-secondaryColor"
                />
                <Button text="send message" onClick={sendTestimonial} />
              </form>
            </div>
          </div>
        </section>
        <section className=" lg:flex sm:flex sm:flex-col lg:flex-row w-full  lg:h-100 sm:h-full sm:mb-4 gap-8 mt-12">
          <form className=" flex-1 sm:w-full flex flex-col items-start gap-4 text-white">
            <h2 className=" w-72 text-2xl tracking-wider">
              For business enquiries or proposals, please use this form.
            </h2>
            <div className=" flex gap-3 lg:w-full sm:w-full ">
              <input
                placeholder="firstName"
                className=" bg-brandShade sm:w-1/2 focus:outline-0 focus:border-0 text-sm p-3 flex-1"
              />
              <input
                placeholder="lastName "
                className=" flex-1 text-sm sm:w-1/2 focus:outline-0 focus:border-0 bg-brandShade p-3"
              />
            </div>
            <input
              placeholder="Email"
              className=" w-full text-sm focus:outline-0 focus:border-0 bg-brandShade p-3"
            />
            <input
              placeholder="Enter your Message"
              className=" w-full bg-brandShade text-sm focus:outline-0 focus:border-0 h-20 p-3 mb-3"
            />
            <Button text="Send Enquiry" />
          </form>
          <div className=" flex-1 h-100 flex justify-center items-center">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fcampaign-creators-gMsnXqILjp4-unsplash.jpg?alt=media&token=7b7b6ac7-2163-434b-9336-f98822740665"
              alt="map"
              width={450}
              height={400}
              loading="lazy"
              className=" h-2/3 object-cover"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
