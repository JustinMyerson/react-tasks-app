import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import Todos from "../src/Pages/Todos/index";
import About from "../src/Pages/About/index";
import Home from "../src/Pages/Home/index";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="about" element={<About />} />
          <Route index path="todos" element={<Todos />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
