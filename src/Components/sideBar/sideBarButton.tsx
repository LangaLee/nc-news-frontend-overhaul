import { motion } from "motion/react";

type sideBarButtonProps = {
  open: boolean;
};

const SideBarButton = (props: sideBarButtonProps) => {
  const open = props.open;
  return (
    <motion.div className=" ml-2 mt-3" animate={open ? "open" : "closed"}>
      <svg width="30" height="30" viewBox="0 0 30 30">
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 4 2.5 L 26 2.5" },
            open: { d: "M 8 2.5 L 22 18.5" },
          }}
        ></motion.path>
        <motion.path
          strokeWidth={!open ? "2" : 0}
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 4 10.5 L 26 10.5" },
            open: { d: "M 8 2.5 L 22 18.5" },
          }}
        ></motion.path>
        <motion.path
          strokeWidth="2"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 4 18.5 L 26 18.5" },
            open: { d: "M 8 18.5 L 22 2.5" },
          }}
        ></motion.path>
      </svg>
    </motion.div>
  );
};

export default SideBarButton;
