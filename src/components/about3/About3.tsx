import "./About3.css";
import sours1 from "../../assets/about/about2-logo.svg";
import sours2 from "../../assets/about/about3.svg";

const About3 = () => {
  return (
    <section className="sect3">
      <div className="sect3_container">
        <img src={sours1} alt="logo" className="sect3_container_left" />
        <div className="sect3_container_rigth">
          <h2 className="sect3_container_h2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="sect3_container_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <a href="#" className="sect3_container_btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="sect3_container d">
        <div className="sect3_container_rigth o2">
          <h2 className="sect3_container_h2">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="sect3_container_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <a href="#" className="sect3_container_btn">
            Learn More
          </a>
        </div>
        <img src={sours2} alt="logo" className="sect3_container_left o1" />
      </div>
    </section>
  );
};

export default About3;
