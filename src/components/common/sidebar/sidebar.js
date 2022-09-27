import React, { useState } from 'react';
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { Dashboard } from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import DescriptionIcon from '@material-ui/icons/Description';
import { Divider } from '@material-ui/core';
import { RiLogoutBoxRFill } from "react-icons/ri";
import { SidebarContext } from './sidebarContext';
import { useContext } from 'react';
import { TbReportAnalytics } from "react-icons/tb";
import { FaRoute,FaSimCard,FaUserCog } from "react-icons/fa";
import useWindowSize from '../custom_hooks/useWindow';
import {MdOutlineInventory2,MdOutlineSimCard} from "react-icons/md";
import {GiGps} from "react-icons/gi";
import help1 from "../../../assests/help1.png"

const Sidebar = () => {

  const { width } = useWindowSize();

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

  return (
    <>
      {width > 500 && (
        <div className='sidebar' style={{ width: isopen ? "220px" : "60px", flex: isopen ? 0.1 : 0.3 }}>
          <div className='top-menu'>
            <div className='navlink active' onClick={() => handleClick('dashboard')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                <Dashboard />
              </div>
              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Dashboard </div> : ""}
            </div>
            <Divider />

            <div className='navlink active' onClick={() => handleClick('tripdashboard')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                <Dashboard />
              </div>
              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Trip Dashboard </div> : ""}
            </div>
            <Divider />

            <div className='navlink' onClick={() => handleClick('userlist')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                <FaUserCog/>
              </div>
              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >User Management </div> : ""}
            </div>
            <Divider />

            <div className='navlink' onClick={() => handleClick('trackplay')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                <GiGps/>
              </div>
              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >TrackPlay </div> : ""}
            </div>
            <Divider />


            <div className='navlink ' onClick={() => handleClick('live')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'dashboard' ? 1 : 0.5, width: '30px' }} className='ml-1' src={dashboardIcon} alt='User' /> */}

                <LocationOnIcon />
              </div>

              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Trip Status </div> : ""}
            </div>
            <Divider />

            {/* <div className='navlink' onClick={() => handleClick('livemap')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                <GiGps/>
              </div>
              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Live Status </div> : ""}
            </div>
            <Divider /> */}

              <div className='navlink ' onClick={() => handleClick('live-track')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>

                <MapIcon />
              </div>

              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Track Live </div> : ""}
            </div>
            <Divider />

            <div className='navlink dropdown' >
              <div className='sidebar_icon' style={{ width: '20px' }}>

                <StoreIcon />
              </div>

              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder'>Inventory Management </div> : ""}

            </div>




            <div className='showDivReport'>
              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('inventoryDashboard')} >

                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=Summary' ? 1 : 0.5 }} src={SummaryIcon} alt='route' /> */}
                  <MdOutlineInventory2 />
                </div>
                {isopen && <div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Inventory Dashboard </div>}

              </div>
              <Divider />
              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('simInventory')} >

                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=Summary' ? 1 : 0.5 }} src={SummaryIcon} alt='route' /> */}
                  <MdOutlineSimCard />
                </div>
                {isopen &&<div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Sim Inventory </div>}

              </div>
              <Divider />

              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('deviceInventory')}>
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen &&  <div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Device Inventory  </div>}

              </div>
              <Divider />
              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('mapppedSimDevice')} >
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=overspeed' ? 1 : 0.5 }} src={OverSpeedIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen && <div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Mapped Sim  Device  </div>}
              </div>
              <Divider />

              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('vehicleinventory')}>
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen && <div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Vehicle Inventory  </div>}

              </div>
              <Divider />


              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('transportInventory')}>
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen &&  <div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Transporter Inventory  </div>}

              </div>

              <Divider />
              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('installationApproval')}>
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                 {isopen &&<div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Installation Approval  </div>}

              </div>


              <Divider />
            </div>


            <Divider />

          

            <div className='navlink ' onClick={() => handleClick('routes')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>

                <FaRoute />
              </div>

              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder' >Route Management </div> : ""}
            </div>
            <Divider />



            {/* Report section with drop down menu */}

            <div className='navlink  dropdown' >
              <div className='sidebar_icon' style={{ width: '20px' }}>
                {/* <img style={{ opacity: window.location.pathname.split("/")[1] == 'reportsgps' || window.location.pathname.split("/")[1] == 'reports' ? 1 : 0.5 }} className='ml-1' src={reportIcon} alt='route' /> */}
                <DescriptionIcon />
              </div>
              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder'>Reports </div> : ""}
            </div>



            <div className='showDivReport'>
              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('reports?type=summary')} >

                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=Summary' ? 1 : 0.5 }} src={SummaryIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen &&<div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Summary Report </div>}

              </div>
              <Divider />

              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('reports?type=movement')}>
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=running' ? 1 : 0.5 }} src={RunningIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen &&<div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Movement Report  </div>}

              </div>
              <Divider />
              <div className='text-white p-2 pl-4 navlink' onClick={() => handleClick('reports?type=overspeed')} >
                <div className='sidesubmenu_icon' style={{ width: '20px' }}>
                  {/* <img style={{ opacity: window.location.search.split("?")[1] == 'type=overspeed' ? 1 : 0.5 }} src={OverSpeedIcon} alt='route' /> */}
                  <TbReportAnalytics />
                </div>
                {isopen &&<div className='sidebarsubmenu_title text-white ml-3 font-weight-bolder' > Over Speed Report  </div>}
              </div>

              <Divider />
            </div>

            <Divider />

            <div className='navlink ' onClick={() => handleClick('ticket')}>
              <div className='sidebar_icon' style={{ width: '20px' }}>

                <img src={help1} alt="helpdesk image" style={{height:"20px", width:"20px"}}/>
              </div>

              {isopen ? <div className='sidebar_title text-white ml-2 font-weight-bolder'>Help Desk </div> : ""}
            </div>
            <Divider />


            <div className='navlink' onClick={handleLogout}>
              <div className='sidebar_icon' style={{ width: '20px' }}>
                {/* <img className='ml-1' src={logoutIcon} alt='route' /> */}
                <RiLogoutBoxRFill />
              </div>
              {isopen && <div className='sidebar_title text-white ml-2 font-weight-bolder' >Logout </div>}
            </div>
          </div>
        </div>

      )
      }
    </>


  )
}

export default Sidebar;