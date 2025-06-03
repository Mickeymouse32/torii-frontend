import { useContext } from "react";
import { TenantContext } from "../context/TenantContext";

export const useTenantContext = () => useContext(TenantContext);
