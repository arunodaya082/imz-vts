import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';

import DoughntChart from '../common/Doughntchart2';
import PieChart from "../common/piechart";
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '7rem'
  },
  paper: {
    marginBottom: theme.spacing(1),

  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  gridSpace: {
    margin: 0,
    width: '100%',
    marginBottom: '1rem'
  }
}));


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

function Inventory() {
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);

  const[networkList,setNetworkList] = useState([
    {id:0,name:"BSNL"},
    {id:1,name:"Airtel"},
    {id:2,name:"Jio"}
  ]);

  const [network,setNetwork] = useState("");

 

  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Inventory Dashboard ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>


       

        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>

        <Typography style={{background: "#f4f4f4",padding:"4px", fontWeight: "bold", borderRadius: "4px", color: "#000" }}>
            Inventory Dashboard
          </Typography>
          {/* For sim inventory */}




        <Grid xs={12}  style={{padding:"8px"}}>
       


          <Paper style={{marginTop:"10px"}} >
          <Grid xs={12} style={{  padding: "8px", }}>

                <Typography style={{padding:"4px", fontWeight: "bold"}}>
                  Sim Inventory
                </Typography> 

                <Grid container xs={11} style={{padding:"8px"}}>

                  <Grid xs={3} style={{marginLeft:"106px",marginRight:"66px"}}>
                    <PieChart />
                  </Grid>

                  <Grid xs={3} style={{marginRight:"66px"}}>
                    <DoughntChart/>
                  </Grid>

                  <Grid xs={3}>
                    <PieChart/>
                  </Grid>
                  



               
                </Grid>  

          </Grid>

          </Paper>


          {/* Device Inventory */}

          <Paper style={{marginTop:"10px",padding: "8px",}} >
          <Grid xs={12} style={{  padding: "8px", }}>

                <Typography style={{padding:"4px", fontWeight: "bold"}}>
                  Device Inventory
                </Typography> 

                <Grid container xs={12}>
               
                </Grid>  

          </Grid>

          </Paper>

          {/* Sim Mapped Device */}


          <Paper style={{marginTop:"10px"}} >
          <Grid xs={12} style={{  padding: "8px", }}>

                <Typography style={{padding:"4px", fontWeight: "bold"}}>
                Sim Mapped Device
                </Typography> 

                <Grid container xs={12}>
               
                </Grid>  

          </Grid>

          </Paper>


          {/* Vehicle Inventory */}


          <Paper style={{marginTop:"10px"}} >
          <Grid xs={12} style={{  padding: "8px", }}>

                <Typography style={{padding:"4px", fontWeight: "bold"}}>
                Vehicle Inventory
                </Typography> 

                <Grid container xs={12}>
               
                </Grid>  

          </Grid>

          </Paper>

          {/* Transporter Inventory */}

          <Paper style={{marginTop:"10px"}} >
          <Grid xs={12} style={{  padding: "8px", }}>

                <Typography style={{padding:"4px", fontWeight: "bold"}}>
                Transporter Inventory
                </Typography> 

                <Grid container xs={12}>
               
                </Grid>  

          </Grid>

          </Paper>
          </Grid>
          
        </Paper>
      </Container>
    </div>
  )
}

export default Inventory;