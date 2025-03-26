import "./Header.css";
import logo from "../../assets/header/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
interface Props {
  fun: () => void;
  value1: boolean;
}
const Header = ({ fun, value1 }: Props) => {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
     className={isFixed ? "style ": " " }
    >
      <nav className="navbar">
        <div className="logo--sing">
          <img src={logo} alt="logo" className="logo" />
          <span className="logo-name">Start</span>
        </div>
        <ul className={value1 ? "ul-nav anim2" : "ul-nav anim1"}>
          <li className="li-nav-items">
            <Link to={"/"} className="link-item">
              Home
            </Link>
          </li>
          <li className="li-nav-items">
            <Link to={"/portfolio"} className="link-item">
              Portfolio
            </Link>
          </li>
          <li className="li-nav-items">
            <Link to={"/servis"} className="link-item">
              Services
            </Link>
          </li>
          <li className="li-nav-items">
            <Link to={"/contact"} className="link-item">
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={fun} className="bars">
          <div className={value1 ? "bars-item" : "bars-item d1"}></div>
          <div className={value1 ? "bars-item" : "bars-item d2"}></div>
          <div className={value1 ? "bars-item" : "bars-item d3"}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
