import React from 'react';
import { Grid,Typography } from '@material-ui/core';
import {AiFillHome} from "react-icons/ai";

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
    <div>
    <Grid container xs={12} >
        <AiFillHome size={15} onClick={(event)=>routePath('/')}/>
        <Typography  style={{ marginBottom: "12px", fontSize: "12px" }}>&nbsp; {data.title}
        <span onClick={(event)=>routePath(data.backPath)} className='cousor_pointer'>
            {data.subTitleFirst}
        </span>
        <span onClick={(event)=>routePath(data.backPathSecond)} className='cousor_pointer text-capitalize'>
            {data.subTitleSecond}
        </span>




        </Typography>
    </Grid>
    </div>
  )
}

export default Pageheader;