import Image from "next/image";
import Button from "./Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  function getCurrentYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear;
  }
  return (
    <div className=" lg:h-96 sm:h-max w-full bg-bgdarkmode flex lg:flex-row sm:flex-col">
      <div className="lg:h-full sm:h-72 sm:w-full lg:w-96 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d255283.87772852345!2d36.837785600000004!3d-1.2877823999999958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1683099935722!5m2!1sen!2ske"
          className=" w-full h-full"
          loading="lazy"
        />
      </div>
      <div className=" w-full  lg:h-full sm:h-max bg-card1color text-white relative overflow-hidden items-center flex lg:flex-row sm:flex-col justify-center">
        <div className=" lg:w-72 sm:w-full bg-bgdarkmode  z-10 gap-7 p-2 sm:relative lg:absolute left-0 h-full flex flex-col items-center justify-center ">
          <p className=" text-center tracking-wide">
            "When the hunter learns to shoot without missing, doesn't that call
            for the eagle to learn how to fly without pearching then? While the
            world progresses and calls for a new way of doing things thus we are
            called forward to learn how to live the new ways."
          </p>
          <div className=" flex flex-col items-center">
            <Image
              src="/images/founder.jpg"
              alt="founder image"
              width={80}
              height={80}
              className=" h-20 w-20 object-cover rounded-full"
            />
            <h2 className=" text-lg font-bold tracking-wider text-secondaryColor">
              Micheal Dean
            </h2>
            <p>founder & CEO</p>
          </div>
        </div>
        <form className=" w-full  lg:absolute sm:relative flex flex-col items-center justify-center z-10 gap-3  lg:left-72 sm:left-0 h-28 top-0">
          <h2 className=" text-xl  lg:-ml-64 sm:ml-0">
            Subscribe to our weekly newsletter
          </h2>
          <input
            placeholder="Your Email"
            className=" lg:w-1/2 sm:w-3/4 lg:-ml-64 sm:ml-0 bg-brandShade lg:p-2 sm:p-3 rounded-xl"
          />
        </form>
        <div className=" w-96 flex lg:flex-col sm:flex-row sm:gap-5 sm:justify-center lg:justify-normal items-center  text-primary  lg:absolute sm:relative sm:left-0 lg:left-72 h-24 lg:top-28 sm:-top-2 z-10">
          <div>
            <h2 className=" text-lg font-bold">Working hours</h2>
            <p className=" text-sm font-bold">monday - Saturday</p>
            <p className=" text-xs font-extrabold">9:00am - 5:00pm</p>
          </div>
          <div className=" font-bold border  bg-primary text-white flex items-center px-6 rounded-xl text-center">
            Open now
          </div>
        </div>
        <div className=" lg:w-96 sm:w-full flex justify-center items-center   lg:absolute sm:relative right-0 h-28 lg:top-28 sm:top-12 z-10">
          <div className="flex gap-4 mt-7 border-b w-max px-4 pb-2 ">
            <FacebookIcon className=" text-4xl" />
            <TwitterIcon className=" text-4xl" />
            <EmailIcon className=" text-4xl" />
            <LinkedInIcon className=" text-4xl" />
            <InstagramIcon className=" text-4xl" />
            <WhatsAppIcon className=" text-4xl" />
          </div>
        </div>
        <div className=" w-full   lg:absolute sm:relative lg:left-72  h-12 lg:bottom-20 sm:bottom-28 z-10">
          <div className=" lg:-ml-64 sm:ml-0 flex flex-col items-center">
            <h1 className=" font-corm text-2xl">
              Maximize Your Online Potential
            </h1>
            <p>www.nirvanadigitalagency.co.ke</p>
          </div>
        </div>
        <div className=" w-full lg:flex sm:grid lg:gap-3 sm:grid-cols-2 sm:gap-2 lg:flex-row sm:flex-col lg:-ml-80 pt-5  lg:justify-end sm:justify-start   lg:absolute sm:relative lg:left-72 lg:h-12 sm:h-max sm:p-6 bottom-0 z-10">
          <div>Terms and Condition</div>
          <div>Cookies</div>
          <div>FAQs</div>
          <div>@copyright nirvana agency | {getCurrentYear()}</div>
        </div>
        <div className=" w-96 h-full absolute bg-card1shade rotate-45 z-0" />
      </div>
    </div>
  );
}
