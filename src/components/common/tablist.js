import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LockTable from './tablelist';


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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.white,
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Active Trips" {...a11yProps(0)} />
          <Tab label="Completed Trips" {...a11yProps(1)} />
          <Tab label="Missed Trips" {...a11yProps(2)} />
          <Tab label="Delayed Trips" {...a11yProps(2)} />
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <LockTable columns={columns} rows={rows}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       Completed Trips
      </TabPanel>
      <TabPanel value={value} index={2}>
      <LockTable  columns={columns} rows={rows}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       Delayed Trips
      </TabPanel>

    </div>
  );
}
