import Blog from "@components/components/Blog";
import { dataRequest } from "../../../utilities/dataRequest";

export default function blogs() {
  return (
    <main className=" pt-20 mb-12">
      <section className=" w-full flex relative h-max sm:px-4  lg:px-20">
        <div className=" w-2/3  h-full flex flex-col gap-4 ">
          <h1 className=" w-full bg-secondaryColor text-primary p-1 text-xl font-bold">
            Customer Relations
          </h1>
          <div className=" w-full flex gap-4 flex-wrap ">
            <Blog />
            <Blog />
            <Blog />
          </div>
        </div>
        <div className=" h-full px-3 w-1/3 sticky top-20">
          <div className=" ">
            <h1 className=" border-b text-lg w-3/4 text-white border-secondaryColor py-1">
              Filter by category
            </h1>
            <ul className=" pl-3 flex text-base tracking-wide flex-col gap-2 mt-2 text-white">
              <li className=" text-xl text-secondaryColor font-bold">All</li>
              <li>Digital Marketing</li>
              <li>Customer Relations</li>
              <li>Tech</li>
              <li>UX & Web dev</li>
            </ul>
          </div>
          <div>
            <h2 className=" py-1 mt-5 bg-secondaryColor text-primary font-bold text-center text-xl">
              Featured
            </h2>
            <div className=" w-full flex flex-col items-center mt-2">
              <Blog type="featured" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await dataRequest.get("/blogs");
    return {
      props: {
        blogs: res.data,
      },
    };
  } catch (error) {}
};
