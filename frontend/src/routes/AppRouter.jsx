import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import Register from "../pages/Register";
import Home from "../pages/Home";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>

        <Route path="/authentication" element={<Auth />} />
        {/* <Route path="/register" element={<Register />} /> */}

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
