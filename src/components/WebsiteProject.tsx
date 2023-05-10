import { webInterface } from "@components/data";
import Image from "next/image";

interface WebsiteProps {
  website: webInterface;
}

export default function WebsiteProject({ website }: WebsiteProps) {
  return (
    <div className="  w-full h-72 relative rounded-xl px-2 flex justify-center flex-col items-center">
      <Image
        src={`${website.image}`}
        className="object-cover"
        width={450}
        height={300}
        alt="website image"
      />
      <p className=" absolute bg-secondaryColor left-2 bottom-24 rounded-r p-2">
        {website.webdescription}
      </p>
      <a
        href={`${website.websiteUrl}`}
        target="_blank"
        className=" absolute border w-40 right-2 font-bold tracking-wider sm:bottom-11 lg:bottom-6 p-1 bg-secondaryColor hover:text-secondaryColor text-center hover:bg-transparent hover:border-secondaryColor transition-opacity ease-in-out duration-1000 outline-none  border-secondaryColor rounded-xl">
        visit website
      </a>
    </div>
  );
}
