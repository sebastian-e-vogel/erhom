import React, {useState, useEffect} from 'react'

const useFetchData = (url, newFetch) =>{
    const [data, setData] = useState([])

useEffect(() => {
    const getAllData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    getAllData(url);
  }, [newFetch]);

return [data]
}

export {useFetchData}