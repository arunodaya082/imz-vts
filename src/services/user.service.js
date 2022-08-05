import axios from 'axios';
// import _ from 'lodash';
import config from '../config/config';

export const userService = {
    get,
    post,
    put,
    deleteDetail,
    loginService,
    postWithFile
};
// log in Api without Header 
function loginService(apiEndpoint, payload){
    // return  axios.post(apiEndpoint, payload, {
       
    // })

    return axios({
        method: 'post',
        url: apiEndpoint,
        data: payload,
        headers: {
            'userId':`__${localStorage.getItem('ipaddress')}`
             }
    })
    .then((response)=>{
        return response;
       
    }).catch((err)=>{
        console.log(err);
        return err.response;

    })
}


// get Api call common
function get(apiEndpoint){
    return axios.get(apiEndpoint,getOptions())
        .then((response)=>{
            return response;
        }).catch((err)=>{
            console.log(err);
        
            if(err.response!=undefined && err.response.status==401){
                window.open('/','_self');
            }else{
            }
    })
}
// Post Api call common

 function post(apiEndpoint, payload){

    return  axios.post(apiEndpoint, payload, getOptions())
    .then((response)=>{
        return response;
       
    }).catch((err)=>{
        console.log(err);
        if(err.response!=undefined && err.response.status==401){
            window.open('/','_self');
           }else{
            return err.response;
           }
    })
}

// PUt Api call common

function put(apiEndpoint, payload){

    
    return axios.put(config.baseUrl+apiEndpoint, payload, getOptions())
    .then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
        if(err.response!=undefined && err.response.status==401){
            window.open('/','_self');
           }else{
           }
    })
}

// delete Api call common

function deleteDetail(apiEndpoint,payload){
    return axios({
        method: 'delete',
        url: apiEndpoint,
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('data')).token,
             }
        })
    .then((response)=>{
        return response;
    }).catch((err)=>{
        // window.open('/','_self');
    })
}
function getOptions(){ 
    // debugger;
    let options = {};
    if(JSON.parse(localStorage.getItem('data')).token){
        options.headers = {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('data')).token,
            'userId':  `${JSON.parse(localStorage.getItem('data')).id}__${localStorage.getItem('ipaddress')}__${JSON.parse(localStorage.getItem('data')).userType}`
        };
    }

    return options;
}



function postWithFile(apiEndpoint, payload){
    var response=axios({
        method: 'post',
        url: apiEndpoint,
        data: payload,
        headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('data')).token,
             }
        })
        .then(function (response) {
            //handle success
             
            return response
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
        return response
}



 





