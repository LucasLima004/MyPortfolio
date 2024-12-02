import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../menu/menu';
import Loader from '../loader';

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
