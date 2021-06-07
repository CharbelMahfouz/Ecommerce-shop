import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? <RouteComponent {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
