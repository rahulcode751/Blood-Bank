import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/DashBoard/Donar";
import Hospitals from "./pages/DashBoard/Hospitals";
import Consumer from "./pages/DashBoard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/DashBoard/Analytics";
import AdminHome from "./pages/Admin/AdminHome";
import DonarList from "./pages/Admin/DonarList";
import HospitalList from "./pages/Admin/HospitalList";
import OrgList from "./pages/Admin/OrgList";
import AboutPage from "./pages/AboutPage";
import Organisations from "./pages/DashBoard/Organisations";

function App() {
  return (
    <div >
      <ToastContainer />
      <Routes>
        {/* Admin */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />
        {/*About Page*/}
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        {/*Non Admin Routes */}
        <Route
          path="/" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>}
        />
        <Route
          path="/donar" element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>}
        />
        <Route
          path="/hospital" element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>}
        />
        <Route
          path="/consumer" element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>}
        />
        <Route
          path="/donation" element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>}
        />
        <Route
          path="/organisation" element={
            <ProtectedRoute>
              <Organisations />
            </ProtectedRoute>}
        />
        <Route
          path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>}
        />
        <Route
          path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>}
        />
        <Route
          path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;
