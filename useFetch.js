import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {

  let isMounted = useRef(true);
  

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });
  
  useEffect(() => { //esto lo uso como limpieza 
    
  return () => {isMounted.current=false
    console.log('mauricio quien pija es');}
  
  }, [])
  
  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          if(isMounted.current)
        {  setstate({
            loading: false,
            error: null,
            data,
          });}else{
            console.log('No se llamo el state')
          }
        }, 1000);
       
      });
  }, [url]);

  return state;
};
