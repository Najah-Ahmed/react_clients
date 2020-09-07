import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/AuthContexts/authContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const AuthPrivate = useContext(AuthContext);
  const { isAdmin } = AuthPrivate;
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          !isAdmin ? <Redirect to='/' /> : <Component {...props} />
        }
      />
    </div>
  );
};

export default AdminRoute;
