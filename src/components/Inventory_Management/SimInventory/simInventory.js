import React, { useState } from 'react';
import {useMediaQuery} from '@material-ui/core';
import { Container, Paper, Typography, Grid, TextField, Button, Divider, Table, TableBody } from '@material-ui/core';
import { SidebarContext } from '../../common/sidebar/sidebarContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Pageheader from '../../common/PageHeader/pageheader2';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import { TableContainer, TableHead, TableRow, TableCell } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
import SimAddUpdate from './simAddUpdate';




const headCells = [
  { id: 'sr.no', numeric: false, disablePadding: false, label: 'S No.' },
  { id: 'network', numeric: false, disablePadding: false, label: 'Network Provider' },
  { id: 'sim_no.', numeric: true, disablePadding: false, label: 'Sim Number' },
  { id: 'mob_no', numeric: true, disablePadding: false, label: 'Mobile  Number' },
  { id: 'activation', numeric: true, disablePadding: false, label: 'Activation  Date' },
  { id: 'expiration', numeric: true, disablePadding: false, label: 'Expiration  Date' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
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
          <TableCell style={{ color: '#6E6A76' }}
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




const dataCells = [
  { id: 1, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 2, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 3, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 4, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 5, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 6, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 7, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 8, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 9, networkProvider: 'BSNL', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  { id: 10, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 11, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 12, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 13, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 14, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 15, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 16, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 17, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 18, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 19, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },
  // { id: 20, networkProvider: 'Airtel', simNumber: "312531257323535", mobNumber: "9084674574", activationDate: "22/08/2022", expirationDate: "21/11/2022", status: "Active" },

];



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);






export default function SimInventory() {
  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);

  const [networkList, setNetworkList] = useState([
    { id: 0, name: "BSNL" },
    { id: 1, name: "Airtel" },
    { id: 2, name: "Jio" }
  ]);

  const [network, setNetwork] = useState("");
  const [simlist, setSimList] = useState(dataCells);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [pageNo, setPageNo] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(1);
  const [formopen, setFormOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log("s", simlist)



  const handleClickOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };


const handleChangePage = (event, newPage) => {
  console.log(newPage)
      setPageNo(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      console.log(event.target.value)
      setPageSize(parseInt(event.target.value, 10));
      setPageNo(0);
    };



  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ Inventory Management ', 'subTitleSecond': '/ Sim Inventory', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': "", 'backPath': '/dashboard', 'backPathSecond': '/maps', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': "" }
  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >


        {/* top page header  */}
        <div style={{ marginLeft: isopen ? "24px" : "12px" }}>
          <Pageheader data={topViewData} />
        </div>




        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px" }}>


          <Grid container xs={12} style={{ padding: "6px", }} >


            <Grid xs={9}>
              <Typography style={{ fontWeight: "bold" }}>
                Sim Inventory
              </Typography>

            </Grid>

            <Grid xs={2} style={{ marginLeft: "6rem", textAlign: "end" }}>

            <Button variant="contained" color="primary" onClick={handleClickOpen}>
              + Add New 
            </Button>
            <SimAddUpdate open={formopen} handleClickOpen={handleClickOpen} handleClose={handleClose}/>

            
            </Grid>

          </Grid>

          {/* For sim inventory */}




          <Grid container xs={12}>

            <Grid xs={2} style={{ padding: "6px" }}>
              <Typography style={{ fontSize: "16px", margin: "6px" }}>
                Select Network Provider
              </Typography>
              <Autocomplete id='header'
                getOptionLabel={(deviceList) => deviceList.name}

                options={networkList || []}
                getOptionSelected={(option, value) => option.name === value.name}
                value={network}

                onChange={(event, newValue) => setNetwork(newValue)}
                renderInput={(params) =>
                  <TextField
                    {...params}
                    variant='outlined'
                    margin='dense'
                    color="primary"
                    size="small"
                    style={{ marginLeft: "2px", marginTop: "2px", background: '#fff' }}
                    placeholder='Select Network'

                  />
                }
              />

            </Grid>


            <TableContainer xs={12} style={{padding:"12px"}}>

              <Table style={{border:"1px solid grey"}}>


                <EnhancedTableHead />


                <TableBody className='border'>

                  {
                    simlist && simlist.length > 0 ? simlist.map((sim, index) => (
                      <TableRow
                        hover
                        onClick={(event) =>(event, 'sim')}
                        role="checkbox"
                        tabIndex={-1}
                        key={sim.id}
                      >

                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{sim.networkProvider}</TableCell>
                        <TableCell>{sim.simNumber}</TableCell>
                        <TableCell>{sim.mobNumber}</TableCell>
                        <TableCell>{sim.activationDate}</TableCell>
                        <TableCell>{sim.expirationDate}</TableCell>
                        <TableCell>{sim.status}</TableCell>
                      </TableRow>
                    ))
                      : ""}

                </TableBody>

              </Table>




            </TableContainer>
            <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalPages}
          rowsPerPage={pageSize}
          page={pageNo}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}
