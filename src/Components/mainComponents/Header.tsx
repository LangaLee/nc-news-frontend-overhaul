import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SideBar from "../sideBar/sideBar";
type HeaderProps = {
  profile_image_url: string;
};
const Header = (userData: HeaderProps) => {
  return (
    <div className="flex flex-col">
      <header className=" flex content-center">
        <SideBar />
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
