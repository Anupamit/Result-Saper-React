import Addresult from "./Addresult";
import Showresult from "./Showresult";
import Editresult from "./Editresult";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Addresult />} />
              <Route path="showresult" element={<Showresult />} />
              <Route path="editresult" element={<Editresult />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
