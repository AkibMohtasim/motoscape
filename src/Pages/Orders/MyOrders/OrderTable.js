import React from 'react';
import { MdCancel } from 'react-icons/md';

const OrderTable = ({ order, deleteOrder }) => {

  const { _id, status, productName, date } = order;

  return (
    <tr>
      <td className='px-10 py-2 border'>{productName}</td>
      <td className='px-10 py-2 border'>{status}</td>
      <td className='px-10 py-2 border'>{date}</td>
      <td className='px-10 py-2 border'>
        <button onClick={() => deleteOrder(_id)} className="font-medium text-blue-500 hover:text-red-600">
          Cancel Order <MdCancel className='inline' />
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;