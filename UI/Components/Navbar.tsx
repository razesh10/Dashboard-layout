"use client";
import React from "react";
import Profile from "./Profile";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { profile } from "console";

const Navbar = () => {
  const Navdata = {
    logo: {
      logo: "https://freepnglogo.com/images/all_img/1718130679apple-logo-png-transparent-image.png",
      name: "Bee Aver",
      href: "/",
    },
    navlinks: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      {
        label: "Support",
        href: "/support",
      },
    ],
    profile: {
      image:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  };

  const [navlinksVisible, setNavlinksVisible] = useState(false);

  return (
    <div className="fixed top-0 flex flex-col z-50 w-full">
      <div className="bg-neutral-200 flex flex-row justify-between items-center w-full h-14 fixed top-0 z-50 px-5">
        <Logo
          logo="https://freepnglogo.com/images/all_img/1718130679apple-logo-png-transparent-image.png"
          name="Bee Aver"
        />
        <div className="md:flex flex-row gap-4 items-center hidden">
          {Navdata.navlinks && (
            <div className="list-none flex flex-row gap-4">
              {Navdata.navlinks.map((navlink) => (
                <NavLink
                  key={navlink.label}
                  label={navlink.label}
                  href={navlink.href}
                />
              ))}
            </div>
          )}

          <Profile image="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div
          className="flex items-center justify-center p-1 cursor-pointer rounded-lg border-2 border-neutral-700 md:hidden"
          onClick={() => setNavlinksVisible(!navlinksVisible)}
        >
          <Menu className="stroke-neutral-700" />
        </div>
      </div>
      {navlinksVisible && (
        <div className="md:hidden px-5">
          <div className="mt-14 md:hidden rounded-xl min-h-[calc(100vh-65px)] w-full h-full p-5 bg-gray-400">
            <ul className="list-none flex flex-row text-black [&>li]:w-full [&>li]:text-center [&>li]:p-2 [&>li]:cursor-pointer [&>li]:rounded-xl [&>li]:text-white">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
