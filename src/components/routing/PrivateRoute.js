import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/AuthContexts/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authPrivate = useContext(AuthContext);
  const { isAuthenticated } = authPrivate;

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated === false ? (
            <Redirect to='/login' />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
