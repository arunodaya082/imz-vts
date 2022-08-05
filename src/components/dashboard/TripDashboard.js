import React from 'react';
import { useState } from 'react';
import "./dashboard.css"
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import {FiTruck} from "react-icons/fi";
import LockTable from '../common/tablelist';

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


const columns = [
  { id: 'srno', label: 'Sr. No.', minWidth: 50,align: 'center' },
  { id: 'date', label: 'Date', minWidth: 100,align: 'center' },
  {
    id: 'deviceId',
    label: 'Device ID',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vehcileNo',
    label: 'Vehicle No.',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'imei',
    label: 'IMEI',
    minWidth: 100,
    align: 'center',
    
  },
  {
    id: 'tracking',
    label: 'Tracking Data',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(srno,date,deviceId,vehcileNo,imei,tracking) {
  
  return { srno,date,deviceId, vehcileNo, imei, tracking };
}

const rows = [
  createData('1','03/08/2022','India', 'IN', 1324171354, 3287263),
  createData('2','03/08/2022','China', 'CN', 1403500365, 9596961),
  createData('3','03/08/2022','Italy', 'IT', 60483973, 301340),
  createData('4','03/08/2022','United States', 'US', 327167434, 9833520),
  createData('5','03/08/2022','Canada', 'CA', 37602103, 9984670),
  createData('6','03/08/2022','Australia', 'AU', 25475400, 7692024),
  createData('7','03/08/2022','Germany', 'DE', 83019200, 357578),
  createData('8','03/08/2022','Ireland', 'IE', 4857000, 70273),
  createData('9','03/08/2022','Mexico', 'MX', 126577691, 1972550),
  createData('10','03/08/2022','Japan', 'JP', 126317000, 377973),
  createData('11','03/08/2022','France', 'FR', 67022000, 640679),
  createData('12','03/08/2022','United Kingdom', 'GB', 67545757, 242495),
  createData('13','03/08/2022','Russia', 'RU', 146793744, 17098246),
  createData('14','03/08/2022','Nigeria', 'NG', 200962417, 923768),
  createData('15','03/08/2022','Brazil', 'BR', 210147125, 8515767),
];



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

function TripDashboard() {
  const classes = useStyles();
  const { isOpen } = useContext(SidebarContext);

  const [searchbar, setSearchbar] = useState(true);

  const [region, setRegion] = useState([
    { name: "East" },
    { name: "West" },
    { name: "North" },
    { name: "South" }
  ]);


  const [regionValue, setRegionValue] = useState("");


  const [hub, setHub] = useState([
    { name: "Delhi" },
    { name: "Gurgaon" },
    { name: "Noida" },
    { name: "Rajasthan" }
  ]);

  const [hubValue, setHubValue] = useState("");


  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Dashboard ', 'subTitleSecond': '/ Gps dashboard', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isOpen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isOpen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isOpen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>


        {/* dashboard search section  */}

        {!searchbar &&
          <Grid container xs={12} style={{ marginLeft: isOpen ? "25px" : "10px" }}>

            <Grid xs={7} style={{ marginTop: "16px" }}>

              <Typography style={{ marginLeft: "4px", marginTop: "22px", fontWeight: "bold", fontSize: "20px" }}>
                <h5>
                  Dashboard
                </h5>
              </Typography>

            </Grid>

            {/* search with options  */}
            <Grid container xs={5} style={{ alignItems: "flex-end" }}>
              <Grid xs={5}>
                <Typography style={{ marginTop: "16px", fontSize: "18px", fontWeight: "bold",   }}>
                  <Autocomplete id='header'
                    getOptionLabel={(region) => region.name}

                    options={region || []}
                    getOptionSelected={(option, value) => option.name === value.name}

                    onChange={(event, newValue) => setRegionValue(newValue)}
                    renderInput={(params) =>
                      <TextField
                        {...params}
                        variant="outlined"
                        margin='dense'
                        size="small"
                        style={{ background: "#fff", color: "#000" }}
                        placeholder='Select Region'
                      />
                    }
                  />

                </Typography>
              </Grid>


              <Grid xs={5}>

                <Typography style={{ marginTop: "16px", fontSize: "18px", fontWeight: "bold",   }}>
                  <Autocomplete id='header'
                    getOptionLabel={(hub) => hub.name}

                    options={regionValue && hub || []}
                    getOptionSelected={(option, value) => option.name === value.name}

                    onChange={(event, newValue) => setHubValue(newValue)}
                    renderInput={(params) =>
                      <TextField
                        {...params}
                        variant='outlined'
                        margin='dense'
                        color="primary"
                        size="small"
                        style={{ background: "#fff", color: "#000" }}
                        placeholder='Select Hub'
                      />
                    }
                  />
                </Typography>
              </Grid>

              <Grid item xs={2} >

                <Typography gutterBottom variant="subtitle1" style={{ marginTop: "24px", fontSize: "18px", fontWeight: "bold",   }}>
                    <Button variant="contained" style={{ padding: '6px' }} >
                      Search
                    </Button>
                </Typography>

              </Grid>

            </Grid>

          </Grid>
        }


        {/* gps health dashboard data view */}

        <Paper className={classes.paper} id='left' style={{ width: isOpen ? '106%' : '112%', padding: '0.5rem', marginLeft: isOpen ? "25px" : "10px" }}>

          <Grid xs={12} style={{ background: "#f4f4f4", padding: "8px", }}>

            <Typography style={{ fontWeight: "bold", borderRadius: "4px", color: "#00" }}>
              Trip Dashboard
            </Typography>
          </Grid>

          <Grid container xs={12} style={{padding:"16px"}}>

          <Grid container xs={12}>
            <Grid xs={3}>
              <Typography>
                Vehicles in Network
              </Typography>
            </Grid>

            <Grid xs={3}>
              <Typography>
                Vehicles Out Of Network :
              </Typography>
            </Grid>

            <Grid xs={3}>
              <Typography>
                Non Active Devices :
              </Typography>
            </Grid>

            <Grid xs={3}>
              <Typography>
                Vehicles under Maintenance :
              </Typography>
            </Grid>

          </Grid>
        </Grid>


        <Paper>

        <Grid container xs={12} style={{padding:"20px"}}>
          
          <Typography style={{fontWeight:"bold",margin:"6px"}}>
            Active Vehicles
          </Typography>

          <LockTable columns={columns} rows={rows}/>

        
        </Grid>



        </Paper>


        </Paper>
      </Container>
    </div>
  )
}

export default TripDashboard;