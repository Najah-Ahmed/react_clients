import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TicketsState } from './context/Tickets/TicketsState';
import { AuthState } from './context/AuthContexts/AuthState';
import { PaymentState } from './context/payments/PaymentState';
import { BookingState } from './context/BookingContext/BookingState';
import { SeatState } from './context/seatContext/SeatState';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import AddTicket from './components/Tickets/AddTickets';
import Dashboard from './components/Users/Dashboard';
import Profile from './components/Users/Profile';
import Admin from './components/Users/Admin';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/layouts/Navbar';
import Footing from './components/layouts/Footing';
import Contact from './components/layouts/Contact';
import About from './components/layouts/About';
import SearchResult from './components/Tickets/SearchResult';
import TicketForm from './components/Tickets/TicketForm';
import GelAllTicket from './components/Tickets/GelAllTicket';
import AddTickets from './components/Tickets/AddTickets';
import UpdateTickets from './components/Tickets/UpdateTickets';
import DeleteTickets from './components/Tickets/DeleteTickets';
import BookingPayment from './components/payment/BookingPayment';
import PackagePayment from './components/payment/PackagePayment';
import GetAllPayment from './components/payment/GetAllPayment';
import GetUserPayment from './components/payment/GetUserPayment';
import BookingTickets from './components/Booking/BookingTickets';
import SeatMain from './components/BookingSeat/SeatMain';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <div className='  min-h-screen font-sans bg-cover bg-gray-900  '>
      <AuthState>
        <TicketsState>
          <BookingState>
            <SeatState>
              <PaymentState>
                <Router>
                  <Fragment>
                    <Navbar />

                    <Switch>
                      <Route exact path='/' component={TicketForm} />
                      <Route exact path='/seat' component={SeatMain} />
                      <Route exact path='/home' component={TicketForm} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/contact' component={Contact} />
                      <Route
                        exact
                        path='/searchResult'
                        component={SearchResult}
                      />
                      <AdminRoute
                        exact
                        path='/addTickets'
                        component={AddTickets}
                      />
                      <Route
                        exact
                        path='/allTickets'
                        component={GelAllTicket}
                      />
                      <AdminRoute
                        exact
                        path='/updateTickets/:id'
                        component={UpdateTickets}
                      />
                      <PrivateRoute
                        exact
                        path='/bookings/:id'
                        component={BookingTickets}
                      />
                      <AdminRoute
                        exact
                        path='/deleteTicket/:id'
                        component={DeleteTickets}
                      />
                      <AdminRoute exact path='/add' component={AddTicket} />

                      <AdminRoute
                        exact
                        path='/adminPayment'
                        component={GetAllPayment}
                      />
                      <AdminRoute exact path='/admin' component={Admin} />
                      <PrivateRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                      />
                      <PrivateRoute exact path='/profile' component={Profile} />
                      <PrivateRoute
                        exact
                        path='/userpayments'
                        component={GetUserPayment}
                      />
                      <PrivateRoute
                        exact
                        path='/packagePayments'
                        component={PackagePayment}
                      />
                      <PrivateRoute
                        exact
                        path='/bookingPayments'
                        component={BookingPayment}
                      />
                      {/* <PrivateRoute exact path='/addTicket' component={TicketForm} /> */}
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/login' component={Login} />
                    </Switch>
                    <Footing />
                  </Fragment>
                </Router>
              </PaymentState>
            </SeatState>
          </BookingState>
        </TicketsState>
      </AuthState>
    </div>
  );
}

export default App;
