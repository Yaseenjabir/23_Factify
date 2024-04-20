import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useDispatch } from "react-redux";
import { colorSLice } from "../Redux/store";
const Navbar = ({ color }) => {
  const dispatch = useDispatch();

  const handleType = (type) => {
    dispatch(colorSLice.changeColor(type));
  };

  return (
    <>
      <header className="d-flex justify-content-center py-3 bg-[#212529] border-b-[1px] min-h-[125px] items-center d-lg-none px-3 gap-2">
        <img className="w-[70px] h-[70px] rounded-full" src={logo} />

        <ul className="nav nav-pills flex flex-wrap justify-center gap-2 px-1">
          <li className="nav-item">
            <Link
              to={"/"}
              onClick={() => handleType("Home")}
              href="#"
              className={` nav-link border ${color === "Home" && "active"}`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/MathFacts"}
              onClick={() => handleType("Features")}
              href="#"
              className={`nav-link border ${color === "Features" && "active"}`}
            >
              Math Facts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/TriviaFacts"}
              onClick={() => handleType("Pricing")}
              href="#"
              className={`nav-link border ${color === "Pricing" && "active"}`}
            >
              Trivia Facts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/DateFacts"}
              onClick={() => handleType("FAQs")}
              href="#"
              className={`nav-link border ${color === "FAQs" && "active"}`}
            >
              Date Facts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/RandomFacts"}
              onClick={() => handleType("About")}
              href="#"
              className={`nav-link border ${color === "About" && "active"}`}
            >
              Random Facts
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
