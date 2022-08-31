import React from 'react'

const AddEditSim = () => {
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


            <TableContainer xs={12}>

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

export default AddEditSim