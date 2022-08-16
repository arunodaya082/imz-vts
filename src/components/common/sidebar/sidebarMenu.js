import React, { useState } from 'react';
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { Dashboard } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';
import { Divider } from '@material-ui/core';
import {RiLogoutBoxRFill} from "react-icons/ri";
import { SidebarContext } from './sidebarContext';
import { useContext } from 'react';
import {TbReportAnalytics} from "react-icons/tb";

const Sidebar = () => {

  const [windowwidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowheight, setWindowHeight] = React.useState(window.innerHeight);
  
  
  const { isopen } = useContext(SidebarContext);
  const history = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleLogout = async () => {
    window.open(`/`, '_self')
    window.localStorage.clear()
  }
  
  
  const handleClick = (value) => {
    history(`${value}`, { replace: true });
    window.open(`/${value}`, '_self')
  }
  
  const handleWindowResize = () => {
  setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
 
    <div className='sidebar' style={{ width: isopen ? "220px" : "60px", flex: isopen ? 0.1 : 0.3}}>
      <div className='top-menu'>
        <div className='navlink dropdown' onClick={() => handleClick('/')}>
          <div className='sidebar_icon' style={{ width: '20px' }}>
            <Dashboard />
          </div>
          {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Dashboard </div> : ""}
        </div>

        <div className='showDivReport'>
          <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('gpshealthdashboard')} >

            <div className='sidesubmenu_icon' style={{width:'20px'}}>
                 {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=Summary' ? 1 : 0.5 }} src={SummaryIcon} alt='route' /> */}
                 <TbReportAnalytics/>
            </div>
            <div className='sidebarsubmenu_title text-white ml-2 font-weight-bolder' > Gps Health Dashboard </div>

          </div>
          <Divider />

          <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('tripdashboard')}>
            <div className='sidesubmenu_icon' style={{width:'20px'}}>  
             {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
             <TbReportAnalytics/>
            </div>
            <div className='sidebarsubmenu_title text-white ml-2 font-weight-bolder' > Trip Summary Dashboard  </div>

          </div>
          <Divider/>
          </div>
        <Divider />

        <div className='navlink ' onClick={() => handleClick('live')}>
          <div className='sidebar_icon' style={{ width: '20px' }}>
            {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}

            <LocationOnIcon />
          </div>

          {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Live Status </div> : ""}
        </div>
        <Divider />

        <div className='navlink ' onClick={() => handleClick('inventory')}>
          <div className='sidebar_icon' style={{ width: '20px' }}>

            <StoreIcon />
          </div>

          {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder'>Inventory Management </div> : ""}
        </div>

        <Divider />

        <div className='navlink ' onClick={() => handleClick('maps')}>
          <div className='sidebar_icon' style={{ width: '20px' }}>

            <MapIcon />
          </div>

          {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Maps </div> : ""}
        </div>
        <Divider />



{/* Report section with drop down menu */}

        <div className='navlink  dropdown' >
          <div className='sidebar_icon' style={{ width: '20px' }}>  
          {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'reportsgps' || window.location.pathname.split("/")[1] == 'reports' ? 1 : 0.5 }} className='ml-1' src={reportIcon} alt='route' /> */}
           <DescriptionIcon/>
          </div>
          {isopen ?  <div className='sidebar_title text-white ml-2 font-weight-bolder'>Reports </div>:""}
        </div>
        
        

        <div className='showDivReport'>
          <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('reports?type=summary')} >

            <div className='sidesubmenu_icon' style={{width:'20px'}}>
                 {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=Summary' ? 1 : 0.5 }} src={SummaryIcon} alt='route' /> */}
                 <TbReportAnalytics/>
            </div>
            <div className='sidebarsubmenu_title text-white ml-2 font-weight-bolder' > Summary Report </div>

          </div>
          <Divider />

          <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('Movement')}>
            <div className='sidesubmenu_icon' style={{width:'20px'}}>  
             {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
             <TbReportAnalytics/>
            </div>
            <div className='sidebarsubmenu_title text-white ml-2 font-weight-bolder' > Movement Report  </div>

          </div>
          <Divider />
          <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('reports?type=overspeed')} >
            <div className='sidesubmenu_icon' style={{width:'20px'}}>   
            {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=overspeed' ? 1 : 0.5 }} src={OverSpeedIcon} alt='route' /> */}
            <TbReportAnalytics/>
            </div>
            <div className='sidebarsubmenu_title text-white ml-2 font-weight-bolder' > Over Speed Report  </div>
          </div>
          
          <Divider/>
          </div>

    <Divider />

     
                <div className='navlink' onClick={handleLogout}>
                <div className='sidebar_icon' style={{width:'20px'}}>  
                 {/* <img className='ml-1' src={logoutIcon} alt='route' /> */}
                 <RiLogoutBoxRFill />
                </div> 
                    <div className='sidebar_title text-white ml-2 font-weight-bolder' >Logout </div>  
                </div>
            </div>
      </div>

    
  )
}

export default Sidebar; 
