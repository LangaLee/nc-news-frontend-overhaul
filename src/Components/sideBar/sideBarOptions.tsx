import { motion } from "motion/react";

type SideBarOptionsProps = { open: boolean };

const variants = {
  open: {
    clipPath: "circle(1200px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 5,
    },
  },
  closed: {
    clipPath: "circle(0.1px at 0px 0px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 50,
    },
  },
};

const SideBarOptions = ({ open }: SideBarOptionsProps) => {
  const options = [
    "Post new Review",
    "View topics",
    "Trending authors",
    "Manage your articles",
    "View all reviews",
  ];
  return (
    <motion.div animate={open ? "open" : "closed"}>
      <motion.div className="h-screen bg-yellow-300" variants={variants}>
        {options.map((option) => (
          <p className="mt-10">{option}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SideBarOptions;
