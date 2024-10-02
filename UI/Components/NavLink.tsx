import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  return (
    <div>
      <a
        href={href}
        className="text-black text-base hover:text-neutral-700 font-medium"
      >
        {label}
      </a>
    </div>
  );
};

export default NavLink;
