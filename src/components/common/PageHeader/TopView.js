import React, { useState, useEffect } from 'react';
import {Typography, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {AiFillHome} from "react-icons/ai";
import { Styles } from './style';


export default function TopView({data}) {
  // console.log(data)

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
    <Grid container alignItems='center' style={Styles.titleContainer}>
    <Grid item container md={8} justify='flex-start' alignItems='center'>
      {!data.hideBtn && <AiFillHome style={Styles.backIcon} onClick={(event)=>routePath('/')} />}
      <span style={Styles.spanContainer}>
        {/* <Typography variant='h6' className='text-capitalize' style={Styles.typography}>{data.title}</Typography> */}
        <p style={Styles.p}>

          <span onClick={(event)=>routePath(data.backPath)} className='cousor_pointer'>{data.title}</span>
          <span onClick={(event)=>routePath(data.backPath)} className='cousor_pointer'>
          {data.subTitleFirst} </span>
        {data.subTitleSecond !='Company >' && 
        <span onClick={(event)=>routePath(data.backPathSecond)} className='cousor_pointer text-capitalize'>{data.subTitleSecond}</span>
}
          <span className='text-capitalize' style={Styles.addSiteText}>{data.subTitleThird}</span>
        </p>
      </span>
    </Grid>

    <Grid item md={4} style={{textAlign:'right'}}>
              <Typography  gutterBottom variant="subtitle1" style={{marginTop: '13px'}}>
              {data.addButtonPermission.length>0?data.buttonIcon?<Button variant="contained"  className="font12 fontbold"  onClick={(event)=>routePath(data.addButtonPath)}>
 <AddIcon/>{data.buttonText} 
</Button >:'':''}

            {data.addButton ?<><Button className='bg-white' onClick={data.addCancelClick}  variant="outlined" >
             Cancel
           </Button>
           <Button
             style={{ width:'22%', marginLeft: "1rem" }}
             variant="contained"
             onClick={data.addClick}
           >
             Add
           </Button></>:''}

           {data.editButton ?<>
            <Button
             style={{ width:'9%', marginLeft: "1rem" }}
             variant="contained"
             onClick= {data.editButtonClick}
           >
            Edit
           </Button></>:''}

           {data.updatePermission.length>0 ? data.updateButton?<><Button onClick= {data.goBackEditClick}  variant="outlined"  className='bg-white'>
             Cancel
           </Button>
           <Button
             style={{ width:'9%', marginLeft: "1rem" }}
             variant="contained"
             onClick= {data.updateClick}
           >
            Update
           </Button></>:'':'' 
            }

              
              </Typography>
              
            </Grid>
    
  </Grid>
)





}
