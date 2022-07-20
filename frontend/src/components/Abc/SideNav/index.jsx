import { motion } from "framer-motion";
import SSideNav from "./style";

export default function SideNav() {
  return (
    <SSideNav>
      <section className="main-container">
        <motion.div animate={{ width: "15%" }} className="sidebar">
          e
        </motion.div>
      </section>
    </SSideNav>
  );
}
