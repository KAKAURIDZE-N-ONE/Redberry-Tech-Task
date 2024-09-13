import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./ui/Layout";
import RealEstatePage from "./pages/RealEstatePage";
import AddListingPage from "./pages/AddListingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing/:id" element={<RealEstatePage />} />
          <Route path="/add-listing" element={<AddListingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
