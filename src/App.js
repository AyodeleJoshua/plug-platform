import { lazy } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const Home = lazy(() => import("./pages"));
const Elephant = lazy(() => import("./pages/Elephant"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<Navigate to="/elephantom" replace={true} />}
        />
        <Route path="elephantom/*" element={<Home />} />
        <Route path="elephant/:id" element={<Elephant />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
