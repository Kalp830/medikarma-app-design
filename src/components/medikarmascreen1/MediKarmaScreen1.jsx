import React from 'react';
import RadarChart from './RadarChart';
import { Container, Row, Col } from 'react-bootstrap';
import MenuIcon from '../../images/burger-icon.svg';
import CircleImg from '../../images/ladyin-circle.svg';
import PendingLogs from './PendingLogs';
import FilterHeader from './FilterHeader';
import refershIco from '../../images/referesh-icon.svg';

const MediKarmaScreen1 = () => {
  return (
    <div className="min-h-screen flex flex-col text-white ">
      {/* Top Section */}
      <header>
        <Container fluid>
          <Row className="flex items-center px-2  space-y-4 ">
            <Col xs={7}>
              <div className="flex justify-between items-center ">
                <img className="w-8" src={MenuIcon} alt="menu" />
                <h4 className="fw-normal mb-0">medikarma</h4>
              </div>
              <h2 className="mt-3 text-xl">my vitals</h2>
            </Col>
            <Col xs={5} className="flex justify-end items-center lady-img">
              <img src={CircleImg} alt="lady" />
              <div className="refresh-btn ml-2">
                <img src={refershIco} alt="refresh" style={{ width: "30px", maxWidth: "100%" }} />
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Middle Section - Grow to fill remaining height */}
      <main className="flex-grow-1 flex flex-col justify-center px-3 space-y-4">
        <RadarChart />
        <FilterHeader />
      </main>

      {/* Bottom Section */}
      <footer>
        <Container fluid>
          <PendingLogs />
        </Container>
      </footer>
    </div>
  );
};

export default MediKarmaScreen1;
