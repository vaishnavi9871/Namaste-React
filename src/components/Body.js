import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);   
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
    const [searchText,setSearchText]= useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array to run only once on component mount 
    const fetchData = async() => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants);
        setFilteredRestaurants(restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>🔴 You are offline. Please check your internet connection.</h1>;
    }  
    
    const {setUserName} = useContext(UserContext);
    // conditional rendering
    return listOfRestaurants.length === 0 ? (
 <Shimmer />
) : 
  (
        <div className='body'> 
        <div className='filter flex'>
            <div className='search m-4 p-4'>
                <input type="text" className='border-solid border-2 border-gray-400 p-2 rounded  ' 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}
                placeholder='Search' />
                <button className='px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200' 
                    onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes( searchText.toLowerCase())
                    );
                        setFilteredRestaurants(filteredRestaurant);
                     }}>
                        Search
                </button>
            </div>
            <div className="search m-4 p-4 flex items-center rounded-lg">
                <button className='px-4 py-2 bg-yellow-200 m-4 rounded hover:bg-yellow-300' onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating >=4.5
                );
                setFilteredRestaurants(filteredList);
            }}
            >Top Rated Restaurants
            </button>
            <label>UserName</label>
            <input className="border border-black  h-9 px-7 m-2" onChange={(e)=>setUserName(e.target.value)}></input>
        
            </div>
            </div> 
        <div className='flex flex-wrap'> 
        {filteredRestaurants.map((restaurant) => {
            return <Link key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}>
                {
                    restaurant.info.sla.deliveryTime <= 30 ? 
                    (
                    <RestaurantCardPromoted resData={restaurant} />
                    ):(
                    <RestaurantCard resData={restaurant} />
        )}
            </Link>;
        })}
        
        </div> 
        </div>   
    );
};

export default Body;
