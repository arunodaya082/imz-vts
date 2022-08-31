import React from 'react';
import { useEffect, useState } from "react";
import { useContext } from 'react';
import "../dashboard/dashboard.css";
import { Container, Paper, Typography, Grid, Button, TextField, } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import AirplaneMarker from "./trackmarker.js";
import geopoints from "./geo-location.json";
import newGeoPoints from "./newpoints.json";
import { Autocomplete } from '@material-ui/lab';
import "./style.css";




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


const header = [
  { id: 0, label: "Total Transporters", value: 105, color: "#52be2b", background: "#dbf5d2" },
  { id: 1, label: "Total Registered Vehicles", value: 220, color: "", background: "" },
  { id: 2, label: "Total GPS Devices Installed", value: 200, color: "", background: "" },
  { id: 3, label: "Total Active Devices", value: 150, color: "", background: "" },
]





let cursor = 0;

const TrackPlay=()=> {
  const classes = useStyles();
  const [currentTrack, setCurrentTrack] = useState({});
  const { isopen } = useContext(SidebarContext);
  

  useEffect(() => {
    setCurrentTrack(geopoints[cursor]);

    const interval = setInterval(() => {
      if (cursor === geopoints.length - 1) {
        cursor = 0;
        setCurrentTrack(geopoints[cursor]);
        return;
      }

      cursor += 1;
      setCurrentTrack(geopoints[cursor]);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  

  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Track Play ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >

        <Grid container xs={12}>

        <Grid  xs={10}>
            <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
              <Pageheader data={topViewData} />
            </div>
        </Grid>

        <Grid xs={2}>
          <Button
          >
            
          </Button>

        </Grid>



        </Grid>
        {/* top page header  */}





     


<Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>


        <Grid xs={12} style={{ marginLeft: "26px" }}>
          <Typography
            style={{ padding: "6px", fontWeight: "bolder", marginTop: "6px", display: "inline-flex", }}>
            Track Play
          </Typography>
          <hr style={{ width: "98%", borderTop: "1px solid black", marginRight: "48px" }} />
        </Grid>



        <Grid container xs={12} style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>
        <MapContainer
        style={{ height: "50vh", width: "100wh" }}
        center={[22.2974883, 73.2067383]}
        zoom={17}
        minZoom={5}
        keepAtCenter={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={newGeoPoints} color="red" />
        <AirplaneMarker data={currentTrack ?? {}} />
      </MapContainer>
    </Grid>

        
  </Paper>

          
      </Container>
    </div>
  )
}

export default TrackPlay;