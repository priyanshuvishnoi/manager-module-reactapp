import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import '../styles/maps.css';

const Home = () => {
  const setCurrent = () => {};
  return (
    <div className="grid grid-cols-6">
      <Link to="/dashboard">
        <div style={{ marginLeft: '60%' }}>
          <SideBar setCurrent={setCurrent} current={4} />
        </div>
      </Link>
      <div className="col-span-5 relative">
        <div className="name-tag absolute top-0 right-0">
          <p className="bg-orange text-white px-2 py-2 rounded-sm font-bold">
            {' '}
            Welcome, Mr Manager
          </p>
        </div>

        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="maps"
              className="w-screen h-screen"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=jamia%20hamdard%20university&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
