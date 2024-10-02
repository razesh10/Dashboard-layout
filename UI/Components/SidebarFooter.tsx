import React from "react";
import SidebarMenu from "./SidebarMenu";
import { User } from "lucide-react";

const SidebarFooter = ({ sidebarVisible }: { sidebarVisible: boolean }) => {
  return (
    <div className="flex flex-col gap-4 w-full absolute bottom-0 right-0 p-4 border border-t-black z-10">
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
  );
};

export default SidebarFooter;
