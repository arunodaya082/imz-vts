import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import "../dashboard/dashboard.css";
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { lighten,makeStyles,Toolbar,InputAdornment } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import Pageheader from '../common/PageHeader/pageheader2';
import { Table,TableContainer,TableBody,TableHead,TableRow,TableCell } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import LabTabs from '../common/tablist';
import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AccountCircle } from '@material-ui/icons';




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


const headCells = [
  { id: 'name', numeric: false, disablePadding: false, label: 'S No.' },
  { id: 'name', numeric: false, disablePadding: false, label: 'User Details' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Phone No. / Email' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Role' },
  // { id: 'carbs', numeric: true, disablePadding: false, label: 'Status' },

];


function EnhancedTableHead(props) {
 
  return (
    <TableHead className='theadbg border'>
      <TableRow>
        {/* <TableCell padding="checkbox"> */}
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          /> */}
        {/* </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell style={{color:'#6E6A76'}}
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'default'}
          > {headCell.label}
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  formControl: {
    minWidth: 170,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));







const Vehiclelive = () => {

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


  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Trip-Status ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': false, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  
  
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >

        {/* top page header  */}
            <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
              <Pageheader data={topViewData} />
            </div>
       
            <Paper className={classes.paper} id='left' style={{marginTop:"8px", width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>
          <Grid xs={12} style={{ marginLeft: "26px" }}>
            <Typography
              style={{ padding: "6px", fontWeight: "bolder", marginTop: "6px", display: "inline-flex", }}>
              Track Trip
            </Typography>
            <hr style={{ width: "98%", borderTop: "1px solid black", marginRight: "48px" }} />
          </Grid>


          {/* select options */}
          {/* <Paper style={{margin:"20px",backgroundColor:"#fff"}}> */}

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
                  value={typeValue}
                  // InputLabelProps={{ shrink: true }}
                  onChange={(e) => { setTypeValue(e.target.value) }}
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
          
            {/* <Typography style={{fontWeight:"bold",border:"1px solid black"}}>
              Track History
            </Typography>

            <LockTable columns={columns} rows={rows}/> */
            
            }

            <LabTabs/>

          
          </Grid>
        
            

        </Paper>

          
      </Container>
    </div>
  )
}

export default Vehiclelive;