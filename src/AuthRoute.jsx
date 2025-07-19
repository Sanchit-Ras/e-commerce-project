//Redirects to home page if user exits else login page
import { Navigate } from "react-router-dom";
import { UserContext } from "./app";
import { useContext } from "react";
export default function AuthRoute({ children }) {
    const { user } = useContext(UserContext);
    if (user) {
        return <Navigate to="/" />
    }
    return children;
}