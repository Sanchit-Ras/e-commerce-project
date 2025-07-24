//This is HOC creator function
import { useContext } from "react";
import { UserContext,AlertContext, CartContext } from "./contexts";
function withProvider(provider){
    function myHOC(IncomingComponent){
        function outgoingComponent(props){
            const contextObj=useContext(provider);
            return <IncomingComponent {...props} {...contextObj}/>;
        }
        return outgoingComponent;
    }
    return myHOC;
}
export const withAlert=withProvider(AlertContext);
export const withUser=withProvider(UserContext);
export const withCart=withProvider(CartContext);