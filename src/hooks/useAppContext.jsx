import { useContext } from "react";
import { appContext } from "../context/AppContext";

export const useAppContext = () => useContext(appContext);
