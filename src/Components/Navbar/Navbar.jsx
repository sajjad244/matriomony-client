import {useContext, useState, useEffect} from "react";
import {HiMenu, HiX, HiMoon, HiSun} from "react-icons/hi";
import {Link} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logout Successfully");
    });
  };

  const links = (
    <>
      <Link
        to="/"
        className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
      >
        Home
      </Link>
      <Link
        to="/bioPage"
        className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
      >
        Biodatas
      </Link>
      <a
        href="#contact"
        className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
      >
        Contact
      </a>
      <a
        href="#about"
        className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
      >
        About
      </a>

      {user?.email ? (
        <>
          <button
            onClick={handleLogOut}
            className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
          >
            Logout
          </button>
          <Link
            to="/dashboard"
            className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
          >
            Dashboard
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="px-3 py-2 rounded-md text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-semibold transition-all duration-300"
          >
            Login
          </Link>
        </>
      )}

      {/* Dark Mode Toggle Button */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <HiSun className="w-6 h-6 text-yellow-400" />
        ) : (
          <HiMoon className="w-6 h-6 text-gray-600" />
        )}
      </button>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 dark:bg-gray-900/60">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400">
                Matrimony
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex font-semibold space-x-4">{links}</div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-blue-700 dark:text-white"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 py-4">
          {links}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
