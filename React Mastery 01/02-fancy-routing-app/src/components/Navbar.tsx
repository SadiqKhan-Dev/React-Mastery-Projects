import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItemStyle = "px-4 py-2 text-gray-600 hover:text-white hover:bg-blue-600 rounded transition duration-300";

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">Portfolio</Link>
        <div className="space-x-4">
          <NavLink to="/" className={navItemStyle}>Home</NavLink>
          <NavLink to="/about" className={navItemStyle}>About</NavLink>
          <NavLink to="/contact" className={navItemStyle}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
