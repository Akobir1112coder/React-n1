import "./Contact_item.css";

const Contact_item = () => {
  return (
    <div className="containerr">
      <div className="ustun">
        <h2 className="container_h2">Contact Us</h2>
        <p className="container_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="form-div">
        <form action="#" className="form">
          <div className="ddd">
            <label htmlFor="inp1" className="label1">
              Name
            </label>
            <input type="text" id="inp1" className="inp1" />
          </div>
          <div className="ddd">
            <label htmlFor="inp2" className="label1">
              Email
            </label>
            <input type="text" id="inp2" className="inp1" />
          </div>
          <div className="ddd">
            <label htmlFor="inp3" className="label1">
              Message
            </label>
            <textarea className="inp3" name="text" id="inp3"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="maps">
          <a
            href="https://yandex.com/maps/?um=constructor%3A8fc46fa6b903d5c1f646693ed19b470364a785c218d2a278868e5b395abd68b7&amp;source=constructorStatic"
            target="_blank"
          >
            <img
              src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A8fc46fa6b903d5c1f646693ed19b470364a785c218d2a278868e5b395abd68b7&amp;width=500&amp;height=400&amp;lang=en_FR"
              alt=""
             
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact_item;
