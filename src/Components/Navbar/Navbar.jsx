import {useContext, useState} from "react";
import {HiMenu, HiX} from "react-icons/hi";
import {Link} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logout Successfully");
    });
  };

  const links = (
    <>
      <Link
        to="/"
        href="#contact"
        className="hover:bg-blue-700 px-3 py-2 rounded-md"
      >
        Home
      </Link>
      <Link
        to="/biodatas"
        href="#contact"
        className="hover:bg-blue-700 px-3 py-2 rounded-md"
      >
        Biodatas
      </Link>
      <a href="#contact" className="hover:bg-blue-700 px-3 py-2 rounded-md">
        Contact
      </a>
      <a href="#about" className="hover:bg-blue-700 px-3 py-2 rounded-md">
        About
      </a>

      {user?.email ? (
        <>
          <button
            onClick={handleLogOut}
            className="hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Logout
          </button>

          <Link
            to="/login"
            href="#contact"
            className="hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Dashboard
          </Link>
        </>
      ) : (
        <Link
          to="/login"
          href="#contact"
          className="hover:bg-blue-700 px-3 py-2 rounded-md"
        >
          Login
        </Link>
      )}
    </>
  );

  return (
    <nav className=" sticky top-0 z-50 bg-transparent ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold">Matrimony</h1>
            </Link>{" "}
          </div>
          <div className="hidden md:flex font-semibold space-x-4">{links}</div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" focus:outline-none"
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
      {isOpen && <div className="md:hidden bg-blue-500">{links}</div>}
    </nav>
  );
};

export default Navbar;
