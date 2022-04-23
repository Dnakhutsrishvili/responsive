import Card from "./card/Card";
import Header from "./components/Header";
import Body from "./components/Body";
import AppointmentMain from "./components/AppotmentMain";
import Slider from "./components/Slider";
import Sliderstatic from "./components/Sliderstatic";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <style jsx global>{`
          body {
            margin-top: -25px;
            padding: 0px;
            width: 100%;
          }
        `}</style>
        <Card>
          <Header></Header>
          <Body></Body>
          <AppointmentMain></AppointmentMain>
          <Slider></Slider>
          <Sliderstatic></Sliderstatic>
          <Footer></Footer>
        </Card>
      </div>
    </>
  );
}

export default App;
