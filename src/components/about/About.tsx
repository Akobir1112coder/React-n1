import "./about.css";

import src from "../../assets/about/Group.svg"
const About = () => {
  return (
    <section className="sect1">
      <div className="box1">
        <div className="box1_left">
          <h3 className="box1_h3">WELCOME</h3>
          <h2 className="box1_h2">Lorem ipsum dolor sit amet consectetur </h2>
          <p className="box1_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <a href="#" className="box1_btn">
            Explore
          </a>
        </div>
        <img src={src} alt="group-logo" className="box1_right" />
      </div> 
    </section>
  );
};

export default About;
