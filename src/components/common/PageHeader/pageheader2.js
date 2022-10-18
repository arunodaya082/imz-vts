import React from 'react';
import {Button, Grid,Typography } from '@material-ui/core';
import {AiFillHome} from "react-icons/ai";
import AddIcon from '@material-ui/icons/Add';

const Pageheader = ({data}) => {

    const routePath=(path)=>{
        debugger
          if(!localStorage.getItem('email')=='imz@imzcorporate.com'){
            if(path =='/dashboard'){
          window.open('/routeList','_self')
          return false
          }
        }
          if(path =='back'){
        if(data.subTitleThird =='Live Tracking'){
          window.open('/dashboard','_self')
        
        }
        else{
          if(window.history.back() == undefined){
          window.open(data.backPathSecond,'_self')
        
          }else{
            window.open(window.history.back(),'_self') 
        
          }
          // window.location.reload()
        }
        
          }
          else{
          window.open(path,'_self')
        
          }
        
        
        }


  return (
   <>
    <Grid container xs={12} alignItems='center' style={{display:"inline-flex",}}>
    <Grid container xs={8} justify='flex-start'  >
        <AiFillHome size={15} onClick={(event)=>routePath('/')}/>
        <Typography  style={{ fontSize: "12px" }}>&nbsp; {data.title}
        <span onClick={(event)=>routePath(data.backPath)} >
            {data.subTitleFirst}
        </span>
        <span onClick={(event)=>routePath(data.backPathSecond)} className=' text-capitalize'>
            {data.subTitleSecond}
        </span>
        </Typography>
    </Grid>


    <Grid container  xs={4}  style={{textAlign:"end"}}>


              {data.buttonIcon?
            <Grid xs={12} style={{paddingLeft:"180px",marginLeft:"40px",textAlign:"end"}}>
                  <Button variant="contained"  color='primary' className="font12 fontbold"  onClick={(event)=>routePath(data.addButtonPath)}>
                  <AddIcon/>
                  {data.buttonText} 
                  </Button >
            </Grid>
              :''}




            {data.addButton ?

          <Grid container  xs={12} style={{marginLeft:"24px",textAlign:"end"}}>
            <Button className='bg-white' onClick={data.addCancelClick}  variant="outlined" >
             Cancel
           </Button>
           <Button
             style={{ width:'22%', marginLeft: "1rem" }}
             variant="contained"
             onClick={data.addClick}
           >
             Add
           </Button>
           </Grid>
           :''}

           {data.editButton ?
           <Grid xs={12} style={{marginLeft:"24px",border:"1px solid black",textAlign:"end"}}>
            <Button
             style={{ width:'9%', marginLeft: "1rem" }}
             variant="contained"
             onClick= {data.editButtonClick}
           >
            Edit
           </Button>
           </Grid>
           :''}

           {data.updateButton?
           <Grid xs={12} style={{marginLeft:"24px",border:"1px solid black",textAlign:"end"}}>
           <Button onClick= {data.goBackEditClick}  variant="outlined"  className='bg-white'>
             Cancel
           </Button>
           <Button
             style={{ width:'9%', marginLeft: "1rem" }}
             variant="contained"
             onClick= {data.updateClick}
           >
            Update
           </Button></Grid>
           :''}

              
              {/* </Typography> */}
              
            </Grid>


    </Grid>
    </>
   
  )
}

export default Pageheader;