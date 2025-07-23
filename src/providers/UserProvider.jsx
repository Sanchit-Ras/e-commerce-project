import { useState ,useEffect} from "react";
import { UserContext } from "../contexts.jsx";
import Loading from "../Loading.jsx";
import axios from "axios";
function UserProvider({ children }) {
    const [user, setUser] = useState();
    const [loadingUser, setLoadingUser] = useState(true);
    const token = localStorage.getItem("token");
    useEffect(() => {
        
        if (token) {
            axios.get('https://myeasykart.codeyogi.io/me', {
                headers: {
                    Authorization: token
                }
            }).then((response) => {
                console.log("user Set");
                setUser(response.data);
                setLoadingUser(false);
            }).catch((error) => {
                console.log("error: ", error);
                localStorage.removeItem("token");
                setLoadingUser(false);
            })
        } else {
            setLoadingUser(false);
        }

    }, [])
    if (loadingUser) {
        return <Loading />
    }
    return (
        <UserContext.Provider value={{isLoggedIn:!!token, user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;