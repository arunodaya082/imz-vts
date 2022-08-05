import React , { useState,useEffect } from 'react';
// import Container from "@material-ui/core/Container";
import {FormControl, Paper, Container, Typography, Grid, Button } from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from "@material-ui/lab/Autocomplete";
import moment from 'moment';
import {useLocation} from "react-router-dom";
import { TrackingAction } from '../../actions/tracking';

function SelectedDeviceTrackHistory({viewType}) {

    const [fromDate, setFromDate]=React.useState('')
    const [toDate, setToDate]=React.useState('')
  
    const [vehicleList,setVehicleList]=useState([])
  
    const [vehicleGpsId,setVehicleGpsId]=useState('')
    const [siteList, setSiteList] = useState([])
    const [siteListOld, setSiteListOld] = useState([])
    const [routeListOld, setRouteListOld] = useState([])
    const [showRouteList, setShowRouteList]=React.useState([])
    const [routeList, setRouteList]=React.useState([])
    const [siteValue, setSiteValue] = useState([])
    const [vehicleSpeed, setVehicleSpeed] = useState(1)

    const search = useLocation().search;

 


    const topViewData={'title':'History Tracking','subTitleFirst':'Dashboard >','subTitleSecond':'Company >','subTitleThird':'History Tracking','buttonIcon':false,"buttonText":' Add Vendor','ButtonClick':'','backPath':'/dashboard','backPathSecond':'/dashboard','addButtonPath':'/adduser','addButton':'','addCancelClick':'','addClick':'','editButton':'','editButtonClick':'','updatePermission':['1'],'updateButton':'','goBackEditClick':'','updateClick':'','addButtonPermission':false,hideBtn:new URLSearchParams(search).get('lng') && true}
    useEffect(() => {
  
      fetchVehicleList()
      let newDate = new Date();
      newDate.setHours(newDate.getHours() - 1);
      setFromDate(moment(newDate).format("YYYY-MM-DDTHH:mm"));
      setToDate(moment(new Date()).format("YYYY-MM-DDTHH:mm"))
      }, []);

      function toTimestamp(strDate){
        var datum = Date.parse(strDate);
        return datum;
     }
      const newVehicle = (val) =>{
        console.log(val)
        setVehicleGpsId(val)

      }




    const fetchVehicleList = () => {  
      TrackingAction.fetchTracking(
        {

        }
      ).then((response) => {
          if (response != null) {
              setVehicleList(response)
          }
          else {
            setVehicleList([])
          }
        });
    }










    return (
    <div className='makeStylesRoot'>
      <Container>
    
    <Paper>
    <Toolbar style={{marginLeft:"428px",marginTop:'10px'}}>

    <Grid  container spacing={3}  >

<Grid item xs={2} md={2} lg={2} >
<FormControl variant="filled" margin="normal"  >

          <Typography className="font14 greyfirstheading"  gutterBottom variant="subtitle1">
              
                </Typography>
                <Typography  variant="body2" gutterBottom>
                <Autocomplete
                    multiple
                    style={{ background: '#fff' }}
                    getOptionLabel={(option) => option.name}
                    className='user'
                    limitTags={1}
                    options={siteListOld || []}
                    filterSelectedOptions
                    getOptionSelected={(option, value) => option.name === value.name}
                    value={siteValue}
                    disableClearable
                    disablePortal={true}
                    renderInput={(params) =>
                      <TextField
                        {...params}
                        variant='outlined'
                        margin='dense'
                        placeholder='Select Emergency'
                      />
                    }
                  />
                </Typography>
      </FormControl>
  </Grid>

  <Grid item xs={2} md={2} lg={2} >
<FormControl variant="filled" margin="normal"  >

          <Typography className="font14 greyfirstheading"  gutterBottom variant="subtitle1">
               Select Route 
                </Typography>
                <Typography  variant="body2" gutterBottom>
                <Autocomplete
                    multiple
                    style={{ background: '#fff' }}
                    getOptionLabel={(option) => option.name}
                    className='user'
                    limitTags={1}
                    options={routeList || []}
                    filterSelectedOptions
                    getOptionSelected={(option, value) => option.name === value.name}
                    disableClearable
                    disablePortal={true}
                    renderInput={(params) =>
                      <TextField
                        {...params}
                        variant='outlined'
                        margin='dense'
                        placeholder='Select Route'
                      />
                    }
                  />
                </Typography>
      </FormControl>
  </Grid>

 
  {/* </Grid>
  </Toolbar> */}

  {
    new URLSearchParams(search).get('lat') && new URLSearchParams(search).get('lng') ?'':
//     <Toolbar style={{marginLeft:"-8px "}}>


    




// <Grid  container spacing={3}  >
<>

<Grid item xs={2} md={2} lg={2} >
          <FormControl variant="filled" margin="normal" fullWidth >

          <Typography className="font14 greyfirstheading"  gutterBottom variant="subtitle1">
               {/* Select {vehicles} * */}
                </Typography>
                <Typography  variant="body2" gutterBottom>
                <Autocomplete 
        getOptionLabel={(designation) => designation.number}
        className='user'
        options={vehicleList|| []}
        filterSelectedOptions
        disablePortal={true}

        getOptionSelected={(option, value) => option.number === value.number}
        // value={deviceId}
        onChange={(event, newValue) => newVehicle(newValue)}
        renderInput={(params) =>
          <TextField
            {...params}
            variant='outlined'
            margin='dense'
            placeholder='Select Tanker Number'
          />
        }
      />
                </Typography>
      </FormControl>
          </Grid>
                <Grid item xs={2} >
              <Typography className="font14 greyfirstheading"  gutterBottom variant="subtitle1">
              From Date
              </Typography>
              <Typography variant="body2" gutterBottom >
              <TextField className='dateTimeFont' id="outlined-search"  type="datetime-local" variant="outlined" 
              value={fromDate}
              onChange= {(event) => setFromDate(event.target.value)}
        
/>
              </Typography>
            </Grid>
            <Grid item xs={2} >
            <Typography className="font14 greyfirstheading"  gutterBottom variant="subtitle1">
            To Date
              </Typography>
              <Typography  gutterBottom variant="subtitle1">
              <TextField className='dateTimeFont' id="outlined-search"  type="datetime-local" variant="outlined" placeholder="Search Route Name"
              value={toDate}
              onChange= {(event) => setToDate(event.target.value)}
        
/>
              </Typography>
              
            </Grid>

            <Grid item xs={2} >
            <Typography  className="font14 greyfirstheading" gutterBottom variant="subtitle1" style={{visibility:'hidden'}}>
          Name
              </Typography>
              <Typography  gutterBottom variant="subtitle1">
              <Button variant="contained" className="ml-1" > 
              Submit
            </Button>

              </Typography>
              
            </Grid>





















     
            
            
       </>     
 

}
</Grid>
       





      
    </Toolbar>

{/* <div style={{position:'relative'}}> */}

            {/* <SelectedDeviceMap    history='true' fromDate={fromDate} toDate={toDate} historyBool={historyBool} setHistoryBool={setHistoryBool}  vehicleGpsId={vehicleGpsId} showRouteList={showRouteList} siteList={siteList}  vehicleSpeed={vehicleSpeed}reportlatitude={new URLSearchParams(search).get('lat')} reportLongitude ={new URLSearchParams(search).get('lng')} /> */}
  {/* </div> */}

            </Paper>
            </Container>
        </div>
    )
}

export default SelectedDeviceTrackHistory
