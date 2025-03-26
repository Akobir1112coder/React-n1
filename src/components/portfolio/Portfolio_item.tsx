import "./Portfolio_item.css";
import logo_p1 from "../../assets/portfolio/lo1.svg";
import logo_p2 from "../../assets/portfolio/lo2.svg";
import logo_p3 from "../../assets/portfolio/lo3.svg";
import logo_p4 from "../../assets/portfolio/lo4.svg";
import logo_p5 from "../../assets/portfolio/lo5.svg";
import logo_p6 from "../../assets/portfolio/lo6.svg";
import logo_p7 from "../../assets/portfolio/lo7.svg";
import logo_p8 from "../../assets/portfolio/lo8.png";

const Portfolio_item = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio_container">
        <div className="ustun">
          <h3 className="container_h3">Works</h3>
          <h2 className="container_h2">Portfolio</h2>
          <p className="container_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="d-grid">
          <a href="#" className="port-span">
            <img src={logo_p1} alt="logo" className="port-pic" />
          </a>
          <span className="port-span">
            <img src={logo_p2} alt="logo" className="port-pic" />
          </span>
          <span className="port-span">
            <img src={logo_p3} alt="logo" className="port-pic" />
          </span>
          <span className="port-span">
            <img src={logo_p4} alt="logo" className="port-pic" />
          </span>
          <span className="port-span">
            <img src={logo_p5} alt="logo" className="port-pic" />
          </span>
          <span className="port-span">
            <img src={logo_p6} alt="logo" className="port-pic" />
          </span>
          <span className="port-span">
            <img src={logo_p7} alt="logo" className="port-pic" />
          </span>
          <span className="port-span">
            <img src={logo_p8} alt="logo" className="port-pic" />
          </span>
        </div>
        <a href="#" className="sect3_container_btn ma">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Portfolio_item;
