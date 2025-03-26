import "./About2.css";
import src1 from "../../assets/compain/google.svg";
import src2 from "../../assets/compain/microsoft.svg";
import src3 from "../../assets/compain/airbnb.svg";
import src4 from "../../assets/compain/facebook.svg";
import src5 from "../../assets/compain/spotify.svg";

const About2 = () => {
  return (
    <section className="sect2">
      <div className="container">
        <div className="ustun">
          <h3 className="container_h3">partners</h3>
          <h2 className="container_h2">Lorem Ipsum Dolor</h2>
          <p className="container_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="qator">
          <span className="img-span">
            <img src={src1} alt="google-logo" className="pic1" />
          </span>
          <span className="img-span">
            <img src={src2} alt="google-logo" className="pic1" />
          </span>
          <span className="img-span">
            <img src={src3} alt="google-logo" className="pic1" />
          </span>
          <span className="img-span">
            <img src={src4} alt="google-logo" className="pic1" />
          </span>
          <span className="img-span">
            <img src={src5} alt="google-logo" className="pic1" />
          </span>
        </div>
        <a href="#" className="container_btn">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default About2;
