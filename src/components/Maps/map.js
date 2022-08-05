import React from "react";
import { Container, Paper } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import Pageheader from '../common/PageHeader/pageheader2';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const useStyles = makeStyles((theme) => ({

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

const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Map ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  

export default function SimpleMap(){

  const classes = useStyles();
  const { isOpen } = useContext(SidebarContext);
  const defaultProps = {
    center: {
      lat: 28.495761,
      lng: 77.079330
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className='dashboard_home' xs={12} md={12} lg={12} style={{ marginLeft: isOpen ? "201px" : "14px" }} >
    <Container style={{ paddingRight: isOpen ? '5px' : "13px" }} >


    <div style={{ marginLeft: isOpen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>
      {/* top page header  */}


      <Paper className={classes.paper} id='left' style={{ width: isOpen ? '106%' : '112%', padding: '0.5rem', marginLeft: isOpen ? "25px" : "10px" }}>


    <div style={{ height: '100vh', width: '100%' }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAxu4AIfJS8BOI8H3LYIOB40YWIaE3UdX0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat= {28.495761}
          lng= {77.079330}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

    </Paper>
    </Container>
    </div>
  );
}