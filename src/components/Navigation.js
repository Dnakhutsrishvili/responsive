import sun from "../images/sun1.png";
import classes from "./Navigation.module.css";
import nav from "../images/Group36.png";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className={classes.flexparent}>
        <ul className={classes.unordered}>
          <Link to="/">
            <li className={classes.list}>HOME</li>
          </Link>
          <Link to="/submit">
            <li className={classes.list}>CATALOG</li>
          </Link>

          <Link to="/contact">
            <li className={classes.list}>CONTACT</li>
          </Link>
          <Outlet />
          <li>
            <img src={sun} alt="sun"></img>
          </li>
          <li className={classes.gone}>
            <img src={nav} alt="sun"></img>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
