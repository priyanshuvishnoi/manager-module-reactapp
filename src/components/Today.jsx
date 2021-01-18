import React from 'react';
import { Link } from 'react-router-dom';
import VehicleList from './VehicleList';

const Vehicle = () => {
  return (
    <React.Fragment>
      <div
        className="flex flex-row mt-12"
        style={{ marginLeft: '30px', marginRight: '30px' }}
      >
        <p className="text-2xl font-black text-grey">Your Vehicles</p>
        <Link
          to="/"
          className="bg-orange text-white rounded-full p-3  ml-auto pointer"
        >
          Go Back
        </Link>
        <p
          className="ml-auto text-md pt-1 px-4 rounded-full"
          style={{ color: '#212121', border: '1px solid #212121' }}
        >
          Total Count: <span className="font-bold"> 10 </span>
        </p>
      </div>
      <VehicleList />
    </React.Fragment>
  );
};

export default Vehicle;
