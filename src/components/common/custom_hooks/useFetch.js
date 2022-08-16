import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = url => {


    
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);


    // useEffect(() => {
    //     const fetchData = async()=>{
    //         const response = await fetch(url);

    //         if(!response.status !== 200){
    //             throw new Error("No Data Found");
    //         }
    //         const data = await response.json();
    //         setData(data);
    //         console.log("d",data)
    //         setIsPending(false)
    //         setError(null);

    //         };

    //         fetchData().catch( err =>{
    //             setIsPending(false);
    //             setError(err.message);
    //         });
    // },[url]);

     useEffect(() => {
      setLoading('loading...')
      setData(null);
      setError(null);
      
      axios.get(url)
      .then(res => {
          setLoading(false);
          //checking for multiple responses for more flexibility 
          //with the url we send in.
          res.data.content && setData(res.data.content);
          res.content && setData(res.content);
          // res.data && setData(res.data)
          console.log("data",data)

      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
      // return () => {
      //    console.log("data",data)
      // }
  }, [url])


  return {
    data,
    loading,
    error,
  };

}

export default useFetch;