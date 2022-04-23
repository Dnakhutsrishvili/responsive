import classes from "./header.module.css";
import logo from "../images/Vectorlogo.png";
import Vector from "../images/Vector.png";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <>
      <header>
        <div className={classes.parent}>
          <img className={classes.logo} src={logo} alt="logo"></img>
          <img className={classes.vector} src={Vector} alt="vector"></img>
        </div>
        <p className={classes.memorialgrup}> DAVYDOV MEMORIAL GROUP</p>
      </header>
      <Navigation></Navigation>
    </>
  );
};
export default Header;
