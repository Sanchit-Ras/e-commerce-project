import { Navigate } from "react-router-dom"
import {withUser} from "./withProvider"
//Redirects to login page if user does not exists else children
function UserRoute({user,children}){
    if (!user) {
        return <Navigate to="/login" />
    }
    return children
}
export default withUser(UserRoute);