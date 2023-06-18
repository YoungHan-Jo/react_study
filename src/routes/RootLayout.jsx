import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

function RootLayout(children) {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
