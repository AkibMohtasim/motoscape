import React from 'react';

const User = ({ user, children }) => {
  const { name, role } = user;
  return (
    <div className='flex gap-4'>
      <h2>{name}</h2>
      <p>Role: {role}</p>
      {children}
    </div>
  );
};

export default User;