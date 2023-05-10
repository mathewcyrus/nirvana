import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
interface typeInt {
  type?: string;
}

export default function Blog({ type }: typeInt) {
  return (
    <div
      className={`${
        type === "featured" ? "w-80 border-white" : "w-96"
      }  p-2 h-96 relative bg-primary text-white border-secondaryColor border rounded-lg`}>
      <Image
        src="/images/austin.jpg"
        alt="blog image"
        width={370}
        height={100}
        className=" object-cover h-48"
      />
      <h2 className=" text-xl tracking-wider mt-1 text-secondaryColor">
        Is your brand color influencing your users?
      </h2>
      <p className=" text-sm mt-2 tracking-wider">
        Brand indentity also gives your customers a sense of belonging and color
        is one major influencer in ...
      </p>
      <span className=" text-sm flex items-center gap-2 mt-2 text-secondaryColor">
        Read more <ArrowForwardIosOutlinedIcon className=" text-base " />
      </span>
      {type !== "featured" && (
        <div className=" absolute flex items-center gap-4 bottom-0 h-8 p-3   left-0 w-full">
          <div className=" text-xs">
            <FavoriteBorderIcon className=" text-2xl" /> 3000
          </div>
          <div className=" text-sm">
            <VisibilityOutlinedIcon /> 6 k+
          </div>
          <div className=" text-sm ml-36">2/02/2023</div>
        </div>
      )}
    </div>
  );
}
