import SideBarButton from "./sideBarButton";
import { useState } from "react";
import SideBarOptions from "./sideBarOptions";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="max-h-8"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <SideBarButton open={open} />
      {open ? <SideBarOptions open={open} /> : null}
    </button>
  );
};

export default SideBar;
