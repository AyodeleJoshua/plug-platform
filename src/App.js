import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./app.css";
const Home = lazy(() => import("./pages"));
const Elephant = lazy(() => import("./pages/Elephant"));

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
