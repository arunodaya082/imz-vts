import {React} from 'react';
import "./navbar.css";
import {TbLayoutSidebarRightExpand} from 'react-icons/tb';
import logo1 from "../../../assests/logo1.png";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from '@material-ui/core';
import { SidebarContext } from '../sidebar/sidebarContext';
import { useContext } from 'react';
import useWindowSize from "../custom_hooks/useWindow";

const Header = () => {

  const { width } = useWindowSize();
  
  const {isopen,sidebarToggle} = useContext(SidebarContext);
  
  
  return (
    
    <div className="header">
        <div className='header_left'>
          {isopen ? <TbLayoutSidebarRightExpand className='sideclose' isopen={isopen} onClick={sidebarToggle} size={28}/> : <TbLayoutSidebarRightExpand className='sideopen' onClick={sidebarToggle} size={28}/>}
          <img className='header_logo' src={logo1} alt="logo"/>
      </div>
      {width > 500 && 

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
        }
    </div>
 
)
}

export default Header;