import classes from "./Body.module.css";
import Home from "../images/homeimage.png";
const Body = () => {
  return (
    <>
      <div className={classes.gone}>
        <div className={classes.flexParent}>
          <img className={classes.gone} src={Home} alt="wall"></img>
        </div>
      </div>
    </>
  );
};

export default Body;
