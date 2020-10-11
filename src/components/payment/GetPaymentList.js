import React from 'react';

const GetPaymentList = ({ money }) => {
  return (
    <tr>
      <td className='border px-4 py-2'>{money.user_id}</td>
      <td className='border px-4 py-2'>{money.fullname}</td>
      <td className='border px-4 py-2'>{money.amount}</td>
      <td className='border px-4 py-2'>{money.phoneNum}</td>
      <td className='border px-4 py-2'>{money.method_of_pay}</td>
    </tr>
  );
};

export default GetPaymentList;
