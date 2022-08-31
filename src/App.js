import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { lazy,Suspense} from 'react';
import "./App.css";
// common module 
import Header from './components/common/navbar/navbar';
import Sidebar from './components/common/sidebar/sidebar';
import { SidebarContext } from './components/common/sidebar/sidebarContext';
// import Map from "./components/Maps/live-track";
// import LiveMap2 from './components/Maps/liveTrack/livetrack2';
import Map from './components/Maps/live-track';


//  lazy loading 
const Dashboard = lazy(()=>import ('./components/dashboard/Dashboard'));
const DashboardTrip = lazy(() => import('./components/dashboard/TripDashboard'));
const UserList = lazy(() => import('./components/User_Management/userlist'));
const TrackPlay = lazy(() => import('./components/Trackplay/trackplay'));
const Vehiclelive = lazy(()=>import ('./components/Vehicle_live_Status/vehicle_live'));
const Inventory = lazy(() => import('./components/Inventory_Management/inventoryDashboard'));
const SimInventory = lazy(() => import('./components/Inventory_Management/SimInventory/simInventory'));
const SimpleMap = lazy(() => import('./components/Maps/map'));
// const Reports = lazy(() => import('./components/Mis_Reports/Reports'));
// const RouteList = lazy(() => import('./components/Route_Management/routelist'));



// main app 

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

      <Suspense fallback={<div>Loading...</div>} >
        <Routes>
        <Route  path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='tripdashboard' element={<DashboardTrip />} /> 
          <Route path='userlist' element={<UserList />} /> 
           <Route path='trackplay' element={<TrackPlay />} />
          <Route path='live' element={<Vehiclelive />} />
          <Route path='livemap' element={<Map />} />
          <Route path='inventoryDashboard' element={<Inventory />} /> 
          <Route path='maps' element={<SimpleMap />}/>
          <Route path='siminventory' element={<SimInventory />}/> 
          {/*
          <Route path='route' element={<RouteList />}/>
          <Route path='reports' element={<Reports />}/>
          */}

        </Routes>
        </Suspense>
        

      </div>
      </SidebarContext.Provider>
     
      </Router>
    </div>
  )
}

export default App