import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route path="/companies" element={<Companies />} />
      <Route path="/companies/:id" element={<CompanyDetails />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Student Dashboard */}

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/saved-jobs" element={<SavedJobs />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />

      {/* Recruiter */}

      <Route
        path="/recruiter/dashboard"
        element={<RecruiterDashboard />}
      />

      {/* Admin */}

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

    </Routes>
  );
}

export default App;