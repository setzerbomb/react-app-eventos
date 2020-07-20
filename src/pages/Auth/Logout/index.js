import React from 'react';

export default function Logout({ history }) {
  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return <>{logout()}</>;
}
