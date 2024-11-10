// Routers.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../Pages/Home";
import UzAbout from "../Pages/uzAbout";
import Frontend from "../Pages/Frontend";
import Backend from "../Pages/Backend";
import GraphicDesign from "../Pages/GraphicD";
import Kiber from "../Pages/Kiber";
import Motion from "../Pages/MotionD";

const Routers = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<UzAbout />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/graphic_design" element={<GraphicDesign />} />
          <Route path="/cybersecurity" element={<Kiber />} />
          <Route path="/motion_design" element={<Motion />} />
          <Route
            path="*"
            element={
              <h1 className="text-5xl text-center mt-24 font-sans font-extrabold leading-6 tracking-widest dark:text-white w-auto">
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default Routers;
