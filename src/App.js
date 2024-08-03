



import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FitnessGoal from "./components/FitnessGoal";
import AboutUs from "./components/AboutUs";
import BestOffer from "./components/BestOffer";
import Services from "./components/Services";
import BestPlan from "./components/BestPlan";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageMemberships from "./components/Admin/ManageMemberships";
import ManagePrograms from "./components/Admin/ManagePrograms";
import ManageContent from "./components/Admin/ManageContent";
import Login from "./components/Admin/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* User routes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FitnessGoal />
              <AboutUs />
              <BestOffer />
              <Services />
              <BestPlan />
              <Detail />
              <Footer />
            </>
          }
        />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/BestOffer" element={<BestOffer />} />
        <Route path="/BestPlan" element={<BestPlan />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />

        {/* Admin routes */}
        {!isAuthenticated ? (
          <Route path="/admin/*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        ) : (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/memberships" element={<ManageMemberships />} />
            <Route path="/admin/programs" element={<ManagePrograms />} />
            <Route path="/admin/content" element={<ManageContent />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
