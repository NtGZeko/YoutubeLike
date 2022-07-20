import Home from "@pages/Home";
import Header from "@components/Abc/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Header />
        <p>coucou</p>
      </div>
    </div>
  );
}

export default App;
