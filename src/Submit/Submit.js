import classes from "./Submit.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../card/Card";
import sub1 from "../images/sub1.png";

const Submit = () => {
  return (
    <>
      <Card>
        <Header></Header>
        <div className={classes.flexcont}>
          <img className={classes.subimg} src={sub1} alt="sub"></img>
          <div>
            <h3 className={classes.title}>
              February 13 2022, pm 01:00 Appointment
            </h3>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit, sed do eiusmod tempor
              <br /> incididunt ut labore et dolore magna
              <br /> aliqua. Ut enim ad minim veniam, quis <br />
              nostrud exercitation ullamco laboris nisi ut
              <br /> aliquip ex ea commodo consequat. Duis
              <br /> aute irure dolor in reprehenderit in
              <br /> voluptate velit esse cillum dolore eu fugiat
              <br /> nulla pariatur. Excepteur sint occaecat
              <br /> cupidatat non proident, sunt in culpa qui
              <br /> officia deserunt mollit anim id est
              <br /> laborum.
            </p>
          </div>
        </div>
        <Footer></Footer>
      </Card>
    </>
  );
};
export default Submit;
