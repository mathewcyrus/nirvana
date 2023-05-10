import SeoLayoutComponent from "@components/components/SeoLayoutComponent";
import Ux from "@components/components/Ux";
import { useEffect, useState } from "react";
export default function services() {
  const [activetab, setActiveTab] = useState("seo");

  const renderCurrentComponent = () => {
    switch (activetab) {
      case "seo":
        return <SeoLayoutComponent />;
        break;
      case "ux":
        return <Ux />;
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    localStorage.setItem("tabstate", activetab);
  }, [activetab]);

  return (
    <main>
      <section className=" flex flex-col sm:px-4  items-center  lg:px-20">
        <div className="  relative border-b-secondaryColor border-b lg:h-28 sm:h-44 w-full   text-white  ">
          <ul className=" w-full flex  absolute bottom-0 flex-nowrap items-center lg:justify-between sm:overflow-scroll lg:overflow-visible">
            <li
              className={`cursor-pointer hover:bg-secondaryColor  ${
                activetab === "seo"
                  ? "bg-secondaryColor text-primary font-bold "
                  : ""
              } px-3 py-2 `}
              onClick={() => setActiveTab("seo")}>
              SEO & Marketing
            </li>
            <li
              className={`cursor-pointer hover:bg-secondaryColor  ${
                activetab === "ux"
                  ? "bg-secondaryColor text-primary font-bold "
                  : ""
              } px-3 py-2`}
              onClick={() => setActiveTab("ux")}>
              UX & Design
            </li>
            <li
              className={`cursor-pointer hover:bg-secondaryColor  ${
                activetab === "branding"
                  ? "bg-secondaryColor text-primary font-bold "
                  : ""
              } px-3 py-2`}
              onClick={() => setActiveTab("branding")}>
              Branding
            </li>
            <li
              className={`cursor-pointer hover:bg-secondaryColor  ${
                activetab === "data"
                  ? "bg-secondaryColor text-primary font-bold "
                  : ""
              } px-3 py-2`}
              onClick={() => setActiveTab("data")}>
              Data analytics & research
            </li>
            <li
              className={`cursor-pointer  hover:bg-secondaryColor  ${
                activetab === "web"
                  ? "bg-secondaryColor text-primary font-bold "
                  : ""
              } px-3 py-2`}
              onClick={() => setActiveTab("web")}>
              Web & App development
            </li>
            <li
              className={`cursor-pointer hover:bg-secondaryColor  ${
                activetab === "project"
                  ? "bg-secondaryColor text-primary font-bold"
                  : ""
              } px-3 py-2`}
              onClick={() => setActiveTab("project")}>
              Project Management
            </li>
            <li
              className={` cursor-pointer hover:bg-secondaryColor ${
                activetab === "social"
                  ? "bg-secondaryColor text-primary font-bold"
                  : ""
              } px-3 py-2`}
              onClick={() => setActiveTab("social")}>
              Social Media Management
            </li>
          </ul>
        </div>
        <section className=" h-screen text-white">
          {renderCurrentComponent()}
        </section>
      </section>
    </main>
  );
}
