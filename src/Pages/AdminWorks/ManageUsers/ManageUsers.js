import React from 'react';
import User from '../User/User';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/users');
      const data = await res.json();
      return data;
    }
  });



  const makeAdminHandler = id => {

    const confirm = window.confirm('Are you sure you want to make this user an Admin?');

    if (confirm) {
      fetch(`http://localhost:5000/api/users/admin/${id}`, {
        method: 'PUT'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          refetch();
        });
    }
  }

  return (
    <div>
      <h2>Admins</h2>
      {
        users?.map(user => {
          return (
            user.role === 'Admin' &&
            <User key={user._id} user={user}></User>
          )
        })
      }
      <h2>Users</h2>
      {
        users?.map(user => {
          return (
            user.role === 'User' &&
            <User key={user._id} user={user}>
              <button onClick={() => makeAdminHandler(user._id)}>Make Admin</button>
            </User>
          )
        })
      }


    </div>
  );
};

export default ManageUsers;