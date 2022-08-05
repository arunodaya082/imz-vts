import { userService } from '../services';
import config from '../config/config';

export const TrackingAction = {
    fetchTracking,
};


async function fetchTracking(payload) {
    
    try {
       

        let apiEndpoint =  `${config.baseUrl}${config.apiName.Tracking}?deviceType=${payload.deviceType}`
debugger
        let response = await userService.get(apiEndpoint);
        console.log(response);
        if (response && response.status == 200) {
            return (response.data);
        }
        else {
            console.log(response)
            alert(response.data.message);

            // if (response.status != 500) {
            //     return response;
            //     // alert(response.data.responseDescription);
            // } else
            // if (response.status == 401) {
            //     alert(response.data.message);
            // } else {
            //     alert(response.data.responseDescription);
            //     // return (response);
            // }
            return null;
        }
    }
    catch(error) {
        console.log("error", error);
        return null;
    }
}

// async function MaterialType(payload) {
    
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.MaterialType}`
// debugger
//         let response = await userService.get(apiEndpoint);
//         console.log(response);
//         if (response && response.status == 200) {
//             return (response);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }


// async function ViewOrder(payload) {
    
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.ViewTrip}?orderId=${payload.orderId}&companyId=${JSON.parse(localStorage.getItem('data')).companyId}`
// debugger
//         let response = await userService.get(apiEndpoint);
//         console.log(response);
//         if (response && response.status == 200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function ViewTrip(payload) {
    
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.ViewTrip2}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             // alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function addTrip(payload) {
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.CreateTrip}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 && 200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }
// async function addTripSchedule(payload) {
    
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.saveTripSchedule}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 ||response.status ==  200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);

            
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function anotherTripAdd(payload) {
    
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.anotherTripAdd}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 || response.status ==  200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);

            
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function priorTripAdd(payload) {
    
//     try {
       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.addPrior}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 || response.status ==  200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);

            
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function addRemark(payload) {
//     try {
//         let apiEndpoint =  `${config.baseUrl}${config.apiName.addRemark}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 ||response.status ==  200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message); 
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function approveReject(payload) {
//     try {
//         let apiEndpoint =  `${config.baseUrl}${config.apiName.ApproveRejectTrip}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 ||response.status ==  200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message); 
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function approveRejectPrior(payload) {
//     try {
//         let apiEndpoint =  `${config.baseUrl}${config.apiName.PriorApprove}`
// debugger
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 201 ||response.status ==  200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message); 
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }


// async function TripList(payload) {
    
//     try {

       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.TripList}`
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             // alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function MissedTrip(payload) {
    
//     try {

       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.MissedTrip}`
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             // alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function PriorTrip(payload) {
    
//     try {

       

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.priorList}`
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 200) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             // alert(response.data.message);

//             // if (response.status != 500) {
//             //     return response;
//             //     // alert(response.data.responseDescription);
//             // } else
//             // if (response.status == 401) {
//             //     alert(response.data.message);
//             // } else {
//             //     alert(response.data.responseDescription);
//             //     // return (response);
//             // }
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }


// async function TripSchduledList(payload) {
    
//     try {
//         let apiEndpoint =  `${config.baseUrl}${config.apiName.getAllSchedule}`
//         let response = await userService.post(apiEndpoint,payload);
//         console.log(response);
//         if (response && response.status == 200 || response.status == 201) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
           
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }

// async function userActiveInactive(payload) {
    
//     try {

//         let apiEndpoint =  `${config.baseUrl}${config.apiName.deactiveById}?id=${payload.id}&companyId=${JSON.parse(localStorage.getItem('data')).companyId}`
        
//         let response = await userService.get(apiEndpoint);
//         console.log(response);
//         if (response && response.status == 200 || response.status == 201) {
//             return (response.data);
//         }
//         else {
//             console.log(response)
//             alert(response.data.message);
//             return null;
//         }
//     }
//     catch(error) {
//         console.log("error", error);
//         return null;
//     }
// }
