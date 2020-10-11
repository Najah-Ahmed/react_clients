import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContexts/authContext';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = () => {
  const userContext = useContext(AuthContext);
  const { loadUser, user, logout } = userContext;
  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);
  const notify = () => {
    toast.info('😈😈 You Are Logout !');
  };
  const onLogout = () => {
    notify();
    logout();
  };
  return (
    <div className='h-screen w-full flex overflow-hidden'>
      <nav className='flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6'>
        {/* //<!-- SideNavBar --> */}

        <div className='flex flex-row border-b items-center justify-between pb-2'>
          {/* //<!-- Hearder --> */}

          <span className='relative '>
            <a
              className='hover:text-green-500 dark-hover:text-green-300
					text-gray-600 dark:text-gray-300'
              href='inbox/'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9'></path>
                <path d='M13.73 21a2 2 0 0 1-3.46 0'></path>
              </svg>
            </a>
            <div
              className='absolute w-2 h-2 rounded-full bg-green-500
					dark-hover:bg-green-300 right-0 mb-5 bottom-0'></div>
          </span>
        </div>

        <div className='mt-8'>
          {/* //<!-- User info --> */}
          <img
            className='h-12 w-12 rounded-full object-cover'
            src='https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png'
            alt='enoshima profile'
          />
          <h2 className='mt-4 text-xl dark:text-gray-300 font-extrabold capitalize'>
            Hello {user.userName}
          </h2>
        </div>

        <Link
          to='/'
          className='mt-8 flex items-center justify-between py-3 px-2 text-white
			dark:text-gray-200 bg-green-400 dark:bg-green-500 rounded-lg shadow'>
          {/* //<!-- Action --> */}
          <span>Find Booking</span>
          <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
            <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
          </svg>
        </Link>

        <ul className='mt-2 text-gray-600'>
          {/* //<!-- Links --> */}
          <li className='mt-8'>
            <Link to='/dashboard' className='flex '>
              <svg
                className='fill-current h-5 w-5 dark:text-gray-300'
                viewBox='0 0 24 24'>
                <path
                  d='M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z'></path>
              </svg>
              <span
                className='ml-2 capitalize font-medium text-black
						dark:text-gray-300'>
                dashboard
              </span>
            </Link>
          </li>
        </ul>
        <ToastContainer />
        <div className='mt-auto flex items-center text-red-700 dark:text-red-400'>
          {/* //<!-- important action --> */}
          <a href='#home' onClick={onLogout} className='flex items-center'>
            <svg className='fill-current h-5 w-5' viewBox='0 0 24 24'>
              <path
                d='M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z'></path>
            </svg>
            <span className='ml-2 capitalize font-medium'>log out</span>
          </a>
        </div>
      </nav>
      <main
        className='flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto'>
        <div className='mx-10 my-2'>
          <h2 className='my-4 text-4xl font-semibold dark:text-gray-400'>
            Profile
          </h2>

          <div
            className='mt-8 mb-4 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer'>
            {/* //<!-- Card --> */}

            <div className='flex justify-between'>
              {/* //<!-- Left side --> */}

              <img
                className='h-12 w-12 rounded-full object-cover'
                src='https://media.contentapi.ea.com/content/dam/gin/images/2017/01/crysis-3-keyart.jpg.adapt.crop1x1.767p.jpg'
                alt=''
              />

              <div
                className='ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400'>
                <span>fullName</span>
                <span className='mt-2 text-black dark:text-gray-200'>
                  {user.fullName}
                </span>
              </div>

              <div
                className='ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400'>
                <span>phoneNum</span>
                <span className='mt-2 text-black dark:text-gray-200'>
                  {user.phoneNum}
                </span>
              </div>
            </div>

            <div className='flex'>
              {/* //<!-- Rigt side --> */}

              <div
                className='mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400'>
                <span>Email</span>
                <span className='mt-2 text-black dark:text-gray-200'>
                  {user.email}
                </span>
              </div>

              <div
                className='mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400'>
                <span>Email-Confirmed</span>
                <span className='mt-2 text-black dark:text-gray-200'>
                  {user.email_confirm}False
                </span>
              </div>

              <div
                className='mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400'>
                <span>Phone-Confirmed</span>
                <span className='mt-2 text-yellow-600 dark:text-yellow-400'>
                  {user.phoneNum_confirm} False
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default User;
