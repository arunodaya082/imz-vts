import React, { useState } from 'react';
import { Container, Paper, Typography, Grid, Button, TextField } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import LockTable from "../common/tablelist";
import { useEffect } from 'react';
import { TrackingAction } from '../../actions/tracking';

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


const columns = [
  { id: 'srno', label: 'Sr. No.', minWidth: 50,align: 'center' },
  { id: 'date', label: 'Date', minWidth: 100,align: 'center' },
  {
    id: 'deviceId',
    label: 'Device ID',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vehcileNo',
    label: 'Vehicle No.',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'imei',
    label: 'IMEI',
    minWidth: 100,
    align: 'center',
    
  },
  {
    id: 'tracking',
    label: 'Tracking Data',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(srno,date,deviceId,vehcileNo,imei,tracking) {
  
  return { srno,date,deviceId, vehcileNo, imei, tracking };
}

const rows = [
  createData('1','03/08/2022','India', 'IN', 1324171354, 3287263),
  createData('2','03/08/2022','China', 'CN', 1403500365, 9596961),
  createData('3','03/08/2022','Italy', 'IT', 60483973, 301340),
  createData('4','03/08/2022','United States', 'US', 327167434, 9833520),
  createData('5','03/08/2022','Canada', 'CA', 37602103, 9984670),
  createData('6','03/08/2022','Australia', 'AU', 25475400, 7692024),
  createData('7','03/08/2022','Germany', 'DE', 83019200, 357578),
  createData('8','03/08/2022','Ireland', 'IE', 4857000, 70273),
  createData('9','03/08/2022','Mexico', 'MX', 126577691, 1972550),
  createData('10','03/08/2022','Japan', 'JP', 126317000, 377973),
  createData('11','03/08/2022','France', 'FR', 67022000, 640679),
  createData('12','03/08/2022','United Kingdom', 'GB', 67545757, 242495),
  createData('13','03/08/2022','Russia', 'RU', 146793744, 17098246),
  createData('14','03/08/2022','Nigeria', 'NG', 200962417, 923768),
  createData('15','03/08/2022','Brazil', 'BR', 210147125, 8515767),
];


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

function Vehiclelive() {
  const classes = useStyles();
  const { isOpen } = useContext(SidebarContext);

  const [deviceList,setDeviceList] = useState([]);
  const [selectType, setSelectType] = useState(" ");
  const [typeValue, setTypeValue] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");


  

  const handleChange = (e) => {
    setSelectType(e.target.value);
  }

  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Vehicle-live-Status ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  
  useEffect(()=>{
    search();
  },[]);



  const search=()=>{
    fetchTracking();
  }

  const fetchTracking=()=>{
    // if(selectType.trim() == ""  ){
    //   alert("please enter type")
    //   return false;
    // }

    // if(typeValue.trim() == ""){
    //   alert("please enter value")
    //   return false;
    // }

    // if(fromDate === ""){
    //   alert("please select from date")
    //   return false;
    // }

    // if(toDate === ""){
    //   alert("please select to date")
    //   return false;
    // }

    // TrackingAction.fetchTracking(
    //   {
    //   deviceType: selectType,
    //   value: typeValue,
    //   fromDate: fromDate,
    //   toDate: toDate,
    // }
    // )
    // .then((response) => {
    //   if (response != null) {
    //       setDeviceList(response)
    //   }
    //   else {
    //     setDeviceList([])
    //   }
    // });
    console.log(selectType,typeValue,fromDate,toDate)
  }

  return (
    <div className='dashboard_home' xs={12} md={12} lg={12} style={{ marginLeft: isOpen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isOpen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isOpen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>


        <Paper className={classes.paper} id='left' style={{ width: isOpen ? '106%' : '112%', padding: '0.5rem', marginLeft: isOpen ? "25px" : "10px" }}>
          <Grid xs={12} style={{ marginLeft: "24px" }}>
            <Typography
              style={{ padding: "6px", fontWeight: "bolder", marginTop: "6px", display: "inline-flex", }}>
              Track Trip
            </Typography>
            <hr style={{ width: "98%", borderTop: "1px solid black", marginRight: "48px" }} />
          </Grid>


          {/* select options */}
          <Paper style={{margin:"20px",backgroundColor:"#fff"}}>

          <Grid container xs={12} direction="row" style={{ marginLeft: "8px", padding: "12px" }}>
          
          <Grid container xs={12}>
            <Grid xs={6}  >

              <FormControl >
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
              </FormControl>




                          {/* <Typography style={{ marginTop: "16px", fontSize: "18px", fontWeight: "bold", padding: "6px" }}>
                            Select Type
                                    <Autocomplete id='header'
                                        getOptionLabel={(typeMenu) => typeMenu.name}

                                        options={typeMenu || []}
                                        getOptionSelected={(option, value) => option.name === value.name}
                                        value={selectTypeMenu}

                                        onChange={(event, newValue) => setSelectTypeMenu(newValue)}
                                        renderInput={(params) =>
                                            <TextField
                                              {...params}
                                                variant='outlined'
                                                margin='dense'
                                                color="primary"
                                                size="small"
                                                style={{ background: "#fff", color: "#000" }}
                                                placeholder='Select Type'

                                            />
                                        }
                                    />
                                </Typography> */}
            </Grid>
          </Grid>




            <Grid container xs={12}>
          
            {/* form filling for tracking */}

              <Grid xs={2}>
              <Typography style={{ marginTop: "16px", fontSize: "12px", fontWeight: "bold"}}>
                Enter  Value
              </Typography>  

                <TextField
                  id="outlined-basic"
                  type="text"
                  placeholder="Enter Value Type"
                  variant="outlined"
                  size='small'
                  style={{marginTop:"2px",background:'#fff'}}
                  value={typeValue}
                  // InputLabelProps={{ shrink: true }}
                  onChange={(e) => { setTypeValue(e.target.value) }}
                />
                  
              </Grid>
           

              <Grid xs={2} style={{paddingLeft:"20px",marginTop:"6px"}}>
              <Typography style={{marginTop:"12px",fontSize: "12px", fontWeight: "bold"}}>
                Select From Date
              </Typography>  

                <TextField
                  id="outlined-basic"
                  type="date"
                  variant="outlined"
                  size='small'
                  style={{marginLeft:"2px"}}
                  value={fromDate}
                  onChange={(e) => {setFromDate(e.target.value) }}
                />
              </Grid>

              <Grid xs={2} style={{marginTop:"6px"}}>
              <Typography style={{marginTop:"12px",fontSize: "12px", fontWeight: "bold"}}>
                Select To Date
              </Typography>  

                <TextField
                  id="outlined-basic"
                  type="date"
                  variant="outlined"
                  size='small'
                  style={{marginLeft:"2px"}}
                  value={toDate}
                  onChange={(e) => { setToDate(e.target.value) }}
                />
              </Grid>
            </Grid>

          <Grid xs={12} style={{ marginTop: "22px", fontSize: "18px", fontWeight: "bold" }}>
            <Button type="button"
              variant="contained"
              onClick={search}
              // disabled={isLoading}
              color="primary"

              >
              Search
            </Button>
          </Grid>
          </Grid>
 
       </Paper>


          {/* list table  */}
          
          <Grid container xs={12} style={{padding:"20px"}}>
          
            <Typography style={{fontWeight:"bold",margin:"6px"}}>
              Track History
            </Typography>

            <LockTable columns={columns} rows={rows}/>

          
          </Grid>
            

        </Paper>
      </Container>
    </div>

  )
}


export default Vehiclelive;