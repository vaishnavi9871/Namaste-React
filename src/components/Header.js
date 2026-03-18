import { LOGO_URL } from "../utils/constants";  
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnNameReact,setbtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();
      useEffect(() => {console.log("useEffect called");
    }, [btnNameReact]);
    
    const {loggedInUser}=useContext(UserContext);
    //subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-100 xl:bg-blue-100 2xl:bg-blue-100'>
            <div className='m-4 p-4 rounded-lg'>
                <img className='w-56' src={LOGO_URL} />
            </div>
            <div className='flex items-center'> 
                <ul className="flex p-4 m-4">
                    <li className="px-4 "> Online Status:{onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About Us</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl">
                        <Link to ="/cart">Cart - ({cartItems.length} items)
                    </Link></li>
                    <button className="login"
                    onClick={()=>
                        {btnNameReact === "Login" ?
                     setbtnNameReact("Logout") : 
                     setbtnNameReact("Login");
                        
                    }}>
                    {btnNameReact}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
           
        </div> 
            )}

export default Header;
