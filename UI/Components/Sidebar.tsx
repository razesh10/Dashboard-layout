"use client";
import React from "react";
import { ChevronLeft, User } from "lucide-react";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <div
      className={`${sidebarVisible ? "w-full max-w-[250px]" : "w-fit"} bg-neutral-200 md:flex flex-col p-4 h-[calc(100vh-56px)] gap-4 relative hidden transition-width ease-in-out duration-1000 justify-between`}
    >
      <SidebarMenu
        sidebarVisible={sidebarVisible}
        title="Profile"
        icon={<User />}
      />

      <div className="flex flex-col gap-4 w-full border border-t-black z-10">
        <SidebarMenu
          sidebarVisible={sidebarVisible}
          title="Profile"
          icon={<User />}
        />
        <SidebarMenu
          sidebarVisible={sidebarVisible}
          title="Profile"
          icon={<User />}
        />
      </div>
      <div
        className="bg-neutral-300 absolute bottom-40 -right-4 p-1 cursor-pointer rounded-full z-20 text-black shadow-md"
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        <ChevronLeft
          strokeWidth={2}
          size={20}
          className={`${sidebarVisible ? "transition-all ease-in duration-200" : "rotate-180 transition-all ease-in duration-200"}`}
        />
      </div>
    </div>
  );
};

export default Sidebar;
