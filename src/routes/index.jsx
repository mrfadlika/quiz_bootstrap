
import Router from "preact-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";


function Routes() {
  return (
    <Router>
      <Home path="/" />
      <Shop path="/shop" />
    </Router>
  );
}

export default Routes;