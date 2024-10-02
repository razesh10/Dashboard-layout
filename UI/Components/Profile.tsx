import React from "react";

const Profile = ({ image }: { image: string }) => {
  return (
    <div className="overflow-hidden rounded-full border border-neutral-400 w-7 aspect-square">
      <img
        src={image}
        alt="profile"
        className="w-full h-full object-cover"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Profile;
