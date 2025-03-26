import "./Footer.css"
import p2 from "../../assets/footer/facebook.svg";
import p3 from "../../assets/footer/instagram.svg";
import p4 from "../../assets/footer/twiter.svg";
import p5 from "../../assets/footer/printest.svg"
import p6 from "../../assets/footer/tiktok.svg";
import p7 from "../../assets/footer/watsab.svg";
import p1 from "../../assets/footer/youtube.svg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <ul className="footer-ul">
          <li className="items">
            <a href="#" className="items-link">
              <img src={p2} alt="logo" className="footer-logo" />
            </a>
          </li>
          <li className="items">
            <a href="#" className="items-link">
              <img src={p3} alt="logo" className="footer-logo" />
            </a>
          </li>
          <li className="items">
            <a href="#" className="items-link">
              <img src={p4} alt="logo" className="footer-logo" />
            </a>
          </li>
          <li className="items">
            <a href="#" className="items-link">
              <img src={p5} alt="logo" className="footer-logo" />
            </a>
          </li>
          <li className="items">
            <a href="#" className="items-link">
              <img src={p6} alt="logo" className="footer-logo" />
            </a>
          </li>
          <li className="items">
            <a href="#" className="items-link">
              <img src={p7} alt="logo" className="footer-logo" />
            </a>
          </li>
          <li className="items">
            <a href="#" className="items-link">
              <img src={p1} alt="logo" className="footer-logo" />
            </a>
          </li>
        </ul>
        <p className="footer-about">© Start, 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer