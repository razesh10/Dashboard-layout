import Content from "@/UI/Components/Content";
import Navbar from "@/UI/Components/Navbar";
import Sidebar from "@/UI/Components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-row mt-14 bg-neutral-200 w-full text-white">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default page;
