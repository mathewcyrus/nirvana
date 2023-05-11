import Image from "next/image";

export default function Testimonial() {
  return (
    <div className=" border flex flex-col  sm:w-56 lg:w-96 text-white  sm:h-72  lg:h-36 rounded-2xl border-secondaryColor  p-2">
      <div className=" sm:flex sm:items-center lg:items-start sm:flex-col lg:flex lg:flex-row gap-3">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/portifolio-mathews.appspot.com/o/nirvana%2Fchristina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg?alt=media&token=c7aab8ee-613c-430e-bb92-25840783c940"
          width={100}
          height={100}
          alt="jane doe"
          className=" h-16 w-16 sm:order-2 lg:-order-1  rounded-full object-cover"
        />
        <p className=" text-sm lg:w-72 sm:w-48 sm:text-center lg:text-left ">
          "Worry less about your online engagements and posts. We will handle
          you campaigns so you can focus on the product because Nirvan digital
          Agecy has git all the tools and strategies to scale your business to
          newer heights."
        </p>
      </div>
      <div className=" w-full text-secondaryColor sm:text-center lg:text-right mt-1 text-sm font-bold tracking-wider">
        Mitchelle J. Lane
      </div>
    </div>
  );
}
