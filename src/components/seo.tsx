import { webInterface } from "@components/data";
import Image from "next/image";

interface seoProps {
  website: webInterface;
}

export default function seo({ website }: seoProps) {
  return (
    <div className=" w-96 h-72  rounded-xl px-2 flex justify-center flex-col items-center">
      <Image
        src={`${website.image}`}
        className="object-cover"
        width={400}
        height={330}
        alt="website image"
      />
      <p>{website.webdescription}</p>
    </div>
  );
}
