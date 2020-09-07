import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContexts/authContext';

const User = () => {
  const userContext = useContext(AuthContext);
  const { loadUser } = userContext;
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container text-white'>
      <h1>Users</h1>
      profile
    </div>
  );
};

export default User;
