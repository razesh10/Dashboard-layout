import React from "react";

interface LogoProps {
  logo: string;
  name?: string;
}

const Logo = ({ logo, name }: LogoProps) => {
  return (
    <div className="flex items-center gap-4">
      <img src={logo} alt="logo" width={24} height={24} />
      {name && <p className="text-black text-xl font-semibold">{name}</p>}
    </div>
  );
};

export default Logo;
