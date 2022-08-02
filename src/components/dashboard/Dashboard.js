import React from 'react';
import { useState } from 'react';
import "./dashboard.css"
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";
import {FiTruck} from "react-icons/fi";

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

function Dashboard() {
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
              GPS Health Dashboard
            </Typography>
          </Grid>

           

              <Grid container xs={12} style={{display:"inline-flex",marginTop:"6px"}}>


                <Grid xs={4}>
                    
                    <Typography variant='outlined' style={{border:"1px solid black"}}>
                          <FiTruck/>
                          Total Transporters
                    </Typography>
                </Grid>

                <Grid xs={4}>

                </Grid>
                <Grid xs={4}>

                </Grid>
                <Grid xs={4}>

                </Grid>

              </Grid>

           

          {/* gps health part 2 */}

          {/* <Grid container direction='row' xs={12}>

            <Grid xs={3} >

              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
              />

            </Grid>

            <Grid container xs={9}>

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

          </Grid> */}
          {/* gps health alert part */}

          <Typography>
            Alerts:
          </Typography>
          <Grid container xs={12}>



            <Grid xs={3}>
              <Typography>
                Route-Deviation
              </Typography>
            </Grid>

            <Grid xs={3}>
              <Typography>
                Over-Speeding :
              </Typography>
            </Grid>

            <Grid xs={3}>
              <Typography>
                Unauthorised Stoppage :
              </Typography>
            </Grid>

            <Grid xs={3}>
              <Typography>
                Tampering :
              </Typography>
            </Grid>
          </Grid>

        </Paper>

        {/* Trip Summary Dashboard */}

        <Paper className={classes.paper} id='left' style={{ width: isOpen ? '106%' : '112%', padding: '0.5rem', marginLeft: isOpen ? "25px" : "10px" }}>

          <Grid xs={12} style={{ background: "#f4f4f4", padding: "8px", }}>

            <Typography style={{ fontWeight: "bold", borderRadius: "4px", color: "#00" }}>
            Trip Summary Dashboard
          </Typography>
          </Grid>   
            
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
        </Paper>
      </Container>
    </div>
  )
}

export default Dashboard;