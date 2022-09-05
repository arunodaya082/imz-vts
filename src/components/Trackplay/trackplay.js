import React from 'react';
import { useEffect, useState } from "react";
import { useContext } from 'react';
import "../dashboard/dashboard.css";
import { Container, Paper, Typography, Grid, Button, TextField, } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import AirplaneMarker from "./trackmarker.js";
import geopoints from "./geo-location.json";
import newGeoPoints from "./newpoints.json";
import { Autocomplete } from '@material-ui/lab';
import osm from './osm-provider';
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
  const [currentSpeed,setCurrentSpeed] = useState(10);
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


        <Grid container xs={12} direction="row" style={{ marginLeft: "8px", padding: "6px" }}>
          
          
          <Grid xs={2} style={{marginLeft:"16px",marginRight:"4px",marginTop:"6px"}} >

            {/* <FormControl >
              <FormLabel id="demo-row-radio-buttons-group-label">Select Type</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                type="radio"
                value={selectType}
                onChange={handleChange}
              >
                <FormControlLabel value="0" defaultChecked control={<Radio />} label="Device ID" />
                <FormControlLabel value="1" control={<Radio />} label="Vehicle No." />
                <FormControlLabel value="2" control={<Radio />} label="IMEI No." />
              </RadioGroup>
            </FormControl> */}


             <Typography style={{fontSize: "12px", fontWeight: "bold"}}>
                          Select Type
              </Typography> 
                                  <Autocomplete id='header'
                                      // getOptionLabel={(deviceList) => deviceList.name}

                                      // options={deviceList || []}
                                      // getOptionSelected={(option, value) => option.name === value.name}
                                      // value={selectType}

                                      // onChange={(event, newValue) => setSelectType(newValue)}
                                      renderInput={(params) =>
                                          <TextField
                                            {...params}
                                              variant='outlined'
                                              margin='dense'
                                              color="primary"
                                              size="small"
                                              style={{marginLeft:"2px",marginTop:"2px",background:'#fff'}}
                                              placeholder='Select Type'

                                          />
                                      }
                                  />
                              
          </Grid>
      




         
        
          {/* form filling for tracking */}

            <Grid xs={2} style={{marginLeft:"16px",marginTop:"6px"}}>
            <Typography style={{fontSize: "12px", fontWeight: "bold"}}>
              Enter  Value
            </Typography>  

              <TextField
                id="outlined-basic"
                type="text"
                placeholder="Enter Value Type"
                variant="outlined"
                size='small'
                style={{marginTop:"2px",background:'#fff'}}
                // value={typeValue}
                // InputLabelProps={{ shrink: true }}
                // onChange={(e) => { setTypeValue(e.target.value) }}
              />
                
            </Grid>
         

            <Grid xs={2} style={{marginLeft:"16px",marginTop:"8px"}}>
            <Typography style={{fontSize: "12px", fontWeight: "bold"}}>
              Select From Date
            </Typography>  

              <TextField
                id="outlined-basic"
                type="date"
                variant="outlined"
                size='small'
                style={{marginLeft:"2px"}}
                // value={fromDate}
                // onChange={(e) => {setFromDate(e.target.value) }}
              />
            </Grid>

            <Grid xs={2} style={{marginLeft:"24px",marginTop:"8px"}}>
            <Typography style={{fontSize: "12px", fontWeight: "bold"}}>
              Select To Date
            </Typography>  

              <TextField
                id="outlined-basic"
                type="date"
                variant="outlined"
                size='small'
                style={{marginLeft:"2px"}}
                // value={toDate}
                // onChange={(e) => { setToDate(e.target.value) }}
              />
            </Grid>
         
        <Grid xs={2} style={{marginLeft:"20px",marginTop:"26px"}}>
          <Button type="button"
            variant="contained"
            // onClick={search}
            // disabled={isLoading}
            style={{paddingTop:"7px",}}
            color="primary"

            >
            Search
          </Button>
        </Grid>


        </Grid>



        <Grid  container xs={12} style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>
        <MapContainer
        className='mapcontainer'
        center={[22.2974883, 73.2067383]}
        zoom={17}
        minZoom={5}
        
        keepAtCenter={false}
      >
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Polyline positions={newGeoPoints} color="yellow" />
        <AirplaneMarker data={currentTrack ?? {}} />
      </MapContainer>
    </Grid>

        
  </Paper>

          
      </Container>
    </div>
  )
}

export default TrackPlay;