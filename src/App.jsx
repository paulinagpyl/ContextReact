import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import PhotoProvider from "./store/PhotoContext";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <>
      <PhotoProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PhotoProvider>
    </>
  );
};
export default App;
