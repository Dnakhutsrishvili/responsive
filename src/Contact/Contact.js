import Card from "../card/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Calendar from "./Calendar";
import classes from "./Contact.module.css";
import img1 from "../images/img1.png";
import bussiness from "../images/bussiness.png";

const Contact = () => {
  return (
    <>
      <Card>
        <Header></Header>
        <div className={classes.parentflex}>
          <div>
            <Calendar></Calendar>
          </div>
          <div className={classes.cont}>
            <h3 className={classes.title}>BUSINESS HOURS</h3>
            <table className={classes.table}>
              <th className={classes.dark}>am 10:00</th>
              <th className={classes.dark}>am 11:00</th>
              <th className={classes.light}> pm 01:00</th>
              <th className={classes.light}>pm 02:00</th>
              <th className={classes.dark}>pm 03:00</th>
              <th className={classes.light}>pm 04:00</th>
              <th className={classes.dark}>pm 05:00</th>
            </table>
            <div className={classes.gone}>
              <h3 className={classes.apointment}>Make Appointment</h3>
              <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br />
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim <br />
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea
                <br /> commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate <br />
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat <br />
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id
                <br /> est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.flexcont}>
          <div>
            <img className={classes.image} src={img1} alt="stone"></img>
          </div>
          <div className={classes.inputcont}>
            <label className={classes.label}>Message </label>
            <input
              type="text"
              placeholder="Сдесь вы можете отправить на сообщение"
              className={classes.inp}
            ></input>
            <button className={classes.btn}>Submit</button>
            <img className={classes.hours} src={bussiness} alt="hours"></img>
          </div>
        </div>
        <Footer></Footer>
      </Card>
    </>
  );
};
export default Contact;
