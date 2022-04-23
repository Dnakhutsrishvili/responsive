import classes from "./Footer.module.css";
import Map from "../images/map.png";
import youtube from "../images/youtube.png";
import face from "../images/face.png";
import insta from "../images/insta.png";
import whats from "../images/whats.png";
import tag1 from "../images/tag1.png";
import tag2 from "../images/tag2.png";
import tag3 from "../images/tag3.png";

const Footer = () => {
  return (
    <>
      <div className={classes.parent}>
        <img src={Map} alt="map" className={classes.map}></img>
      </div>
      <h4 className={classes.mobile}>Parking Avaliable</h4>
      <div className={classes.divmobile}>
        <ul className={classes.style}>
          <li>
            <img className={classes.tags1} src={tag1} alt="tag"></img>
          </li>
          <li>
            <img className={classes.tags2} src={tag2} alt="tag"></img>
          </li>
          <li>
            <img className={classes.tags3} src={tag3} alt="tag"></img>
          </li>
        </ul>
        <p className={classes.lastp}>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit, sed do eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam,
          <br /> quis nostrud exercitation ullamco laboris nisi <br />
          ut aliquip ex ea
          <br /> commodo consequat. Duis aute irure dolor
          <br /> in reprehenderit in voluptate
          <br /> velit esse cillum dolore eu fugiat nulla
          <br /> pariatur. Excepteur sint occaecat
          <br /> cupidatat non proident, sunt in culpa qui officia deserunt
          <br /> mollit anim id est laborum.
        </p>
      </div>
      <p className={classes.mapp}>
        Parking for our customers is available <br></br>in ALL Faiths Cemetery
        parking lot.<br></br> Across the street from our ofice
      </p>
      <div className={classes.footerend}>
        <p className={classes.firstp}>
          Metropolitan AvenueMetropolitan AvenueMetropolitan Avenue
        </p>
        <p className={classes.secondp}>
          Email: george1sv7@gmail.com | Call or Text: +1 646 727 62 38
        </p>
        <div className={classes.soccell}>
          <img src={youtube} alt="youtube"></img>
          <img src={face} alt="youtube"></img>
          <img src={insta} alt="youtube"></img>
          <img src={whats} alt="youtube"></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
