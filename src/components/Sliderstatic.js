import classes from "./Sliderstatic.module.css";
import img from "../images/slidest.png";
import bussiness from "../images/bussiness.png";

const Sliderstatic = () => {
  return (
    <>
      <div className={classes.parent}>
        <div className={classes.parentarrow}>
          <div className={classes.arrowleft1}></div>
          <div className={classes.arrowleft2}></div>
        </div>
        <div>
          <img className={classes.backimage1} src={img} alt="grv"></img>
        </div>
        <img className={classes.frontimage} src={img} alt="grv"></img>
        <div>
          <img className={classes.backimage2} src={img} alt="grv"></img>
        </div>
        <div className={classes.parentarrow}>
          <div className={classes.arrowright1}></div>
          <div className={classes.arrowright2}></div>
        </div>
      </div>
      <img className={classes.none} src={bussiness} alt="bussiness"></img>
    </>
  );
};
export default Sliderstatic;
