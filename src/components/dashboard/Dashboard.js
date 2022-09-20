import React from "react";
import { useState,useEffect } from "react";
import "./dashboard.css";
import { Container, Paper, Typography, Grid, TextField, Button, } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import isLoadingHOC from "../common/isloadingHoc";
import { SidebarContext } from "../common/sidebar/sidebarContext";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import Pageheader from "../common/PageHeader/pageheader2";
import deviation from "../../assests/deviation.png";
import overspeeding from "../../assests/overspeeding.png";
import unauthorised from "../../assests/unauthorised.png";
import temparing from "../../assests/temparing.png";
import GoogleMapReact from "google-map-react";
import Marker from "../Maps/marker";
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "7rem",
  },
  side: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper2: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    marginRight: "12px",
    color: theme.palette.text.primary,
  },
  paper3: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    marginRight: "22px",
    width: "100%",
    height: "590px",
    color: theme.palette.text.primary,
  },

  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  gridSpace: {
    margin: 0,
    width: "100%",
    marginBottom: "1rem",
  },
}));

export const  Dashboard= props=> {

  const {setLoading} = props;
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);




  const defaultProps = {
    center: {
      lat: 28.495761,
      lng: 77.07933,
    },
    zoom: 11,
  };

  const [searchbar, setSearchbar] = useState(true);

  const [region, setRegion] = useState([
    { name: "East" },
    { name: "West" },
    { name: "North" },
    { name: "South" },
  ]);

  const [regionValue, setRegionValue] = useState("");

  const [hub, setHub] = useState([
    { name: "Delhi" },
    { name: "Gurgaon" },
    { name: "Noida" },
    { name: "Rajasthan" },
  ]);

  const [hubValue, setHubValue] = useState("");

  const header = [
    {
      id: 0,
      label: "Total Transporters",
      value: 105,
      color: "#52be2b",
      background: "#dbf5d2",
    },
    {
      id: 1,
      label: "Total Registered Vehicles",
      value: 220,
      color: "",
      background: "",
    },
    {
      id: 2,
      label: "Total GPS Devices Installed",
      value: 200,
      color: "",
      background: "",
    },
    {
      id: 3,
      label: "Total Active Devices",
      value: 150,
      color: "",
      background: "",
    },
    {
      id: 4,
      label: "Vehicles In Network",
      color: "",
      value: 150,
      background: "",
    },
    {
      id: 5,
      label: "Vehicles Out of Network",
      color: "",
      value: 32,
      background: "",
    },
    {
      id: 6,
      label: "Non Active Devices",
      color: "",
      value: 25,
      background: "",
    },
    {
      id: 7,
      label: "Vehicles Under Maintenance",
      color: "",
      value: 15,
      background: "",
    },
   
  ];

  const topViewData = {
    title: "Home ",
    subTitleFirst: "/ Dashboard ",
    subTitleSecond: "",
    subTitleThird: "",
    buttonIcon: false,
    buttonText: "",
    ButtonClick: "",
    backPath: "/dashboard",
    backPathSecond: "/maps",
    addButtonPath: "",
    addButton: false,
    addCancelClick: "",
    addClick: "",
    editButton: false,
    editButtonClick: "",
    updatePermission: [],
    updateButton: false,
    goBackEditClick: "",
    updateClick: "",
    addButtonPermission: "",
  };


  useEffect(() => { 
    setLoading(false);
  }, [])
  



  return (
    <div
      className="dashboard_home"
      style={{
        width: isopen ? "108%" : "112%",
        marginLeft: isopen ? "221px" : "14px",
      }}
    >
      <Container
        style={{
          width: isopen ? "106%" : "112%",
          paddingRight: isopen ? "32px" : "42px",
        }}
      >
        <div
          style={{
            width: isopen ? "108%" : "112%",
            marginLeft: isopen ? "6px" : "14px",
          }}
        >
          <Pageheader data={topViewData} />
        </div>

        {/* top page header  */}

        <div
          style={{
            width: isopen ? "108%" : "112%",
            marginLeft: isopen ? "6px" : "12px",
          }}
        >
          <Grid
            container
            xs={12}
            style={{
              width: isopen ? "108%" : "115%",
              marginLeft: isopen ? "2px" : "6px",
            }}
          >
            <Grid item container xs={9}>
              {/* alerts */}
              <Grid item container xs={12}>
                <Grid item xs={3} >
                  <Paper className={classes.paper2}>
                    <Grid container spacing={2}>
                      <Grid item xs={3} className="mt-1">
                        <img src={deviation} />
                      </Grid>

                      <Grid item xs={9}>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          Route Deviation
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          35
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={3} className="mt-2 mb-3">
                  <Paper className={classes.paper2}>
                    <Grid container spacing={2}>
                      <Grid item xs={3} className="mt-1">
                        <img src={overspeeding} alt="overspeeding" />
                      </Grid>

                      <Grid item xs={9}>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          OverSpeeding
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          16
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={3} style={{ marginBottom: "2px" }}>
                  <Paper className={classes.paper2}>
                    <Grid container spacing={2} style={{ marginBottom: "-12px" }} >
                      <Grid item xs={3} className="mt-1">
                        <img src={unauthorised} alt="unauthorised" />
                      </Grid>

                      <Grid item xs={9}>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          Unauthorised Stoppage
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",

                          }}
                        >
                          11
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                <Grid item xs={3} className="mt-2 mb-3">
                  <Paper className={classes.paper2}>
                    <Grid container spacing={2}>
                      <Grid item xs={3} className="mt-1">
                        <img src={temparing} alt="temparing" />
                      </Grid>

                      <Grid item xs={9}>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          Tampering
                        </Typography>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "13px",
                            paddingLeft: "13px",
                          }}
                        >
                          02
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>

              {/* maps */}

              <Grid xs={12} style={{ paddingTop: "10px", marginRight: "12px" }}>
                <div className="mapcontainer">
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyA5Lt3E5gYb-lfogvaSpCrvCpocLqHwNOI',
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  // options={getMapOptions}
                  >
                    <Marker
                      lat={28.495582}
                      lng={77.079365}
                      name="My Marker"
                      color="blue"
                    />
                  </GoogleMapReact>
                </div>
              </Grid>
            </Grid>

            {/* side section */}

            <Grid  xs={3} >

              
              <Paper className={classes.paper3} >

                {
                  header && header.map((head,index)=>(
                    <>
                    
                    <Grid container xs={12} style={{padding:"14px"}}>
                      <Grid xs={2}>
                       
                          <Avatar>
                            <ImageIcon/>
                          </Avatar>
                       
                      </Grid>
                      <Grid xs={10} >
                        <Typography style={{fontSize:"12px",fontWeight:"bold",marginLeft:"12px"}}>
                          {head.label}
                        </Typography>

                        <Typography style={{fontSize:"12px",fontWeight:"bold",marginLeft:"12px"}}>
                          {head.value}
                        </Typography>


                      </Grid>
                    

                    </Grid>
                      <Divider/>
                      </>



                    
                  ))
                }
                


              </Paper>

              </Grid>
              
            
            </Grid>
         
        </div>
      </Container>
    </div>
  );
}

export default isLoadingHOC(Dashboard,"please wait we loading your data");
