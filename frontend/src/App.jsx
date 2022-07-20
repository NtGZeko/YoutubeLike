import Home from "@pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <p>coucou</p>
    </div>
  );
}

export default App;
