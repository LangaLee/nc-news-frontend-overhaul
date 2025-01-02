import { motion } from "motion/react";
import { SetStateAction, Dispatch } from "react";
import { Link } from "react-router-dom";
type SideBarOptionsProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

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

const SideBarOptions = ({ open, setOpen }: SideBarOptionsProps) => {
  const closeSideBar = () => {
    setOpen((prev) => !prev);
  };
  return (
    <motion.div animate={open ? "open" : "closed"}>
      <motion.div className="h-screen" variants={variants}>
        <motion.ul>
          <motion.li
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
          >
            <Link to="/reviews" onClick={closeSideBar}>
              All reviews
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <Link to="/genres" onClick={closeSideBar}>
              View genres
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -125 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.6 }}
          >
            <Link to="/TrendingReviews" onClick={closeSideBar}>
              Trending reviews
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.9 }}
          >
            <Link to="/newReview" onClick={closeSideBar}>
              Post review
            </Link>
          </motion.li>
          <motion.li
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 2.2 }}
          >
            <Link to="/myReviews" onClick={closeSideBar}>
              Your reviews
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default SideBarOptions;
