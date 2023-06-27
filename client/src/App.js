import "./App.css";
import Home from "./components/pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
