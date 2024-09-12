import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./ui/Layout";
import RealEstatePage from "./pages/RealEstatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/estate/:id" element={<RealEstatePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
