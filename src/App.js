import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart, Checkout, SignIn, SignUp } from "./components";
import { auth } from "./firebase/firebase";
import { logout } from "./redux/actions/auth";
import { LOGIN } from "./redux/actions/constants/actionTypes";

function App() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const currUser = {
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        };
        dispatch({ type: LOGIN, payload: currUser });
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
