import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import "../dashboard/dashboard.css";
import { Container, Paper, Typography, Grid, TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SidebarContext } from '../common/sidebar/sidebarContext';
import { lighten, makeStyles, Toolbar, InputAdornment } from '@material-ui/core';
import TablePagination from '@material-ui/core/TablePagination';
import Pageheader from '../common/PageHeader/pageheader2';
import { Table, TableContainer, TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
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



const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, searchFilter, setSearchCode, setSearchName, searchSite, siteList } = props;



  return (
    <Toolbar style={{ marginLeft: "-8px " }}>

      <Grid container spacing={3} className="mt-1" >
        <Grid item xs={3} >
          <Typography className="font14 greyfirstheading" gutterBottom variant="subtitle1">
            Search User
          </Typography>
          <Typography variant="body2" gutterBottom >
            <TextField id="outlined-search" size='small' type="text" variant="outlined" placeholder="Search User"
              onChange={(event) => setSearchName(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon onClick={searchFilter} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography className="font14 greyfirstheading" gutterBottom variant="subtitle1">
            Employee Code
          </Typography>
          <Typography gutterBottom variant="subtitle1" >
            <TextField id="outlined-search" size='small' type="text" variant="outlined" placeholder="Eg : IMZ 001"
              onChange={(event) => setSearchCode(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon onClick={searchFilter} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Typography>

        </Grid>

        {/* <Grid item xs={3} >
            <Typography  className="font14 greyfirstheading" gutterBottom variant="subtitle1">
            Select Source
              </Typography>
              <Typography  gutterBottom variant="subtitle1">
            
              <Autocomplete 
        getOptionLabel={(option) => option.name}
        className='user'
        options={siteList || []}
        filterSelectedOptions
        disablePortal={true}

        getOptionSelected={(option, value) => option.name === value.name}
        onChange={(event, newValue) => searchSite(newValue)}
        renderInput={(params) =>
          <TextField
            {...params}
            variant='outlined'
            // margin='dense'
            size='small'
            placeholder='Select Emergency'
          />
        }
      />
              </Typography>
              
            </Grid> */}

      </Grid>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};




const Userlist = () => {

  const classes = useStyles();
  const { isopen } = useContext(SidebarContext);

  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [userlist, setUserList] = React.useState([]);
  const [pageNo, setPageNo] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isLoading, setLoading] = React.useState(true)
  const [searchCode, setSearchCode] = React.useState('');
  const [searchName, setSearchName] = React.useState('');


  //  const topViewData ={'title':'User Management','subTitleFirst':'Dashboard >','subTitleSecond':'Company >','subTitleThird':' User','buttonIcon':true,"buttonText":' Add User','ButtonClick':onAddUser,'backPath':'/dashboard','backPathSecond':'/dashboard','addButtonPath':'/adduser','addButton':false,'addCancelClick':'','addClick':'','editButton':false,'editButtonClick':'','updatePermission':[],'updateButton':false,'goBackEditClick':'','updateClick':'','addButtonPermission':addUserPermission}

  const onAddUser = () => {
    // history.push('./adduser');
    window.open('./adduser', '_self')
  }



  const usersRoute = (id) => {
    window.open(`/users/${id}`, '_self')
  }


  const handleChangePage = (event, newPage) => {
    console.log(newPage)
    setPageNo(newPage);

  };

  const handleChangeRowsPerPage = (event) => {
    console.log(event.target.value)
    setPageSize(parseInt(event.target.value, 10));
    setPageNo(0);
  };


  const topViewData = { 'title': 'Home ', 'subTitleFirst': '/ User Management ', 'subTitleSecond': '', 'subTitleThird': '', 'buttonIcon': true, "buttonText": ' Add User', 'ButtonClick': onAddUser, 'backPath': '/dashboard', 'backPathSecond': '/dashboard', 'addButtonPath': '/adduser', 'addButton': false, 'addCancelClick': '', 'addClick': '', 'editButton': false, 'editButtonClick': '', 'updatePermission': [], 'updateButton': false, 'goBackEditClick': '', 'updateClick': '', 'addButtonPermission': '' }


  return (
    <div className='dashboard_home' style={{ marginLeft: isopen ? "201px" : "14px" }} >
      <Container style={{ paddingRight: isopen ? '5px' : "13px" }} >

        <Grid container xs={12}>

          <Grid xs={10}>
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








        <Paper className={classes.paper} id='left' style={{ width: isopen ? '106%' : '112%', padding: '0.5rem', marginLeft: isopen ? "25px" : "10px", marginTop: "12px" }}>



          <Grid xs={12} style={{ padding: "4px" }}>


            <EnhancedTableToolbar numSelected={selected.length} setSearchCode={setSearchCode} setSearchName={setSearchName} />
            <TableContainer style={{ margin: '1rem', width: '97%' }}>
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
                aria-label="enhanced table"
              >
                <EnhancedTableHead />

                <TableBody className='border'>

                  {
                    userlist && userlist.length > 0 ? userlist.map((user, index) => (<TableRow
                      hover
                      //   onClick={(event) => handleClick(event, 'user')}
                      //   role="checkbox"

                      tabIndex={-1}
                      key='1'

                    >
                      <TableCell >
                        {index + 1}
                        {/* <Checkbox


/> */}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="default" style={{ position: 'relative' }}>
                        {user.image ? <img style={{ height: '28px', width: '28px', border: '1px solid grey', position: 'absolute', fontSize: '2rem', marginTop: '2px', borderRadius: '50px' }} src={`http://staging.watsoo.com/watsoo-djb/${user.image}`} /> : <AccountCircle style={{ position: 'absolute', fontSize: '2rem', marginTop: '2px' }} />}


                        <span style={{ color: '#1492E6', fontSize: '1.1rem', marginLeft: '2.5rem' }} onClick={(event) => usersRoute(user.id)}>
                          {user.name} ({user.employeeCode})
                        </span>

                        <div className="greyfirstheading font12 subtextTable"  > {user.designation && user.designation.name}</div>
                      </TableCell>
                      <TableCell className="greyfirstheading">{user.phoneNumber} | {user.email}</TableCell>
                      <TableCell className="greyfirstheading">{user.site && user.site.length > 0 ? user.site.map((val) => (val.name + ', ')) : ''}</TableCell>

                      {/* <TableCell  className="greyfirstheading">{user.site !==null && user.site.length>0 ? `${user.site[0].name}  (web : ${user.site[0].roles.length>0? user.site[0].roles[0].webPermissionDTOList.length +user.site[0].roles[0].webPermissionCategoryDTOList.length :''},mobile : ${user.site[0].roles.length>0? user.site[0].roles[0].mobilePermissionDTOList.length+user.site[0].roles[0].mobilePermissionCategoryDTOList.length:''})` :''}  </TableCell> */}
                      {/* <TableCell style={{width:'12%',position:'relative'}} className='borderRight  '  >
{user.isActive ?<span className='dot activeBg'></span> :<span className='dot inactiveBg'></span> }
<span className={user.isActive ?'activeToggle':'inactiveToggle'}> {user.isActive ?'Active':'In Active'} </span>
{user.isActive ?<img className="activePosition" src={activeLogo} onClick= {(event) => userActiveInactive('active',user.id)} />:<img className="inactiveposition" src={inactiveLogo} onClick= {(event) => userActiveInactive('inactive',user.id)} />}</TableCell> */}
                    </TableRow>)) : ''
                  }




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

export default Userlist;