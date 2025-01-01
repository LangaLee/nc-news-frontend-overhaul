import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SideBar from "../sideBar/sideBar";
import { Link } from "react-router-dom";

type HeaderProps = {
  profile_image_url: string;
};
const Header = (userData: HeaderProps) => {
  return (
    <div className="flex flex-col fixed w-full">
      <header className=" flex content-center max-h-10">
        <SideBar />
        <div className="flex flex-auto justify-center items-center">
          {" "}
          <Link to={"/"}>
            {" "}
            <h1 className="">Album and Track Reviews</h1>
          </Link>
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
