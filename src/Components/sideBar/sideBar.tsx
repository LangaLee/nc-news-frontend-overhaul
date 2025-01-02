import SideBarButton from "./sideBarButton";
import { useState } from "react";
import SideBarOptions from "./sideBarOptions";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="max-h-8"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <SideBarButton open={open} />
      </button>
      {open ? <SideBarOptions open={open} setOpen={setOpen} /> : null}
    </div>
  );
};

export default SideBar;
