import React from "react";

interface SidebarMenuProps {
  sidebarVisible: boolean;
  title: string;
  icon: React.ReactNode;
}

const SidebarMenu = ({ sidebarVisible, title, icon }: SidebarMenuProps) => {
  return (
    <div
      className={`${sidebarVisible ? "w-full transition-width ease-in-out duration-400" : "w-fit transition-width ease-in-out duration-400"} flex items-center gap-2 p-2  bg-white rounded-md text-black text-lg`}
    >
      {icon}
      {sidebarVisible && <p className="text-black">{title}</p>}
    </div>
  );
};

export default SidebarMenu;
