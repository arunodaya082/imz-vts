import React, { useState } from 'react';
import "./App.css";
import Header from './components/common/navbar/navbar';
import Sidebar from './components/common/sidebar/sidebar';
import TripDashboard from './components/dashboard/TripDashboard';
import Dashboard from './components/dashboard/Dashboard';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Vehiclelive from './components/Vehicle_live_Status/vehicle_live';
import Inventory from './components/Inventory_Management/inventory_manageement';
import Reports from './components/Mis_Reports/Reports';
import SimpleMap from './components/Maps/map';
import EmergencyReport from './components/Mis_Reports/emergencyReport';
import { SidebarContext } from './components/common/sidebar/sidebarContext';
import RouteList from './components/Route_Management/routelist';




const App = () => {
 
  const [sidebarOpen, setSidebarOpen] = useState(true);


  function handleSidebar () {
    setSidebarOpen(!sidebarOpen);
  }

   
  return (


    <div>

      <Router>
     
     
      <SidebarContext.Provider value={{isopen: sidebarOpen, sidebarToggle: handleSidebar}}>
      <Header  />
      <div className='homepage'>
      
      <Sidebar  />
        <Routes>
        <Route  path="/" element={<Dashboard />} />
          <Route  path="/dashboard" element={<Dashboard />} />
          {/* <Route  path="/" element={<GpsHealthDashboard />} /> */}
          <Route  path='/tripdashboard' element={<TripDashboard />} /> 
          <Route path='live' element={<Vehiclelive/>} />
          <Route path='maps' element={<SimpleMap/>}/>
          <Route path='route' element={<RouteList/>}/>
          <Route path='inventory' element={<Inventory/>} /> 
          <Route path='reports' element={<Reports/>}/>
        </Routes>
        

      </div>
      </SidebarContext.Provider>
     
      </Router>
    </div>
  )
}

export default App