import React, { useContext, useEffect } from 'react';
import PaymentContext from '../../context/payments/paymentContext';
import GetPaymentList from './GetPaymentList';
const GetUserPayment = () => {
  const paymentsContext = useContext(PaymentContext);
  const { getUserPayment, payments } = paymentsContext;
  useEffect(() => {
    getUserPayment();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className='text-white bg-gray-900 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        {' '}
        <div className='flex flex-wrap -m-4'>
          <table className='table-auto'>
            <tr>
              <th className='px-4 py-2'>User_Id</th>
              <th className='px-4 py-2'>Fullname</th>
              <th className='px-4 py-2'>Amount</th>
              <th className='px-4 py-2'>PhoneNum</th>
              <th className='px-4 py-2'>Method_of_pay</th>
            </tr>
            <tbody>
              {payments.map((ticket) => (
                <GetPaymentList key={ticket.id} money={ticket} />
              ))}
              {payments.id}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GetUserPayment;
