import React from 'react'
import RadarChart from './RadarChart'
import { Container, Row, Col } from 'react-bootstrap';
import MenuIcon from '../../images/burger-icon.svg'
import CircleImg from '../../images/ladyin-circle.svg'
import PendingLogs from './PendingLogs';
import FilterHeader from './FilterHeader';
import refershIco from '../../images/referesh-icon.svg'


const MediKarmaScreen1 = () => {
  return (
    <div className="text-white ">
      <Container className="px-3">
        <Row className='flex items-center'>
        <Col xs={7}>
        <div className='flex justify-between items-center'>
        <img className='w-8' src={MenuIcon}/>
        <h4 className="fw-normal mb-0">medikarma</h4>
        </div>
        <h2 className="mt-3 text-xl">my vitals</h2>
        </Col>
        
        <Col xs={5} className='flex justify-end lady-img'>
        <img src={CircleImg} height="auto"/>
        <div className='refresh-btn'><img src={refershIco} alt='img-refersh' style={{width:"30px", maxWidth:"100%"}}/></div>
        </Col>
        
        </Row>
        <RadarChart />
        <FilterHeader />
        <PendingLogs />
      </Container>
    </div>
  )
}

export default MediKarmaScreen1