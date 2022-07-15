import React from 'react';
import { Grid,Container,Box,Paper, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '1390px',
  height: '580px'
};



const center = {
  lat: 28.495761,
  lng: 77.079330
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard = (open) => {
  return (

       <Paper elevation={3}>

       

        <Grid container spacing={1} style={{padding: "8px"}} >
          
          <Grid item xs={3}>
            <Item>
            <Typography>
                Total No. of Devices
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
            <Typography>
                Total No. of Online Devices
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
            <Typography>
                Total No. of Offline Devices
              </Typography>
              </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Typography>
                Total No. of Low Battery Devices
              </Typography>

          
            </Item>
          </Grid>

           <Grid item xs={12} >
            <Item >
        <LoadScript
      googleMapsApiKey="AIzaSyAxu4AIfJS8BOI8H3LYIOB40YWIaE3UdX0"
      >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              sx={{
                pr:open?3:"auto"
              }}
              >
              {/* Child components, such as markers, info windows, etc.   */}
             
            </GoogleMap>
        </LoadScript>
              
            </Item>
          </Grid> 

        </Grid>
        </Paper>

  )
}

export default Dashboard;