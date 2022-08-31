import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid,TextField, } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

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

export default function SimAddUpdate({open,handleClose,handleClickOpen}) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add New Sim 
        </DialogTitle>
        <DialogContent dividers>
          
        <Grid container xs={12} direction="row" style={{ marginLeft: "8px", padding: "6px" }}>
          
          
          <Grid xs={4} style={{marginLeft:"16px",marginRight:"4px",marginTop:"6px"}} >

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
                                      // getOptionLabel={(deviceList) => deviceList.name}

                                      // options={deviceList || []}
                                      // getOptionSelected={(option, value) => option.name === value.name}
                                      // value={selectType}

                                      // onChange={(event, newValue) => setSelectType(newValue)}
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

            <Grid xs={4} style={{marginLeft:"16px",marginTop:"6px"}}>
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
                // value={typeValue}
                // InputLabelProps={{ shrink: true }}
                // onChange={(e) => { setTypeValue(e.target.value) }}
              />
                
            </Grid>
            </Grid>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
