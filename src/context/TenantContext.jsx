import { createContext, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import { useAppContext } from "../hooks/useAppContext";
import { useEffect } from "react";

export const TenantContext = createContext();

const Tenantprovider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [total, setTotal] = useState(0);
  const { token } = useAppContext();
  const [locValue, setLocValue] = useState("");
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("");

  //api call

  const fetchProperties = async () => {
    if (token) {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(
          `/property?page=${page}&location=${locValue}&budget=${budget}&type=${type}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProperties(data.properties);
        setPage(data.currentPage);
        setTotalPage(data.totalPages);
        setTotal(data.totalProperties);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [token, page, locValue, budget, type]);

  const resetFilters = () => {
    setPage(1);
    setLocValue("");
    setBudget("");
    setType("");
  };

  return (
    <TenantContext.Provider
      value={{
        isLoading,
        properties,
        page,
        setPage,
        totalPage,
        total,
        setLocValue,
        resetFilters,
        setBudget,
        setType,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};

export default Tenantprovider;
