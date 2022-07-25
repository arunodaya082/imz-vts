import React from 'react';
import "./sidebar.css";
import { Dashboard } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';
import { Divider, Typography } from '@material-ui/core';

const Sidebar = () => {

// const handleLogout = async () => {
//     window.open(`/`, '_self')
//     window.localStorage.clear()
// }

const handleClick = (value) => {
    // history(`${value}`,{replace:true});
    window.open(`/${value}`, '_self')

}
 
  return (
    <div className='sidebar'>
        <div className='top-menu'>
              <div className='navlink ' onClick={() => handleClick('dashboard')}>
                    <div className='sidebar_icon' style={{ width: '20px' }}>
                      {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}
                      <Dashboard/>
                      </div>
                      
                      <Typography className='text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Dashboard </Typography>
              </div>
              <Divider/>

              <div className='navlink ' onClick={() => handleClick('live')}>
                    <div  className='sidebar_icon' style={{ width: '20px' }}>
                      {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}
                      <LocationOnIcon/>
                      </div>
                      
                      <div className='text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Vehicle Live Status </div>
              </div>
              <Divider/>

              <div className='navlink ' onClick={() => handleClick('inventory')}>
                    <div className='sidebar_icon' style={{ width: '20px' }}>
                      {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}
                      <StoreIcon/>
                      </div>
                      
                      <div className='text-white ml-2 font-weight-bolder'style={{marginTop:"8px"}}>Inventory Management </div>
              </div>

              <Divider/>

              <div className='navlink ' onClick={() => handleClick('maps')}>
                    <div  className='sidebar_icon' style={{ width: '20px' }}>
                      {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}
                      <MapIcon/>
                      </div>
                      
                      <div className='text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Maps </div>
              </div>
              <Divider/>

              <div className='navlink ' onClick={() => handleClick('misreport')}>
                    <div className='sidebar_icon' style={{ width: '20px' }}>
                      {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}
                      <DescriptionIcon/>
                      </div>
                      
                      <div className='text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>MIS Reports </div>
              </div>


          </div>
    </div>
  )
}

export default Sidebar;