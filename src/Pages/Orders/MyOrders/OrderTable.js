import { Table } from 'flowbite-react';
import React from 'react';
import { MdCancel } from 'react-icons/md';

const OrderTable = ({ order, deleteOrder }) => {

  const { _id, customerName, bikeName, price, date, phone } = order;

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {customerName}
      </Table.Cell>
      <Table.Cell>
        {phone}
      </Table.Cell>
      <Table.Cell>
        {bikeName}
      </Table.Cell>
      <Table.Cell>
        ${price}
      </Table.Cell>
      <Table.Cell>
        {date}
      </Table.Cell>
      <Table.Cell>
        <button onClick={() => deleteOrder(_id)} className="font-medium text-blue-500 hover:text-red-600 hover:underline flex gap-1 items-center">
          Cancel Order
          <MdCancel className='mt-[2px]' />
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default OrderTable;