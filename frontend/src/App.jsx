import Home from "@pages/Home";
import Header from "@components/Abc/Header";
import { Route, Routes } from "react-router-dom";
import Search from "@pages/Search";
import Subscribs from "@pages/Subscribs";
import Channel from "@pages/Channel";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="subscribs" element={<Subscribs />} />
            <Route path="channel" element={<Channel />} />
          </Routes>
        </main>
        <p>coucou</p>
      </div>
    </div>
  );
}

export default App;
