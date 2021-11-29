import { createContext } from "react";


const DarkContext = createContext(localStorage.theme ? localStorage.theme : null);

export default DarkContext;