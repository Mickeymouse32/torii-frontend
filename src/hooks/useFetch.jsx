import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async () => {
    try {
      const { data } = await axiosInstance(url);
      setData(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setError(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, isLoading, isError, error };
};
