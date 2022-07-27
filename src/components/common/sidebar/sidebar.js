import React, { useState } from 'react';
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { Dashboard } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';
import { Divider} from '@material-ui/core';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import ExpandLessSharpIcon from '@material-ui/icons/ExpandLessSharp';
import { SidebarContext } from './sidebarContext';
import { useContext } from 'react';

const Sidebar = () => {


  const {isOpen} = useContext(SidebarContext);
  const history = useNavigate();
  const [menuOpen,setMenuOpen] = useState(false);

// const handleLogout = async () => {
//     window.open(`/`, '_self')
//     window.localStorage.clear()
// }


const handleopen=()=>{
setMenuOpen(true);
}

const handleclose=()=>{
setMenuOpen(false);
}

const handleClick = (value) => {
    history(`${value}`,{replace:true});
    window.open(`/${value}`, '_self')
}
 
  return (
    <div className='sidebar' style={{width: isOpen? "220px":"60px",flex : isOpen?0.1 : 0.3}}>
        <div className='top-menu'>
              <div className='navlink ' onClick={() => handleClick('dashboard')}>
                    <div className='sidebar_icon' style={{ width: '20px' }}>
                      <Dashboard/>
                    </div>
                     {isOpen ?  <div className='sidebar_title text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Dashboard </div>:""}
              </div>
              <Divider/>

              <div className='navlink ' onClick={() => handleClick('live')}>
                    <div  className='sidebar_icon' style={{ width: '20px' }}>
                      {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}
                      
                      <LocationOnIcon/>
                      </div>
                      
                      {isOpen ?   <div className='sidebar_title text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Live Status </div>:""}
              </div>
              <Divider/>

              <div className='navlink ' onClick={() => handleClick('inventory')}>
                    <div className='sidebar_icon' style={{ width: '20px' }}>
                      
                      <StoreIcon/>
                      </div>
                      
                      {isOpen ?   <div className='sidebar_title text-white ml-2 font-weight-bolder'style={{marginTop:"8px"}}>Inventory Management </div> :""}
              </div>

              <Divider/>

              <div className='navlink ' onClick={() => handleClick('maps')}>
                    <div  className='sidebar_icon' style={{ width: '20px' }}>
                      
                      <MapIcon/>
                      </div>
                      
                      {isOpen ?   <div className='sidebar_title text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Maps </div>:""}
              </div>
              <Divider/>




              <div className='navlink ' >
                    <div className='sidebar_icon' style={{ width: '20px' }}>
                      
                      <DescriptionIcon/>
                      </div>
                         
                     
                      <div className='sidebar_title text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>Reports </div>
                      
                          <div className='sidebar_title text-white ml-2 font-weight-bolder' style={{marginTop:"8px"}}>
                          {
                          menuOpen ?
                          <ExpandLessSharpIcon  onClick={handleclose}/>
                          :
                          <ExpandMoreSharpIcon onClick={handleopen}/>
                          }
                            </div>

                          <Divider/>

                    {
                    menuOpen && 
                    

                      <div className='showDivReport'>
                                  <div className='text-white mt-5 navlink' onClick={() => handleClick('misreport')} >

                                          <div className='sidebar_icon' style={{ width: '20px',marginLeft:"-20px" }}>  
                                              <DescriptionIcon/>
                                          </div>
                                          <div className='sidebar_title text-white font-weight-bolder' style={{marginTop:"12px",fontSize:"12px"}}>Mis Reports </div>

                                  </div>
                          <Divider/>
                      
                                  <div className='text-white mt-5 navlink' onClick={() => handleClick('emergency')} >

                                          <div className='sidebar_icon' style={{ width: '20px' }}>  
                                              <DescriptionIcon/>
                                          </div>
                                          <div className='sidebar_title text-white font-weight-bolder' style={{marginTop:"12px",fontSize:"12px"}}>Emergency Report </div>

                                  </div>
                          <Divider/>
                      </div>
                      

                      }
                      </div>
                      
               </div>
               <Divider/>
    </div>
  )
}

export default Sidebar;