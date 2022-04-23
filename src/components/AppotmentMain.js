import apointmentimage from "../images/apointmentimg.png";
import classes from "./AppointmentMain.module.css";
import bussiness from "../images/bussiness.png";

const AppointmentMain = () => {
  return (
    <>
      <div className={classes.parent}>
        <img className={classes.img} src={apointmentimage} alt="img"></img>
        <div className={classes.secondparent}>
          <h3 className={classes.title}>Make Appointment</h3>
          <p className={classes.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className={classes.btn}> Appointment</button>

          <img className={classes.apointment} src={bussiness} alt="hours"></img>
        </div>
      </div>
    </>
  );
};
export default AppointmentMain;
