import { createContext } from "react";


const DarkContext = createContext(localStorage.theme);

export default DarkContext;