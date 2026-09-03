import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import JobDetails from "./pages/JobDetails";
import JobApplicants from "./pages/JobApplicants";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import About from "./pages/About";
import Contact from "./pages/Contact";

// Route Protection
import ProtectedRoute from "./routes/ProtectedRoute";
import StudentRoute from "./routes/StudentRoute";
import RecruiterRoute from "./routes/RecruiterRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<Home />} />

      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />

      <Route path="/companies" element={<Companies />} />
      <Route
        path="/companies/:id"
        element={<CompanyDetails />}
      />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Student */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <StudentRoute>
              <Dashboard />
            </StudentRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <StudentRoute>
             <Profile />
            </StudentRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile/edit"
        element={
          <ProtectedRoute>
            <StudentRoute>
              <EditProfile />
            </StudentRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/saved-jobs"
        element={
          <ProtectedRoute>
            <StudentRoute>
              <SavedJobs />
            </StudentRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <StudentRoute>
              <Applications />
            </StudentRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      {/* Recruiter */}

      <Route
        path="/recruiter/dashboard"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <RecruiterDashboard />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/recruiter/jobs/create"
        element={
         <ProtectedRoute>
           <RecruiterRoute>
             <CreateJob />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/jobs/:jobId/edit"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <EditJob />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/jobs/:jobId/applications"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <JobApplicants />
            </RecruiterRoute>
          </ProtectedRoute>
       }
      />

      {/* Admin */}

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;