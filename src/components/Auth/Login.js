import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/AuthContexts/authContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearError, isAuthenticated } = authContext;

  useEffect(() => {
    if (error === 'wrong password') {
      toast.error('😈😈    wrong password');
      clearError();
    } else if (error === 'Not found email') {
      toast.error('😈😈   Not found email 404!');
      clearError();
    } else if (isAuthenticated) {
      props.history.push('/'); //redircated to homepage
      // toast.success('👏👏👏👏 Login  successfully. ');
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      toast.error('😈😈 Email field is empty');
    } else if (password === '') {
      toast.error('😈😈 not allow empty field');
    }

    login({
      email,
      password,
    });
  };
  return (
    <Fragment>
      <div className='container mx-auto h-auto  flex flex-1 justify-center items-center'>
        <div className='w-full max-w-lg'>
          <div className='leading-loose'>
            <ToastContainer autoClose={8000} />
            <form
              onSubmit={onSubmit}
              className='max-w-xl m-4 p-10 bg-white rounded shadow-xl'>
              <h1 className='text-gray-800 text-center text-3xl   font-bold'>
                Account <span className=''>Login</span>
              </h1>
              <div className='mt-2'>
                <label className='block text-sm text-gray-600' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  id='email'
                  placeholder='Email'
                  aria-label='email'
                  onChange={onChange}
                  className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                />
                <p className='text-red-500 text-xs italic'>
                  Please choose a email.
                </p>
              </div>
              <div className='mt-2'>
                <label
                  className='block text-sm text-gray-600'
                  htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='w-full px-5  py-1 text-gray-700 bg-gray-200 rounded'
                  value={password}
                  onChange={onChange}
                  placeholder='*******'
                  aria-label='password'
                />
                <p className='text-red-500 text-xs italic'>
                  Please choose a password.
                </p>
              </div>
              <div className='mt-4 items-center justify-between'>
                <input
                  type='submit'
                  value='Login'
                  className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                />{' '}
                <a
                  className='inline-block right-0 align-baseline  font-bold text-sm text-500 hover:text-blue-800'
                  href='/'>
                  Forgot Password?
                </a>
              </div>
              <Link
                className='inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800'
                to='/register'>
                Not registered ?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
