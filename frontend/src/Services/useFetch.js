import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Custom Hook for api request
 * @param { string } url url from the request
 * @param { function } pathFunction function for update the response in the good format
 * @returns { array } array with the response data in the format expected
 */

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