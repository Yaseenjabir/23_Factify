import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useDispatch } from "react-redux";
import { colorSLice } from "../Redux/store";
const Sidebar = ({ color }) => {
  const dispatch = useDispatch();
  const handleType = (type) => {
    dispatch(colorSLice.changeColor(type));
  };

  return (
    <div
      className="d-none flex-column flex-shrink-0 p-3 text-bg-dark d-lg-flex border-r-[1px] border-gray-400"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <img src={logo} className="w-[80px] h-[80px] rounded-full mx-auto mb-3" />
      <hr />
      <ul className="nav nav-pills flex-column mb-auto gap-2">
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
        <li>
          <Link
            to={"/MathFacts"}
            onClick={() => handleType("Features")}
            href="#"
            className={`nav-link border ${color === "Features" && "active"}`}
          >
            Math Facts
          </Link>
        </li>
        <li>
          <Link
            to={"/TriviaFacts"}
            onClick={() => handleType("Pricing")}
            href="#"
            className={`nav-link border ${color === "Pricing" && "active"}`}
          >
            Trivia Facts
          </Link>
        </li>
        <li>
          <Link
            to={"/DateFacts"}
            onClick={() => handleType("FAQs")}
            href="#"
            className={`nav-link border ${color === "FAQs" && "active"}`}
          >
            Date Facts
          </Link>
        </li>
        <li>
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
      <hr />
    </div>
  );
};

export default Sidebar;
