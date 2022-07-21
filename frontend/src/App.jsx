import Home from "@pages/Home";
import Header from "@components/Abc/Header";
import { Route, Routes } from "react-router-dom";
import Search from "@pages/Search";
import Subscribs from "@pages/Subscribs";
import Channel from "@pages/Channel";
import SideNav from "@components/Abc/SideNav";
import { useState } from "react";
import SApp from "./style";

function App() {
  const [isOpen] = useState(false);

  return (
    <SApp>
      <Header />
      <div className="layout">
        <SideNav open={isOpen} />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="subscribs" element={<Subscribs />} />
            <Route path="channel" element={<Channel />} />
          </Routes>
        </main>
      </div>
      {/* <SideNav> */}
      {/* </SideNav> */}
    </SApp>
  );
}

export default App;
