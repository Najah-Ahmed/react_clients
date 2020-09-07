import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BookingTicketsState } from './context/bookingTicket/BookingTicketsState';
import { AuthState } from './context/AuthContexts/AuthState';
import 'react-toastify/dist/ReactToastify.css';
// import Tickets from './component/ticketbooking/Tickets';
// import TicketBookingForm from './component/ticketbooking/TicketBookingForm';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
// import User from './component/auth/User';
import Dashboard from './components/Users/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/layouts/Navbar';
import Footing from './components/layouts/Footing';
import Contact from './components/layouts/Contact';
import About from './components/layouts/About';
// import TicketForm from './component/ticketbooking/TicketForm';
// import SearchTicket from './component/ticketbooking/SearchTicket';
// import Admin from './component/ticketbooking/admin/Admin';
// import BookingForm from './component/ticketbooking/booking/BookingForm';
// import Seat from './component/ticketbooking/booking/Seat';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <div className='  min-h-screen font-sans bg-cover bg-gray-900  '>
      <AuthState>
        {/* <BookingTicketsState> */}
        <Router>
          <Fragment>
            <Navbar />

            <Switch>
              {/* <Route exact path='/' component={TicketBookingForm} /> */}
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              {/* <Route exact path='/searchticket' component={SearchTicket} /> */}
              {/* <Route exact path='/seat' component={Seat} /> */}
              {/* <AdminRoute exact path='/tickets' component={Tickets} /> */}
              {/* <PrivateRoute
                  exact
                  path='/ticket/:id'
                  component={BookingForm}
                /> */}
              {/* <AdminRoute exact path='/admin' component={Admin} /> */}
              {/* <PrivateRoute exact path='/user' component={User} /> */}
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              {/* <PrivateRoute exact path='/addTicket' component={TicketForm} /> */}
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
            <Footing />
          </Fragment>
        </Router>
        {/* </BookingTicketsState> */}
      </AuthState>
    </div>
  );
}

export default App;
