import "./Tanalt.css";
import l1 from "../../assets/talants/l1.svg";
import l2 from "../../assets/talants/l2.svg";
import l3 from "../../assets/talants/l3.svg";
import l4 from "../../assets/talants/l4.svg";

const Talant = () => {
  return (
    <section className="sect4">
      <div className="sect4_container">
        <div className="ustun">
          <h3 className="sect4_container_h3">team</h3>
          <h2 className="sect4_container_h2">Our Talents</h2>
          <p className="sect4_container_text">
            Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
          </p>
        </div>
        <div className="sect4_container_qator">
          <div className="qator-item">
            <div className="img-qator-div">
              <img src={l1} alt="logo" className="qator-img" />
            </div>
            <h4 className="sect4_container_qator_h4">Peg Legge</h4>
            <span className="sect4_container_qator_it">CEO</span>
          </div>
          <div className="qator-item">
            <div className="img-qator-div">
              <img src={l2} alt="logo" className="qator-img" />
            </div>
            <h4 className="sect4_container_qator_h4">Richard Guerra</h4>
            <span className="sect4_container_qator_it">CTO</span>
          </div>
          <div className="qator-item">
            <div className="img-qator-div">
              <img src={l3} alt="logo" className="qator-img" />
            </div>
            <h4 className="sect4_container_qator_h4">Alexandra Stolz</h4>
            <span className="sect4_container_qator_it">DESIGNER</span>
          </div>
          <div className="qator-item">
            <div className="img-qator-div">
              <img src={l4} alt="logo" className="qator-img" />
            </div>
            <h4 className="sect4_container_qator_h4">Janet Bray</h4>
            <span className="sect4_container_qator_it">DEVELOPER</span>
          </div>
        </div>
        <a href="#" className="sect3_container_btn sect4-btn">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Talant;
