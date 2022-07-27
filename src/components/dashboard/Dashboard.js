import React from 'react'
import "./dashboard.css"
import { Container, Paper, Typography } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';


function Dashboard() {
  const {isOpen} = useContext(SidebarContext);

  return (
    <div className='dashboard_home' style={{paddingLeft: isOpen?"220px":"60px"}} >
      <Container  >

        <Paper elevation={3} style={{width:"97%"}}>

          <Typography>
            hii
          </Typography>
        </Paper>
      </Container>
      </div>
  )
}

export default Dashboard;