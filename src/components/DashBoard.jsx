import React, { useState } from 'react';
import FutureList from './Future';
import Info from './Info';
import Search from './Search';
import SideBar from './Sidebar';
import Today from './Today';
import WelcomeView from './Welcome';

const DashBoard = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="dashboard">
      <SideBar current={current} setCurrent={setCurrent} />
      <div className="dashboard-view">
        <Search />
        <WelcomeView />
        {current === 0 ? <Today /> : null}
        {current === 1 ? <FutureList /> : null}
      </div>
      <Info current={current} />
    </div>
  );
};

export default DashBoard;
