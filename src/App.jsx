import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Providers from "./pages/Providers";
import ProviderDetails from "./pages/ProviderDetails";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/search" element={<Search />} />
        <Route path="/provider/:id" element={<ProviderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;