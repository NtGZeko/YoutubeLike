import Home from "@pages/Home";
// import Header from "@components/Abc/Header";
import { Route, Routes } from "react-router-dom";
import Search from "@pages/Search";
import Subscribs from "@pages/Subscribs";
import Channel from "@pages/Channel";
import SideNav from "@components/Abc/SideNav";

function App() {
  return (
    <>
      {/* <Header /> */}
      <SideNav>
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="subscribs" element={<Subscribs />} />
            <Route path="channel" element={<Channel />} />
          </Routes>
        </main>
      </SideNav>
      <p>coucou</p>
    </>
  );
}

export default App;
