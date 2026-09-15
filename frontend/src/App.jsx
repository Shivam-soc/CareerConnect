import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import CreateJob from "./pages/CreateJob";
import EditJob from "./pages/EditJob";
import JobDetails from "./pages/JobDetails";
import JobApplicants from "./pages/JobApplicants";

import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import RecruiterCompanies from "./pages/RecruiterCompanies";
import CreateCompany from "./pages/CreateCompany";
import EditCompany from "./pages/EditCompany";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import OAuthSuccess from "./pages/OAuthSuccess";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import SavedJobs from "./pages/SavedJobs";
import Applications from "./pages/Applications";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

import RecruiterDashboard from "./pages/RecruiterDashboard";
import RecruiterProfile from "./pages/RecruiterProfile";
import RecruiterSettings from "./pages/RecruiterSettings";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageCompanies from "./pages/ManageCompanies";
import ManageJobs from "./pages/ManageJobs";
import ManageApplications from "./pages/ManageApplications";

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

      {/* ================= PUBLIC ROUTES ================= */}

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

      {/* ================= AUTH ================= */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />
      <Route path="/oauth-success" element={<OAuthSuccess/>} />

      {/* ================= STUDENT ================= */}

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

      {/* ================= RECRUITER ================= */}

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
        path="/recruiter/profile"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <RecruiterProfile />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/settings"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <RecruiterSettings />
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
        path="/recruiter/jobs/:id/edit"
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

      {/* Recruiter Company Management */}

      <Route
        path="/recruiter/companies"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <RecruiterCompanies />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/companies/create"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <CreateCompany />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter/companies/:id/edit"
        element={
          <ProtectedRoute>
            <RecruiterRoute>
              <EditCompany />
            </RecruiterRoute>
          </ProtectedRoute>
        }
      />

      {/* ================= ADMIN ================= */}

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

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/companies"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <ManageCompanies />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/jobs"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <ManageJobs />
            </AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/applications"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <ManageApplications />
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      {/* Add more admin routes as needed */}

    </Routes>
  );
}

export default App;