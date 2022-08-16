import React from 'react';
import { useState } from 'react';
import "./dashboard.css"
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import PieChart from "../common/piechart2";
import DChart from "../common/piechart";

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



function Dashboard() {
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);

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


  const header = [
    { id: 0, label: "Total Transporters", value: 105, color: "#52be2b", background: "#dbf5d2" },
    { id: 1, label: "Total Registered Vehicles", value: 220, color: "", background: "" },
    { id: 2, label: "Total GPS Devices Installed", value: 200, color: "", background: "" },
    { id: 3, label: "Total Active Devices", value: 150, color: "", background: "" },
  ]

  const header2 = [
    { id: 0, label: "Vehicles In Network", color: "", value: 150, background: "" },
    { id: 1, label: "Vehicles Out of Network", color: "", value: 32, background: "" },
    { id: 2, label: "Non Active Devices", color: "", value: 25, background: "" },
    { id: 3, label: "Vehicles Under Maintenance", color: "", value: 15, background: "" },
  ]

  const alerts = [
    { id: 0, label: "Route Deviation", color: "", value: 12, background: "" },
    { id: 1, label: "OverSpeeding", color: "", value: 15, background: "" },
    { id: 2, label: "Unauthorised Stoppage", color: "", value: 35, background: "" },
    { id: 3, label: "Tampering", color: "", value: 5, background: "" }

  ]

  const tripsummary = [
    { id: 0, label: "Total Trips Today", color: "", value: 169, background: "" },
    { id: 1, label: "Vehicles On Trip", color: "", value: 92, background: "" },
    { id: 2, label: "Completed Trips", color: "", value: 110, background: "" },
    { id: 3, label: "Delayed Trios", color: "", value: 46, background: "" },
  ]



  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Dashboard ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>


        {/* dashboard search section  */}

        {!searchbar &&
          <Grid container xs={12} style={{ marginLeft: isopen ? "25px" : "10px" }}>

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
                <Typography style={{ marginTop: "16px", fontSize: "18px", fontWeight: "bold", }}>
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

                <Typography style={{ marginTop: "16px", fontSize: "18px", fontWeight: "bold", }}>
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

                <Typography gutterBottom variant="subtitle1" style={{ marginTop: "24px", fontSize: "18px", fontWeight: "bold", }}>
                  <Button variant="contained" style={{ padding: '6px' }} >
                    Search
                  </Button>
                </Typography>

              </Grid>

            </Grid>

          </Grid>
        }


<Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>

<Typography>
  Alerts:
</Typography>
<Grid container xs={12}>



  <Grid xs={3}>
    <Typography> 
      Route-Deviation : 03
    </Typography>
  </Grid>

  <Grid xs={3}>
    <Typography>
      Over-Speeding : 08
    </Typography>
  </Grid>

  <Grid xs={3}>
    <Typography>
      Unauthorised Stoppage : 13
    </Typography>
  </Grid>

  <Grid xs={3}>
    <Typography>
      Tampering : 02
    </Typography>
  </Grid>
</Grid>

</Paper>


        {/* gps health dashboard data view */}

        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>

          <Grid xs={12} style={{ background: "#f4f4f4", padding: "8px", }}>

            <Typography style={{ fontWeight: "bold", borderRadius: "4px", color: "#00" }}>
              GPS Health Dashboard
            </Typography>
          </Grid>



          <Grid container xs={12} style={{ display: "inline-flex", marginTop: "6px" }}>
            <Grid xs={1}>

            </Grid>

            <Grid xs={3} style={{ paddingLeft: "20px" }}>
              <Typography style={{ marginTop: "6px", marginLeft: "108px", fontSize: "12px", fontWeight: "bold" }}>
                GPS Health Pie Chart
              </Typography>
              <DChart />
            </Grid>

            <Grid xs={1}>
            </Grid>
            <Grid xs={5} style={{ padding: "20px", marginLeft: "30px", marginTop: "45px" }}>
              {
                header.map((head, index) => (
                  <Grid xs={5} style={{ background: "#f4f4f4", padding: "8px", marginBottom: "16px", border: "1px solid black", borderRadius: "6px" }}>

                    <Typography style={{ fontWeight: "bold", borderRadius: "4px", color: "#00" }}>

                      {head.label}
                    </Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>

          </Paper>



          {/* Gps Vehicle Status */}

        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>


        <Grid container xs={12} style={{ display: "inline-flex", marginTop: "6px" }}>

        <Grid xs={12} style={{ background: "#f4f4f4", padding: "8px", }}>

              <Typography style={{ fontWeight: "bold", borderRadius: "4px", color: "#00" }}>
                GPS Vehicle Status
              </Typography>
        </Grid>



            <Grid xs={1}>

            </Grid>

            <Grid xs={3} style={{ paddingLeft: "20px" }}>
              <Typography style={{ marginTop: "6px", marginLeft: "108px", fontSize: "12px", fontWeight: "bold" }}>
                GPS Vehicle  Pie Chart
              </Typography>
              <PieChart />
            </Grid>

            <Grid xs={1}>
            </Grid>
            <Grid xs={5} style={{ padding: "20px", marginLeft: "30px", marginTop: "45px" }}>
              {
                header2.map((head, index) => (
                  <Grid xs={5} style={{ background: "#f4f4f4", padding: "8px", marginBottom: "16px", border: "1px solid black", borderRadius: "6px" }}>

                    <Typography style={{ fontWeight: "bold", borderRadius: "4px", color: "#00" }}>

                      {head.label}
                    </Typography>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>

          </Paper>

          
      </Container>
    </div>
  )
}

export default Dashboard;