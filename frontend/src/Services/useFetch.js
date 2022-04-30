import axios from "axios";
import { useEffect, useState } from "react";

export function UseFetch(url, pathFunction) {
    const [data, setData] = useState([]);
      useEffect(() => {
        axios.get(url)
        .then(response => {
          const path = pathFunction(response)
    
      setData(path);
     
    })
   }, [url, pathFunction]);
  return data
}