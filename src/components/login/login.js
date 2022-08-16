import React from 'react';
import { useState } from 'react';
import { Grid,Button } from '@mui/material';
import "./login.css";
import tracking from "../../assests/tracking.jpg";
import logo2 from "../../assests/logo2.png";
import PropTypes from 'prop-types';


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//    }

   
   
   const Login = ({setToken}) => {
       
       const [username, setUserName] = useState();
       const [password, setPassword] = useState();
       
       const handleSubmit = async e => {
        e.preventDefault();
        // const token = await loginUser({
        //   username,
        //   password
        // });
        setToken(false);
      }
      
       return (
    // <Grid className="container-fluid">
    <Grid container xs={12} >
       
        <Grid  xs={8} className="bg-image">
        <Grid className="col-md-12">
                <img src={tracking}  style={{height:"100%"}} alt="tracking"/>

            </Grid>

            {/* <Grid xs={12}>
            <img src={wtanker}  alt="tanker"/>

            </Grid> */}

            
        </Grid>

        <Grid className="col-md-4 bg-light">
            <Grid className="login d-flex align-items-center py-4">

                <Grid className="container">
                    <Grid className="row">
                            <Grid className="col-lg-12 col-xl-10 mx-auto">
                                <img src={logo2} style={{maxHeight:"100px",maxWidth:"200px", marginTop:"-180px", marginBottom:"30px"}}alt="logo"/>
                            </Grid>
                        <Grid className="col-lg-12 col-xl-10 mx-auto">
                            <h3 className="display-4">Login page!</h3>
                            <p className="text-muted mb-4">login with registered email and password..</p>
                            <form onSubmit={handleSubmit}>
                            {/* <form> */}
                                <Grid className="form-group mb-3">
                                <input type="email" placeholder='Enter Email' onChange={e => setUserName(e.target.value)} required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </Grid>
                                <Grid className="form-group mb-3">
                                <input type="password" placeholder='Enter Password' onChange={e => setPassword(e.target.value)} required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </Grid>
                                {/* <Grid className="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked className="custom-control-input"/>
                                    <label for="customCheck1" className="custom-control-label">Remember password</label>
                                </Grid> */}
                                <Button type="submit"  variant='contained' className="text-uppercase mb-2 rounded-pill shadow-sm px-4">Log in</Button>
                                <Grid className="text-center d-flex justify-content-between mt-4">
                                    
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
// </Grid>

  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;