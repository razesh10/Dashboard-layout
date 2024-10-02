import Content from "@/UI/Components/Content";
import Navbar from "@/UI/Components/Navbar";
import Sidebar from "@/UI/Components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <a href="/dashboard" className="p-2 border border-neutral-500 rounded-md">
        Dashboard
      </a>
    </div>
  );
}
