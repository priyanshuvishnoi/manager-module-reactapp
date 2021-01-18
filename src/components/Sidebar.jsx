import React from 'react';
import today_task_icon_off from '../assets/icons/ic_today_task_off.svg';
import future_task_icon_off from '../assets/icons/ic_future_task_icon.svg';
import completed_task_icon_off from '../assets/icons/ic_completed_task_icon.svg';
import rejected_task_icon_off from '../assets/icons/ic_rejected_task_icon.svg';
import brand_logo from '../assets/icons/brand_logo.png';

const SideBar = ({ setCurrent }) => {
  return (
    <div className="side-nav pr-6 pt-8 text-right ml-auto">
      <div className="brand-logo">
        <img src={brand_logo} className="w-24 inline" alt="Haul Logo" />
      </div>
      <div
        className="today-tasks mt-24 flex flex-row pointer"
        onClick={() => {
          setCurrent(0);
        }}
      >
        <div>
          <img src={today_task_icon_off} className="inline" alt="Today Tasks" />
          <br />
          <b>Today Tasks</b>
        </div>
      </div>

      <div
        className="future-tasks mt-10 flex flex-row pointer"
        onClick={() => {
          setCurrent(1);
        }}
      >
        <div>
          <img
            src={future_task_icon_off}
            className="inline"
            alt="Future Tasks"
          />
          <br />
          <b>Future Tasks</b>
        </div>
      </div>

      <div className="completed-tasks mt-10 flex flex-row pointer">
        <div></div>

        <div>
          <img
            src={completed_task_icon_off}
            className="inline"
            alt="Completed Tasks"
          />
          <br />
          <b>Completed</b>
        </div>
      </div>
      <div className="rejected-tasks mt-10 flex flex-row pointer">
        <div></div>

        <div>
          <img
            src={rejected_task_icon_off}
            className="inline"
            alt="Rejected Tasks"
          />
          <br />
          <b>Rejected</b>
        </div>
      </div>
      <br />
      <br />
      <a
        href="./index.html"
        className="bg-black text-white rounded-full p-3 mr-2 pointer"
      >
        Reports
      </a>
    </div>
  );
};

export default SideBar;
