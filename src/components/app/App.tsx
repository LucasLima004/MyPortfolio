import React from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../loader';
import { NavMenu } from '../menu/menu';

const App: React.FC = () => {
  return (
    <div>
      <Loader/>
      <NavMenu/>
      <Outlet />
    </div>
  );
}

export default App;
