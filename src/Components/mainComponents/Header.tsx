import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SideBarButton from "../sideBarButton";
import { useState } from "react";
type HeaderProps = {
  profile_image_url: string;
};
const Header = (userData: HeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <header className=" flex content-center">
        <button
          className=" flex-none"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <SideBarButton open={open} />
        </button>
        <div className="flex flex-auto justify-center items-center">
          {" "}
          <h1 className="">Album and Track Reviews</h1>
        </div>
        <Avatar className=" flex-none">
          <AvatarImage src={userData.profile_image_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>

      <hr className=" mt-2 bg-yellow-500"></hr>
    </div>
  );
};

export default Header;
