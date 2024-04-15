import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="md:w-full mx-auto my-5 ">
      <nav className="md:flex md:gap-5 justify-between p-4 px-5 rounded-md  bg-slate-300 ">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 ">LOGO</h2>
        </div>
        <div>
          <ul className="flex gap-8">
            <li className="text-xl font-semibold hover:underline">
              <NavLink to={`/home`} className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-900")}>
                Home
              </NavLink>
            </li>
            <li className="text-xl font-semibold hover:underline">
              <NavLink to={`/about`} className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-900")}>
                About
              </NavLink>
            </li>
            <li className="text-xl font-semibold hover:underline">
              <NavLink to={`/contact`} className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-900")}>
                Contact
              </NavLink>
            </li>

            <li className="text-xl font-semibold hover:underline">
              <NavLink to={`/users`} className={({ isActive }) => (isActive ? "text-red-500" : "text-gray-900")}>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
