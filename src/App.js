import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  Cart,
  Checkout,
  SignIn,
  SignUp,
  ProductInfo,
} from "./components";
import { OrderHistory } from "./components/Order History/OrderHistory";
import { auth } from "./firebase/firebase";
import ProtectedRoute from "./Protected Routes/ProtectedRoute";
import { logout } from "./redux/actions/auth";
import { fetchCategories } from "./redux/actions/categories";
import { LOGIN } from "./redux/actions/constants/actionTypes";

function App() {
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

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/checkout" component={Checkout} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/product/:id" component={ProductInfo} />
          <Route exact path="/orders" component={OrderHistory} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
