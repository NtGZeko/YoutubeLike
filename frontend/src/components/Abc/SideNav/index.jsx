import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaHome, FaBars } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SSideNav from "./style";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/channel",
    name: "Channel",
    icon: <GrChannel />,
  },
  {
    path: "/subscribs",
    name: "subscribs",
    icon: <MdSubscriptions />,
  },
];

export default function SideNav({ open }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <SSideNav>
      <section className="main-container">
        <motion.div
          animate={{ width: open ? "100%" : "100%" }}
          className="sidebar"
        >
          <div className="top_section">
            {open && <h1 className="logo">TubeYou</h1>}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <article className="routes">
            {routes.map((route) => (
              <NavLink to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {open && <div className="link_text">{route.name}</div>}
                </AnimatePresence>
              </NavLink>
            ))}
          </article>
          {/* <article> {children}</article> */}
        </motion.div>
      </section>
    </SSideNav>
  );
}

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
};
