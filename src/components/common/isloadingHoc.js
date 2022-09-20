import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


export const isLoadingHOC = (WrappedComponent, loadingMessage) =>{

    function HOC(props){
        const[isLoading,setIsLoading] = useState(true);

        const setLoadingState= isComponentLoading=>{
            setIsLoading(isComponentLoading);
        };

        return(
            <>
            {isLoading && <CircularProgress message={loadingMessage} />}
            <WrappedComponent {...props} setLoading={setLoadingState}/>
            </>
        );
    }

    return HOC;
}

export default isLoadingHOC;