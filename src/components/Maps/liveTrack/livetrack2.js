import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import Rating  from '@material-ui/lab';
import useStyles from "./MapStyles"

const LiveMap = ({setCoordinates,setBounds,bounds}) => {
    // const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')

    let coordinates = { lat:28.5030863,lng:77.0869175};
    
    return (
        <div className={classes.mapContainer}>

           <GoogleMapReact
           bootstrapURLKeys={{key:'AIzaSyCc5FjlVhBE2hZkuM1OUbixXGsVXnRwZ4o'}}
           defaultCenter={coordinates}
           center={coordinates}
           defaultZoom={14}
           margin={[50,50,50,50]}
           options={''}
           onChange={''
            //    (e)=>{ 
            //    console.log("ee",e)
            //    setCoordinates({lat:e.center.lat,lng:e.center.lng});
            //    setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})}
        }
           onChildClick={''}
           >

           </GoogleMapReact>
        </div>
    );
}

export default LiveMap
