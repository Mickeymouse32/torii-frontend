import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { PiUserSwitch } from "react-icons/pi";
import logo from "../../assets/logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useAppContext } from "../../hooks/useAppContext";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const redirect = useNavigate();

  const { user, logout } = useAppContext();
  const handleLogout = () => {
    logout();
    redirect("/login");
  };
  const extractFirstName = (name) => {
    // ade test
    return name.split(" ")[0];
  };
  // Check screen size and toggle sidebar accordingly
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Navigation Bar - Mobile Menu Toggle */}
      <nav className="md:hidden bg-black text-white py-3 px-4 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-gray-600 focus:outline-none"
        >
          <FaBars color="#ffffff" size={20} />
        </button>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="logo" />
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-[#0c0c0c] text-white transition-all duration-300 ease-in-out 
            ${isSidebarOpen ? "w-64" : "w-0"} 
            ${isMobile ? "fixed inset-y-0 z-50" : "relative"}`}
        >
          <div
            className={`h-full overflow-y-auto ${
              isSidebarOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex lg:hidden items-center justify-end pt-2.5">
              <button
                onClick={toggleSidebar}
                className="mr-4 text-white focus:outline-none"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="flex gap-2 items-center">
                <img src={logo} alt="logo" />
                <div>
                  <h2 className="font-medium text-lg ">Torii Gate</h2>
                  <p className="italic font-normal text-[12px]">
                    Homing made easy to home
                  </p>
                </div>
              </div>
              <nav className="mt-6">
                <ul className="flex flex-col gap-3 text-[16px] justify-between h-full">
                  <li className="mb-2">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive
                          ? " flex items-center gap-3 bg-[#363636] px-4 py-2 rounded-md"
                          : "px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-3"
                      }
                      end
                    >
                      <RxDashboard size={22} />
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="property"
                      className={({ isActive }) =>
                        isActive
                          ? " flex items-center gap-3 bg-[#363636] px-4 py-2 rounded-md"
                          : "px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-3"
                      }
                    >
                      <HiOutlineHomeModern size={22} />
                      Property
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <NavLink
                      to="profile"
                      className={({ isActive }) =>
                        isActive
                          ? " flex items-center gap-3 bg-[#363636] px-4 py-2 rounded-md"
                          : "px-4 py-2 rounded hover:bg-gray-700 flex items-center gap-3"
                      }
                    >
                      <IoPersonOutline size={22} />
                      Profile
                    </NavLink>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/home"
                      className="px-4 py-2 flex items-center gap-3"
                    >
                      <PiUserSwitch size={22} />
                      Switch To Tenant
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-100">
          {/* Top Navigation Bar - Desktop */}
          <nav className="flex bg-white py-3 px-4 items-center justify-between sticky top-0 z-10">
            <div>
              <h1 className="font-light text-xl">
                Welcome Back,{" "}
                <span className="font-medium">
                  {extractFirstName(user.fullName)}{" "}
                </span>
              </h1>
            </div>
            <div className="flex items-center space-x-4 relative">
              <div className="  flex items-center justify-center gap-2.5">
                <img
                  src={user.profilePicture}
                  alt="pic"
                  className="rounded-full object-cover h-9 w-9"
                />
                <div>
                  <h2 className="hidden md:block font-bold text-[14px] ">
                    {user.fullName}
                  </h2>
                  <p className="hidden md:block text-[#666666] font-light">
                    {user.email}
                  </p>
                </div>
                <button
                  onClick={() => setShowLogout(!showLogout)}
                  className="cursor-pointer"
                >
                  {showLogout ? (
                    <IoIosArrowUp size={20} />
                  ) : (
                    <IoIosArrowDown size={20} />
                  )}
                </button>
              </div>
              {showLogout && (
                <button
                  onClick={handleLogout}
                  className="absolute btn bg-red-500 text-white top-16 right-4 z-10"
                >
                  Logout
                </button>
              )}
            </div>
          </nav>
          <div className="px-4 bg-[#f6f6f6]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
