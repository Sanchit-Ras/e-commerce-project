import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { UserContext } from "./app";

//Redirects to login page if user does not exists else children
export default function UserRoute({children}){
    const { user } = useContext(UserContext);
    if (!user) {
        return <Navigate to="/login" />
    }
    return children
}