import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';
import './PendingLogs.css';

import MoonIco from '../../images/moon-icon.svg';
import ShoesIco from '../../images/shoes-icon.svg';

const logs = [
  {
    icon: ShoesIco,
    duration: 35,
    title: 'Aerobic workout',
    time: '06/19 4:00pm'
  },
  {
    icon: MoonIco,
    duration: 15,
    title: 'Power Nap',
    time: '06/19 @2:00pm'
  },
  {
    icon: ShoesIco,
    duration: 35,
    title: 'Aerobic workout',
    time: '06/19 4:00pm'
  },
  {
    icon: MoonIco,
    duration: 15,
    title: 'Power Nap',
    time: '06/19 @2:00pm'
  }
];

function PendingLogs() {
  return (
    <div className="text-white">
      <h5 className='mb-0'>Review Pending Logs</h5>
      <div className="log-scroll-wrapper">
        {logs.map((log, index) => (
          <div className="log-card" key={index}>
            <Card className="card-custom">
              <div className="d-flex justify-content-between mb-1">
                <img src={log.icon} alt="icon" />
                <div className="d-flex align-items-baseline duration-wrapper">
                  <div className='duration fw-bold pr-2'>{log.duration}</div>
                  <span className='text-md'>min</span>
                </div>
                
              </div>
              <FaPen  style={{position:"absolute", top:10, right:20, fontSize:"15px"}} />
              <div className="text-center title">{log.title}</div>
              <div className="text-center mb-2 time">{log.time}</div>
              <div className="d-flex gap-1">
                <Button className="btn-confirm w-100 border-0">Confirm</Button>
                <Button className="border-0 btn-dismiss w-100">Dismiss</Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PendingLogs;
