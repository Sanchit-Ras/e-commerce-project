import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom"
import { withCart, withUser } from "./withProvider"
function Header({ totalQuantity, setUser }) {
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
    //call api to invalidate token
  }
  return (
    <div className="w-full bg-white flex justify-center py-2 ">
      <div className="w-[70%] md:w-5xl flex justify-between items-center relative">
        <Link to='/'><img className="w-16 rounded-md"
          src="https://cdn.glitch.global/8a033d66-d3d7-4299-beca-375fd3de0c14/thumbnails%2FCheaply%20(2).png?1750361026209" /></Link>
        <div className="flex items-center">
          <button className="border border-primary-light text-primary-light px-5 py-2.5 rounded-md font-semibold hover:bg-primary-light hover:text-white" onClick={handleLogout}>Logout</button>
          <Link to="/cart"><GiShoppingBag className="text-5xl text-primary-light ml-4" /></Link>
          <div className="bg-primary-dark size-6 p-1 rounded-full absolute top-0 right-0 text-xs text-white font-bold flex justify-center items-center">{totalQuantity}</div>
        </div>
      </div>
    </div>
  )
}
export default withUser(withCart(Header));