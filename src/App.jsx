import React from 'react';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import MediKarmaScreen1 from './components/medikarmascreen1/MediKarmaScreen1';
import './app.css'

const App = () => {
  return (
   <>

   {/* <LoginScreen/>
   <DashboardScreen /> */}
   <div className='app-bg'>
   <MediKarmaScreen1 />
   </div>
   </>
  );
};

export default App;
