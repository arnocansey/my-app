import logo from "./logo.svg";
import "./App.css";
import Card from "./Assignment1/Card";
// import Stores from "./Assignment1/Stores";
import Assignment from "./Assignment2/Assignment";
// import Trial from "./Components/Trial";
import Trial2 from "./Components/Trial2";
import Navbar from "./Zuri Team/Navbar";
import Filter from "./Zuri Team/Filter";
import Resources from "./Zuri Team/Resources";
import Footer from "./Zuri Team/Footer";

function App() {
  // var Contents = [
  //   {
  //     header: "Stay connected",
  //     sub: "learn more",
  //   },

  //   {
  //     header: "Select ride",
  //     sub: "learn more",
  //   },

  //   {
  //     header: "Join Community",
  //     sub: "learn more",
  //   },

  //   {
  //     header: "Open Chat",
  //     sub: "learn more",
  //   },

  //   {
  //     header: "Express yourself",
  //     sub: "learn more",
  //   },

  //   {
  //     header: "ZoomRide Business",
  //     sub: "learn more",
  //   },
  // ];
  return (
    <>
      {/* <Card data={Fruits} /> */}
      {/* <Stores /> */}
      {/* <Assignment /> */}
      {/* <Trial2 /> */}
      <Navbar />
      <Filter />
      <Resources />
      <Footer />
    </>
  );
}

export default App;
