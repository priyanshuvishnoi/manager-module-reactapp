import React from 'react';
import { Link } from 'react-router-dom';
import ic_parcel_box from '../assets/icons/ic-parcel_box.png';
import number_plate from '../assets/icons/number_plate.svg';

const RejectedView = () => {
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
      <RejectedList />
    </React.Fragment>
  );
};

export default RejectedView;

const RejectedList = () => {
  return (
    <React.Fragment>
      <div className="vehicle-details mt-8 pl-3">
        <div className="grid grid-cols-5 p-3 text-black text-sm font-bold text-center heading">
          <p>Task ID</p>
          <p>Vehicle No.</p>
          <p>Done By</p>
          <p>Action</p>
          <p>Reason</p>
        </div>

        <div
          className="vehicle-info-card vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center"
          id="vehicle-info-card"
        >
          <div className="text-left">
            <img
              src={ic_parcel_box}
              alt="parcel-box"
              className="inline w-16"
              style={{ verticalAlign: 'middle' }}
            />
            123
          </div>
          <div className="relative pt-2">
            <img
              src={number_plate}
              className="w-40 inline"
              alt="number_plate"
            />
            <p className="number-plate text-black">RJ 01S 4589</p>
          </div>
          <div className="pt-4 text-center">
            <p>Name of Supervisor</p>
          </div>
          <div className="pt-3">
            <p className="text-black">ReRouted to WH1</p>
          </div>
          <div className="pt-4 text-orange">
            <p className="underline pointer">No Load</p>
          </div>

          <div
            className="col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left"
            id="vehicle-horizontal-progress"
          ></div>
        </div>

        <div
          className="vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center"
          id="vehicle-info-card"
        >
          <div className="text-left">
            <img
              src={ic_parcel_box}
              alt="parcel-box"
              className="inline w-16"
              style={{ verticalAlign: 'middle' }}
            />
            123
          </div>
          <div className="relative pt-2">
            <img
              src={number_plate}
              className="w-40 inline"
              alt="number_plate"
            />
            <p className="number-plate text-black">RJ 01S 4589</p>
          </div>
          <div className="pt-4 text-center">
            <p>Name of Supervisor</p>
          </div>
          <div className="pt-3">
            <p className="text-black">ReRouted to WH1</p>
          </div>
          <div className="pt-4 text-orange">
            <p className="underline pointer">Vehicle Delay</p>
          </div>

          <div
            className="col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left"
            id="vehicle-horizontal-progress"
          ></div>
        </div>
        <div
          className="vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center"
          id="vehicle-info-card"
        >
          <div className="text-left">
            <img
              src={ic_parcel_box}
              alt="parcel-box"
              className="inline w-16"
              style={{ verticalAlign: 'middle' }}
            />
            123
          </div>
          <div className="relative pt-2">
            <img
              src={number_plate}
              className="w-40 inline"
              alt="number_plate"
            />
            <p className="number-plate text-black">RJ 01S 4589</p>
          </div>
          <div className="pt-4 text-center">
            <p>Name of Supervisor</p>
          </div>
          <div className="pt-3">
            <p className="text-black">ReRouted to WH1</p>
          </div>
          <div className="pt-4 text-orange">
            <p className="underline pointer">No Load</p>
          </div>

          <div
            className="col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left"
            id="vehicle-horizontal-progress"
          ></div>
        </div>

        <div
          className="vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center"
          id="vehicle-info-card"
        >
          <div className="text-left">
            <img
              src={ic_parcel_box}
              alt="parcel-box"
              className="inline w-16"
              style={{ verticalAlign: 'middle' }}
            />
            123
          </div>
          <div className="relative pt-2">
            <img
              src={number_plate}
              className="w-40 inline"
              alt="number_plate"
            />
            <p className="number-plate text-black">RJ 01S 4589</p>
          </div>
          <div className="pt-4 text-center">
            <p>Name of Supervisor</p>
          </div>
          <div className="pt-3">
            <p className="text-black">ReRouted to WH1</p>
          </div>
          <div className="pt-4 text-orange">
            <p className="underline pointer">Vehicle Delay</p>
          </div>

          <div
            className="col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left"
            id="vehicle-horizontal-progress"
          ></div>
        </div>

        <div
          className="vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center"
          id="vehicle-info-card"
        >
          <div className="text-left">
            <img
              src={ic_parcel_box}
              alt="parcel-box"
              className="inline w-16"
              style={{ verticalAlign: 'middle' }}
            />
            123
          </div>
          <div className="relative pt-2">
            <img
              src={number_plate}
              className="w-40 inline"
              alt="number_plate"
            />
            <p className="number-plate text-black">RJ 01S 4589</p>
          </div>
          <div className="pt-4 text-center">
            <p>Name of Supervisor</p>
          </div>
          <div className="pt-3">
            <p className="text-black">ReRouted to WH1</p>
          </div>
          <div className="pt-4 text-orange">
            <p className="underline pointer">No Load</p>
          </div>

          <div
            className="col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left"
            id="vehicle-horizontal-progress"
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};
