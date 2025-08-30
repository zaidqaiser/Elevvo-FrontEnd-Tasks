import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl">🏠 Home Page</h1>} />
            <Route path="/analytics" element={<h1 className="text-2xl">📊 Analytics Page</h1>} />
            <Route path="/reports" element={<h1 className="text-2xl">📑 Reports Page</h1>} />
            <Route path="/calculate" element={<h1 className="text-2xl">🧮 Calculator Page</h1>} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
