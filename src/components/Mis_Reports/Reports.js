import React,{useState,useEffect} from 'react';
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import LabTabs from '../common/tablist';
import Pageheader from '../common/PageHeader/pageheader2';
import LockTable from '../common/tablelist';

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

function Misreports() {
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);
  
  
    const [deviceList,setDeviceList] = useState([
      {id:0,name:"Device ID"},
      {id:1,name:"Vehicle No"},
      {id:2,name:"IMEI No"}
    ]);
  
   
    
  
    const [selectType, setSelectType] = useState(" ");
    const [typeValue, setTypeValue] = useState("");
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
  
  
    
  
    const handleChange = (e) => {
      setSelectType(e.target.value);
    }
  
   
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
  
  
    const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Reports ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
    
    
    return (
      <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
        <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >
  
          {/* top page header  */}
              <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
                <Pageheader data={topViewData} />
              </div>
         
              <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>
            <Grid xs={12} style={{ marginLeft: "26px" }}>
              <Typography
                style={{ padding: "6px", fontWeight: "bolder", marginTop: "6px", display: "inline-flex", }}>
                Reports
              </Typography>
              <hr style={{ width: "98%", borderTop: "1px solid black", marginRight: "48px" }} />
            </Grid>
  
  
            {/* select options */}
            {/* <Paper style={{margin:"20px",backgroundColor:"#fff"}}> */}
  
            <Grid container xs={12} direction="row" style={{ marginLeft: "8px", padding: "6px" }}>
            
            
              <Grid xs={2} style={{marginLeft:"16px",marginRight:"4px",marginTop:"6px"}} >
  
              
  
  
                 <Typography style={{fontSize: "12px", fontWeight: "bold"}}>
                              Select Type
                  </Typography> 
                                      <Autocomplete id='header'
                                          getOptionLabel={(deviceList) => deviceList.name}
  
                                          options={deviceList || []}
                                          getOptionSelected={(option, value) => option.name === value.name}
                                          value={selectType}
  
                                          onChange={(event, newValue) => setSelectType(newValue)}
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
                    value={fromDate}
                    onChange={(e) => {setFromDate(e.target.value) }}
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
                    value={toDate}
                    onChange={(e) => { setToDate(e.target.value) }}
                  />
                </Grid>
             
            <Grid xs={2} style={{marginLeft:"20px",marginTop:"26px"}}>
              <Button type="button"
                variant="contained"
                onClick={search}
                // disabled={isLoading}
                style={{paddingTop:"7px",}}
                color="primary"
  
                >
                Search
              </Button>
            </Grid>
  
  
            </Grid>
           
   
         
  
  
            {/* list table  */}
            
            <Grid container xs={12} style={{padding:"24px"}}>
            
              {/* {/* <Typography style={{fontWeight:"bold",border:"1px solid black"}}>
                Track History
              </Typography>
  
              // <LockTable columns={columns} rows={rows}/> */
              
              } 
  
            <LockTable columns={columns} rows={rows}/> */
  
            
            </Grid>
          
              
  
          </Paper>
  
            
        </Container>
      </div>
    )
  }
  


export default Misreports;