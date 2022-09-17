import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../modules/Home";
const Homepage = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Navigate to="/404" replace={true} />} />
    </Routes>
  );
};

export default Homepage;
