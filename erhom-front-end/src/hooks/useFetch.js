import { useState, useEffect } from "react";

const useFetch = (props) => {
  const [error, setError] = useState("");
  const doFetch = async (props) => {
    try {
      const response = await fetch(props.url, {
        method: props.methodHTTP,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...props.dataToFetch }),
      });
      if (!response.ok) {
        console.log('error',response.statusText);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    doFetch(props);
  }, [props]);

  return [error];
};

export { useFetch };


