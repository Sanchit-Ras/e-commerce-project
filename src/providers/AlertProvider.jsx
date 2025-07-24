import { useState } from "react";
import { AlertContext } from "../contexts";

function AlertProvider({ children }) {
    const [alert, setAlert] = useState();
    const handleDismiss = () => {
        setAlert(undefined);
    }

    return (
    <AlertContext.Provider value={{ alert, setAlert, handleDismiss }}>
        {children}
    </AlertContext.Provider>
    )
}
export default AlertProvider;