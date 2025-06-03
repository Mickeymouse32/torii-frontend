import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import SuspenseLoader from "./components/SuspenseLoader";

// Lazy-loaded pages
const DashboardLayout = lazy(() =>
  import("./components/layout/DashboardLayout")
);
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const AdminProperty = lazy(() => import("./pages/AdminProperty"));
const CreateProperty = lazy(() => import("./pages/CreateProperty"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Home = lazy(() => import("./pages/Home"));
const HomeLoggedIn = lazy(() => import("./pages/HomeLoggedIn"));
const PropertyDetail = lazy(() => import("./pages/PropertyDetail"));
const Error404 = lazy(() => import("./pages/Error404"));
const Verification = lazy(() => import("./pages/Verification"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const CheckMail = lazy(() => import("./pages/CheckMail"));
import VerifyEmail from "./pages/VerifyEmail";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={<ProtectedRoute allowedRoles={["tenant", "landlord"]} />}
          >
            <Route path="/home" element={<HomeLoggedIn />} />
            <Route path="/property/:propertyId" element={<PropertyDetail />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/check-email" element={<CheckMail />} />

          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route element={<ProtectedRoute allowedRoles={["landlord"]} />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="property" element={<AdminProperty />} />
              <Route path="profile" element={<Profile />} />
              <Route path="create" element={<CreateProperty />} />
            </Route>
          </Route>

          {/* 404 route last */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
