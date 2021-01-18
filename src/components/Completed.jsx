import React, { useState } from 'react';
import ic_sort from '../assets/icons/ic_sort.svg';
import ic_filter from '../assets/icons/ic_filter.svg';
import ic_parcel_box from '../assets/icons/ic-parcel_box.png';
import number_plate from '../assets/icons/number_plate.svg';

const CompletedView = () => {
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);

  return (
    <div className="vehicle-details mt-8 pl-3">
      <div className="grid grid-cols-5 p-3 text-black text-sm font-bold text-center heading">
        <p>Task Id</p>
        <p>Vehicle No.</p>
        <p>Done By.</p>
        <p>Remarks</p>
        <div className="flex flex-row">
          <img src={ic_sort} className="w-16" alt="sort" />
          <img src={ic_filter} style={{ width: '4.5rem' }} alt="filter" />
        </div>
      </div>

      <div
        className={
          hidden1
            ? 'vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
            : 'vehicle-info-card-active vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
        }
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
          <img src={number_plate} className="w-40 inline" alt="number_plate" />
          <p className="number-plate text-black">RJ 01S 4589</p>
        </div>
        <div className="pt-4 text-center">
          <p>Name of Supervisor</p>
        </div>
        <div className="pt-3">
          <p className="text-black">ndk.gnkslnglns</p>
        </div>
        <div className="pt-4 text-orange">
          <p
            className="underline pointer"
            id="view-details"
            onClick={() => setHidden1(prevState => !prevState)}
          >
            View Details
          </p>
        </div>

        <div
          className={
            hidden1
              ? 'col-span-5 mt-6 horizontal-progress-bar flex flex-row text-left hidden'
              : 'col-span-5 mt-6 horizontal-progress-bar flex flex-row text-left'
          }
          id="vehicle-horizontal-progress"
        >
          <div className="arrival flex flex-row flex-no-wrap">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              ARRIVAL
              <br />
              <span className="text-grey text-xs">Location A, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 9:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-6">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="unloading flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              UNLOADING
              <br />
              <span className="text-grey text-xs">Location B, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 11:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              LOADING
              <br />
              <span className="text-grey text-xs">Location C, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 12:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-4">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              DEPARTURE
              <br />
              <span className="text-grey text-xs">Location D, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 1:30 AM</span>
            </p>
          </div>
        </div>
      </div>

      <div
        className={
          hidden2
            ? 'vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
            : 'vehicle-info-card-active vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
        }
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
          <img src={number_plate} className="w-40 inline" alt="number_plate" />
          <p className="number-plate text-black">RJ 01S 4589</p>
        </div>
        <div className="pt-4 text-center">
          <p>Name of Supervisor</p>
        </div>
        <div className="pt-3">
          <p className="text-black">ndk.gnkslnglns</p>
        </div>
        <div className="pt-4 text-orange">
          <p
            className="underline pointer"
            id="view-details"
            onClick={() => setHidden2(prevState => !prevState)}
          >
            View Details
          </p>
        </div>

        <div
          className={
            hidden2
              ? 'col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left'
              : 'col-span-5 mt-6 horizontal-progress-bar flex flex-row text-left'
          }
          id="vehicle-horizontal-progress"
        >
          <div className="arrival flex flex-row flex-no-wrap">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              ARRIVAL
              <br />
              <span className="text-grey text-xs">Location A, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 9:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-6">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="unloading flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              UNLOADING
              <br />
              <span className="text-grey text-xs">Location B, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 11:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              LOADING
              <br />
              <span className="text-grey text-xs">Location C, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 12:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-4">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              DEPARTURE
              <br />
              <span className="text-grey text-xs">Location D, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 1:30 AM</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          hidden3
            ? 'vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
            : 'vehicle-info-card-active vehicle-info-card grid grid-cols-5 p-3 mb-4 text-grey font-bold text-sm text-center'
        }
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
          <img src={number_plate} className="w-40 inline" alt="number_plate" />
          <p className="number-plate text-black">RJ 01S 4589</p>
        </div>
        <div className="pt-4 text-center">
          <p>Name of Supervisor</p>
        </div>
        <div className="pt-3">
          <p className="text-black">ndk.gnkslnglns</p>
        </div>
        <div className="pt-4 text-orange">
          <p
            className="underline pointer"
            id="view-details"
            onClick={() => setHidden3(prevState => !prevState)}
          >
            View Details
          </p>
        </div>

        <div
          className={
            hidden3
              ? 'col-span-5 mt-6 horizontal-progress-bar flex flex-row hidden text-left'
              : 'col-span-5 mt-6 horizontal-progress-bar flex flex-row text-left'
          }
          id="vehicle-horizontal-progress"
        >
          <div className="arrival flex flex-row flex-no-wrap">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              ARRIVAL
              <br />
              <span className="text-grey text-xs">Location A, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 9:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-6">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="unloading flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              UNLOADING
              <br />
              <span className="text-grey text-xs">Location B, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 11:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              LOADING
              <br />
              <span className="text-grey text-xs">Location C, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 12:30 AM</span>
            </p>
          </div>
          <div className="w-24 h-2 rounded-full bg-gray mt-2 relative -ml-4">
            <div className="absolute top-0 left-0 h-2 bg-green rounded-full"></div>
          </div>
          <div className="arrival flex flex-row ml-4 flex-no-wrap -ml-1">
            <span className="circle w-6 h-6 rounded-full bg-white inline-block flex-none"></span>
            <p className="text-black ml-2 text-sm flex-none">
              DEPARTURE
              <br />
              <span className="text-grey text-xs">Location D, Noida</span>
              <br />
              <span className="text-black text-xs -mt-3">7 July, 1:30 AM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedView;
