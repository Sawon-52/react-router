import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="md:w-full mx-auto my-5 ">
      <nav className="md:flex md:gap-5 justify-between p-4 px-5 rounded-md  bg-slate-300 ">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 ">LOGO</h2>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <Link className="text-xl font-semibold hover:underline" to={`/home`}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-xl font-semibold hover:underline" to={`/about`}>
                About
              </Link>
            </li>
            <li>
              <Link className="text-xl font-semibold hover:underline" to={`/contact`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
