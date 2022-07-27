import {React} from 'react';
import "./navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import logo1 from "../../../assests/logo1.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from '@material-ui/core';
import { SidebarContext } from '../sidebar/sidebarContext';
import { useContext } from 'react';

const Header = () => {

  const {isOpen,sidebarToggle} = useContext(SidebarContext);


  return (
    <div className="header">
      <div className='header_left'>
          <MenuIcon   isOpen={isOpen} onClick={sidebarToggle}/>
          <img className='header_logo' src={logo1} alt="logo"/>
      </div>

      <div className='header_right'>
        <div className='header_notifications'>
          <NotificationsIcon  className='header_icon'/>
          <Typography>
            Notifications
          </Typography>
        </div>

        <div className='header_user'>
          <Avatar className='header_icon'/>
          <Typography variant='body1' style={{marginTop:"6px", fontSize:"16px",fontWeight:"bold"}}>
            Admin
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Header;