import { useState, useEffect } from "react";

const useFetch = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  console.log('props',props)
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
      console.log('resonse', response.statusText)
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    doFetch(props);
  }, [props]);

  return {
    error,
    isLoading,
  };
};

export { useFetch };


