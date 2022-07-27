import React from 'react';
import "./sidebar.css";

const SidebarMenu = ({Icon,title}) => {
  return (
    <div className='sidebar_Menu'>
        <Icon className="sidebar_icon"/>
        <h3 className='sidebar_title'>{title}</h3>

    </div>
  )
}

export default SidebarMenu;