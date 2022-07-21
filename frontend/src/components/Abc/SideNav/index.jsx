import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaHome } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { NavLink } from "react-router-dom";
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

export default function SideNav({ children, open }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <SSideNav>
      <section className="main-container">
        <motion.div
          animate={{ width: open ? "15%" : "3%" }}
          className="sidebar"
        >
          <div className="top_section">
            {/* {open && <h1 className="logo">TubeYou</h1>} */}
            <div className="bars">{/* <FaBars onClick={func} /> */}</div>
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
          <article> {children}</article>
        </motion.div>
      </section>
    </SSideNav>
  );
}

SideNav.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
};
