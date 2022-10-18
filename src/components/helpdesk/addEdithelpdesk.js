import React from 'react';
import { useContext, useState } from 'react';
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { lighten, makeStyles, Toolbar, InputAdornment } from '@material-ui/core';
import Pageheader from '../common/PageHeader/pageheader2';




const userData = [
  { id: 0, name: "Arunodaya Singh", phone: "8009268501", email: "arunodaya.singh@imzcorporate.com", role: "Sr. senior developer" },
  { id: 1, name: "Diwas Coudhary", phone: "8009268501", email: "diwas.choudhary@imzcorporate.com", role: "Sr. mobile developer", },
  { id: 2, name: "Rahul Kumar", phone: "8009268501", email: "rahul.kumar@imzcorporate.com", role: "Sr. devops developer", },
  { id: 3, name: "Vijay Kanujiya", phone: "8009268501", email: "vijay.kanujiya@imzcorporate.com", role: "Software Delivery Officer", },
  { id: 4, name: "Manoj Tiwari", phone: "8009268501", email: "manoj.tiwari@imzcorporate.com", role: "Sr. senior developer", },
]


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
  { id: 'id', numeric: false, disablePadding: false, label: 'S No.' },
  { id: 'name', numeric: false, disablePadding: false, label: 'User Details' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Phone No. / Email' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Role' },
  // { id: 'carbs', numeric: true, disablePadding: false, label: 'Status' },

];





const AddEditTicket = () => {

  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);
  const [id, setId] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");






  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Help Desk Management ', 'subTitleSecond': `/ ${id ? "View Ticket" : "Raise Ticket"}`, 'subTitleThird': '', 'buttonIcon': false, "buttonText": '', 'ButtonClick': true, 'backPath': '/dashboard', 'backPathSecond': '/userlist', 'addButtonPath': '/adduser', 'addButton': true, 'addCancelClick': '/userlist', 'addClick': true, 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': '' }


  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >

        <Grid container xs={12} style={{ marginLeft: "24px" }}>

          <Grid xs={12}>
            <div >
              <Pageheader data={topViewData} />
            </div>
          </Grid>

        </Grid>
        {/* top page header  */}








        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px", marginTop: "12px" }}>

          <Typography style={{paddingLeft:"6px",fontWeight:"bold",fontSize:"16px",borderBottom:"1px solid black"}}>
            User Details
          </Typography>



          <Grid container xs={12} spacing={3} style={{padding:"12px"}}>
          
          <Grid container xs={7}>

         
            <Grid xs={6} style={{padding:"12px"}}>

                <Typography>
                  Enter Name
                </Typography>

                <TextField id="outlined-search" size='small' type="text" variant="outlined" placeholder="Eg : IMZ 001" />

            </Grid>
          </Grid>

            <Grid xs={4}>

            </Grid>

            <Grid xs={4}>

            </Grid>

          </Grid>
        </Paper>


      </Container>
    </div>
  )
}

export default AddEditTicket;