import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart, Checkout, SignUp } from "./components";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
