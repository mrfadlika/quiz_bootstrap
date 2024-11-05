
import Router from "preact-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import AboutUs from "../pages/About";


function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Shop path="/shop" />
      <AboutUs path="/about" />
    </Router>
  );
}

export default Routes;