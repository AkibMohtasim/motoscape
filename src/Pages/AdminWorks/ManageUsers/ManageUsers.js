import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';
import { MdAdminPanelSettings } from 'react-icons/md';
import useTitle from '../../../Hooks/useTitle';

const ManageUsers = () => {

  useTitle('Manage Users - Admin');

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://motoscape-server.vercel.app/api/users');
      const data = await res.json();
      return data;
    }
  });



  const makeAdminHandler = id => {

    const confirm = window.confirm('Are you sure you want to make this user an Admin?');

    if (confirm) {
      fetch(`https://motoscape-server.vercel.app/api/users/admin/${id}`, {
        method: 'PUT'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch();
        });
    }
  }

  if (users.length < 1) {
    return (
      <div className='text-center my-10'>
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    )
  }

  return (
    <div>
      <table>
        <caption className="caption-top text-center py-4 text-2xl tracking-wider">
          Manage Users (Admin)
        </caption>
        <thead>
          <tr>
            <th className='px-10 py-2 border tracking-wide'>User's Name</th>
            <th className='px-10 py-2 border tracking-wide'>Email</th>
            <th className='px-10 py-2 border tracking-wide'>Role</th>
            <th className='px-10 py-2 border tracking-wide'> </th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map(user =>
              <tr key={user._id}>
                <td className='px-10 py-2 border'>{user.name}</td>
                <td className='px-10 py-2 border'>{user.email}</td>
                <td className='px-10 py-2 border'>{user.role}</td>
                <td className='px-10 py-2 border'>
                  {
                    user.role === 'User' && <button onClick={() => makeAdminHandler(user._id)} className='bg-blue-600 hover:bg-blue-800 duration-150 text-white px-3 py-1 rounded'>Make Admin <MdAdminPanelSettings className='inline' /></button>
                  }
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;