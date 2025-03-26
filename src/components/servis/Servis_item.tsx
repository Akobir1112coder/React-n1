import "./Servis_item.css";
import srcc from "../../assets/servis/check.svg"

const Servis_item = () => {
  return (
    <div className="containerr">
      <div className="ustun">
        <h3 className="container_h3">Plans</h3>
        <h2 className="container_h2">Our Services</h2>
        <p className="container_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="pages">
        <div className="page-item">
          <div className="page-item-t">
            <span className="t-span">Basic</span>
            <p className="t-text">
              <h1 className="t-text-h1">$100</h1>
              <span className="h1-span">/month</span>
            </p>
            <div className="t-tt-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam
            </div>
          </div>
          <ul className="page-item-ul">
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
          </ul>
          <a href="#" className="sect3_container_btn">
            Learn More
          </a>
        </div>
        <div className="page-item">
          <div className="page-item-t">
            <span className="t-span">Plus</span>
            <p className="t-text">
              <h1 className="t-text-h1">$250</h1>
              <span className="h1-span">/month</span>
            </p>
            <div className="t-tt-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam
            </div>
          </div>
          <ul className="page-item-ul">
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
          </ul>
          <a href="#" className="sect3_container_btn">
            Learn More
          </a>
        </div>
        <div className="page-item">
          <div className="page-item-t">
            <span className="t-span">Pro</span>
            <p className="t-text">
              <h1 className="t-text-h1">$400</h1>
              <span className="h1-span">/month</span>
            </p>
            <div className="t-tt-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam
            </div>
          </div>
          <ul className="page-item-ul">
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
            <li className="t-li">
              <img src={srcc} alt="logo" />
              <span>Lorem ipsum dolor sit.</span>
            </li>
          </ul>
          <a href="#" className="sect3_container_btn">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Servis_item;
