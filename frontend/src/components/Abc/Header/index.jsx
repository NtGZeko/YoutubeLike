import SideNav from "@components/Abc/SideNav";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import SHeader from "./style";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <SHeader>
        <div className="flex">
          <FaBars onClick={toggle} />
          <h1>TubeYou</h1>
        </div>
      </SHeader>
      <SideNav open={isOpen} />
    </>
  );
}
