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



        <Grid  container xs={12} style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>


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
           </Grid>
           </Paper>
           </Container>
           </div>
           
        
    );
}

export default LiveMap
