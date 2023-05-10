import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
export default function Navbar() {
  const [openMenu, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full z-50 h-16 backdrop-blur-lg max-w-max-s-width  ">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:hidden lg:block font-medium font-corm tracking-widest text-secondaryColor">
            Nirvana.Inc Digital Agency
          </div>
          <div className="text-xl sm:block lg:hidden font-medium font-corm tracking-widest text-secondaryColor">
            Nirvana.Inc
          </div>
          <div
            className={`flex ${
              openMenu
                ? "sm:block sm:pl-7 lg:pl-0 bg-primary sm:translate-x-0 sm:ease-in-out duration-1200"
                : "sm:hidden"
            }  lg:flex items-center sm:fixed sm:top-0 lg:opacity-100 sm:-translate-x-60 lg:translate-x-0 sm:h-screen lg:h-full sm:w-2/3 lg:w-auto  z-10 backdrop-blur-3xl    lg:relative sm:ml-0 sm:left-0 lg:-ml-24 text-white  `}>
            <div className=" sm:flex sm:items-center lg:hidden text-2xl border-b border-white  font-bold  h-12">
              Nirvana.Inc
            </div>
            <ul className="flex sm:mt-4 lg:mt-0  lg:flex-row sm:flex-col sm:items-start  lg:items-center sm:h-screen lg:h-full sm:w-full lg:w-auto sm:bg-primary lg:bg-transparent lg:relative   text-white gap-6 font-semibold text-sm tracking-wider">
              <Link href="/">
                <li
                  className={` ${
                    router.pathname === "/"
                      ? "border-b-2 px-2 border-secondaryColor"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}>
                  Home
                </li>
              </Link>
              <Link href="/services">
                <li
                  className={` ${
                    router.pathname === "/services"
                      ? "border-b-2 px-2 border-secondaryColor"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}>
                  Work & Services
                </li>
              </Link>
              <li>
                Partner with us <ExpandMoreIcon />
              </li>

              <li>About</li>
              <Link href="/blogs">
                <li
                  className={` ${
                    router.pathname === "/blogs"
                      ? "border-b-2 px-2 border-secondaryColor"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}>
                  Blogs
                </li>
              </Link>
            </ul>
          </div>
          <div className="text-xl sm:hidden lg:block font-bold text-white">
            Logo
          </div>
          <div
            className={` ${
              openMenu ? "text-secondaryColor" : "text-white"
            } lg:hidden sm:block`}
            onClick={() => setMenuOpen(!openMenu)}>
            <MenuIcon className=" text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
