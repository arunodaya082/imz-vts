import React from 'react';
import "./App.css";
import Header from './components/common/navbar/navbar';
import Sidebar from './components/common/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Vehiclelive from './components/Vehicle_live_Status/vehicle_live';
import Inventory from './components/Inventory_Management/inventory_manageement';
import Misreports from './components/Mis_Reports/misreports';
import Map from './components/Maps/map';


const App = () => {
  return (
    <div  className='App'>
      <Router>

      <Header  />

      <div className='homepage'>
        <Sidebar/>
        <Routes>
          <Route path='dashboard' element={<Dashboard/>} /> 
          <Route path='live' element={<Vehiclelive/>} /> 
          <Route path='maps' element={<Map/>}/>
          <Route path='inventory' element={<Inventory/>} /> 
          <Route path='misreport' element={<Misreports/>} /> 
          

        </Routes>
        

      </div>

      
      </Router>
    </div>
  )
}

export default App