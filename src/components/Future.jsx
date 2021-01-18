import React, { useState } from 'react';

const FutureList = () => {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showSupervisorPopup, setShowSupervisorPopup] = useState(false);
  const [proceed, setProceed] = useState(false);

  return (
    <React.Fragment>
      <div
        className="flex flex-row mt-12"
        style={{ marginLeft: '30px', marginRight: '30px' }}
      >
        <p className="text-2xl font-black text-grey">Your Vehicles</p>
        <p
          className="ml-auto text-md pt-1 px-4 rounded-full"
          style={{ color: '#212121', border: '1px solid #212121' }}
        >
          Total Count: <span className="font-bold"> 10 </span>
        </p>
      </div>

      <div className="future-details mt-8 pl-3">
        <div
          className={
            showConfirmPopup
              ? 'absolute bg-orange load-popup pt-6 text-white'
              : 'absolute bg-orange load-popup pt-6 hidden text-white'
          }
        >
          <p className="">
            <span className="font-bold">Vehicle :-</span> RJ-02-GB-3344
          </p>
          <br />
          <p className="">
            <span className="font-bold">ETA :-</span> 19/06/2020 @ 10:00 AM
          </p>
          <p className="">
            <span className="font-bold">Unloading :-</span> start @ 10:25 AM
          </p>
          <p className="">
            <span className="font-bold">Loading :-</span> start @ 12:00 PM
          </p>

          <br />
          <br />

          <p>Do you confirm the availability of load ?</p>
          <br />
          <p className="text-white bg-black py-1 px-2 w-32 rounded-full m-auto">
            Load Status
          </p>
          <br />
          <table className="table-fixed text-xs m-auto status-table">
            <thead>
              <tr>
                <th className="px-3 py-2 text-white">Date</th>
                <th className="px-3 py-2 text-white">Commodity</th>
                <th className="px-3 py-2 text-white">Quantity</th>
                <th className="px-3 py-2 text-white">Destination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2">20.06.20</td>
                <td className="px-3 py-2">SPLIT AC</td>
                <td className="px-3 py-2">64</td>
                <td className="px-3 py-2">GURGAON</td>
              </tr>
            </tbody>
          </table>

          <div className="flex flex-row justify-center space-x-8 mt-12">
            <p
              className="bg-black text-white px-3 py-2 rounded-md pointer"
              id="load-yes"
              onClick={() => setShowConfirmPopup(prevState => !prevState)}
            >
              Yes
            </p>
            <p
              className="bg-black text-white px-3 py-2 rounded-md pointer"
              id="load-no"
              onClick={() => setShowConfirmPopup(prevState => !prevState)}
            >
              No
            </p>
          </div>
        </div>

        <div
          className={
            showSupervisorPopup
              ? 'absolute bg-orange bypass bypass-popup pt-48'
              : 'absolute bg-orange bypass bypass-popup pt-48 hidden'
          }
        >
          <p className="text-white">
            Are you sure, you want to bypass the supervisor
          </p>
          <br />
          <div className="flex flex-row justify-center space-x-8">
            <p
              className="bg-black text-white px-3 py-2 rounded-md pointer"
              id="bypass-yes"
              onClick={() => setProceed(prevState => !prevState)}
            >
              Yes
            </p>
            <p
              className="bg-black text-white px-3 py-2 rounded-md pointer"
              id="bypass-no"
            >
              No
            </p>
          </div>
        </div>

        <div
          className={
            proceed
              ? 'absolute bg-orange bypass bypass-reason-popup pt-48 text-center'
              : 'absolute bg-orange bypass bypass-reason-popup pt-48 hidden text-center'
          }
        >
          <p className="text-white">Please enter the reason for bypass</p>
          <br />
          <input
            type="text"
            name=""
            value={undefined}
            className="bypass-reason-input w-64"
          />
          <br />
          <p
            className="bg-black m-auto text-white px-3 py-2 rounded-md pointer w-12 text-center"
            id="bypass-ok"
            onClick={() => {
              setProceed(prevState => !prevState);
              setShowSupervisorPopup(prevState => !prevState);
            }}
          >
            OK
          </p>
        </div>
        <div className="row">
          <div className="col-12 grid grid-cols-8 gap-3 pl-8">
            <div className="h-8">
              <p className="bg-black text-white p-1 py-2 rounded-md text-center">
                RJ 02 GB 4327
              </p>
            </div>

            <div className="progress-bar col-span-4 h-8 relative">
              <div className="progress-bar w-full h-3 bg-grey rounded-full mt-3">
                <div className="progress bg-green w-0 h-3 rounded-full"></div>
              </div>

              <div className="arrival-info text-small absolute top-0 text-center">
                <p>Arrival</p>
                <p>9:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>

              <div className="unloading-info text-small absolute top-0 text-center">
                <p>Unloading</p>
                <p>10:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>

              <div className="loading-info text-small absolute top-0 text-center">
                <p>Loading</p>
                <p>12:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>

              <div className="departure-info text-small absolute top-0 text-center">
                <p>Departure</p>
                <p>01:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>
            </div>

            <div className="confirmed-btn h-8" id="confirmed-btn">
              <p
                className="bg-black text-white p-1 py-2 rounded-md pointer text-center"
                onClick={() => setShowConfirmPopup(prevState => !prevState)}
              >
                CONFIRMED
              </p>
            </div>

            <div className="done-btn h-8" id="bypass-btn">
              <p
                className="bg-black text-white p-1 py-2 w-48 rounded-md pointer text-center"
                onClick={() => setShowSupervisorPopup(prevState => !prevState)}
              >
                DONE BY SUPERVISOR
              </p>
            </div>
          </div>

          <div className="col-12 grid grid-cols-8 gap-3 pl-8">
            <div className="h-8">
              <p className="bg-black text-white p-1 py-2 rounded-md text-center">
                RJ 02 GB 4327
              </p>
            </div>

            <div className="progress-bar col-span-4 h-8 relative">
              <div className="progress-bar w-full h-3 bg-grey rounded-full mt-3">
                <div className="progress bg-green w-0 h-3 rounded-full"></div>
              </div>

              <div className="arrival-info text-small absolute top-0 text-center">
                <p>Arrival</p>
                <p>9:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>

              <div className="unloading-info text-small absolute top-0 text-center">
                <p>Unloading</p>
                <p>10:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>

              <div className="loading-info text-small absolute top-0 text-center">
                <p>Loading</p>
                <p>12:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>

              <div className="departure-info text-small absolute top-0 text-center">
                <p>Departure</p>
                <p>01:30 AM</p>
                <div className="bg-white h-6 w-6 rounded-full m-auto mt-2 dot"></div>
              </div>
            </div>

            <div className="confirmed-btn h-8" id="confirmed-btn">
              <p
                className="bg-black text-white p-1 py-2 rounded-md pointer text-center"
                onClick={() => setShowConfirmPopup(prevState => !prevState)}
              >
                CONFIRMED
              </p>
            </div>

            <div className="done-btn h-8" id="bypass-btn">
              <p
                className="bg-black text-white p-1 py-2 w-48 rounded-md pointer text-center"
                onClick={() => setShowSupervisorPopup(prevState => !prevState)}
              >
                DONE BY SUPERVISOR
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FutureList;
