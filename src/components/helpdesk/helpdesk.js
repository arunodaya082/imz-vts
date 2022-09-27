import React from 'react';
import { useState } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';
import { FiTruck } from "react-icons/fi";
import LockTable from '../common/tablelist';
import useFetch from '../common/custom_hooks/useFetch';
import {MdAltRoute} from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '7rem'
  },
  paper: {
    marginBottom: theme.spacing(1),

  },
  paper2: {
    padding: theme.spacing(2),
    marginRight:"12px",
    color: theme.palette.text.primary,
    
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
  { id: 'srno', label: 'Sr. No.', minWidth: 50, align: 'center' },
  {
    id: 'deviceId',
    label: 'Ticket Number',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vehcileNo',
    label: 'Issue Description',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'imei',
    label: 'Raise Date',
    minWidth: 100,
    align: 'center',

  },
  {
    id: 'tracking',
    label: 'Status',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'remark',
    label: 'Remark',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

function createData(srno,deviceId, vehcileNo, imei, tracking,remark) {

  return { srno, deviceId, vehcileNo, imei, tracking, remark };
}

const rows = [
  createData('1', 'HR-01',  'could not access the data','03/09/2022', "Pending",""),
  createData('2', 'HR-02',  'login failure','23/08/2022', "Resolved",""),
];





function HelpDiskList() {
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);

  // const { data: quote, loading, error } = useFetch('https://api.quotable.io/random')


  const alerts = [
    { id: 0, label: "Total Trips Today", color: "", value: 12, background: "" },
    { id: 1, label: "Vehicle On Trip", color: "", value: 15, background: "" },
    { id: 2, label: "Completed Trips", color: "", value: 35, background: "" },
    { id: 3, label: "Delayed Trips", color: "", value: 5, background: "" }
  ]

  const [searchbar, setSearchbar] = useState(true);




  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Help Desk Management ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Raise Ticket', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/addticket', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>


        {/* dashboard search section  */}

       


        {/* gps health dashboard data view */}

        <Paper className={classes.paper} id='left' style={{ marginTop:"8px",width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>

          {/* <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}> */}

      <Grid container xs={12} style={{ paddingLeft: "6px",}}>
          <Typography style={{fontWeight:"bold",padding:"12px"}}>
            Enter Ticket Number:
          </Typography>

          <TextField
                  id="outlined-basic"
                  type="text"
                  placeholder='"C001"'
                  variant="outlined"
                  size='small'
                  style={{marginTop:"2px",background:'#fff',width:"25%"}}
                  // value={typeValue}
                  // InputLabelProps={{ shrink: true }}  
                />
  </Grid>

  {/* </Paper> */}
        


          {/* <Paper> */}

          <Grid container xs={12} style={{ padding: "16px", }}>
            <Grid xs={12} style={{border:"1px solid grey"}}>


            <Typography style={{ fontWeight: "bold", margin: "16px" }}>

              Tickets 
            </Typography>

            <LockTable columns={columns} rows={rows} />
            </Grid>
          </Grid>



          {/* </Paper> */}


        </Paper>
      </Container>
    </div>
  )
}

export default HelpDiskList;