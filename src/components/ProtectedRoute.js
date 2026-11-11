import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Authprovider from "../context/Authcontext";

export default function ProtectedRoute({ children }) {
  const {Users} = useContext(Authprovider);
  console.log("login");
  
  if (Users){
    return children
  }else{
    <Navigate to="/login"/>
  }
}
