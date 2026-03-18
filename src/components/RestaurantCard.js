import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, areaName, sla, costForTwo, cloudinaryImageId} = resData?.info;
    const DUMMY_IMAGE = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=660&h=400&fit=crop";
    
    // Check if cloudinaryImageId exists and is not empty
    const imageUrl = cloudinaryImageId && cloudinaryImageId.trim() !== ""
        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}` 
        : DUMMY_IMAGE;
    
    const {loggedInUser}=useContext(UserContext)
    
    
    return (
        <div className='m-4 p-4 w-[300px] bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-shadow duration-300  '>
            <img 
                className="rounded-lg w-full h-[200px] object-cover" 
                alt={name} 
                src={imageUrl}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = DUMMY_IMAGE;
                }}
            />
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {avgRating} </h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
            <h4>Delivery Time: {sla.slaString} </h4>
            <h3>User is:{loggedInUser}</h3>
        </div>
    );
};
//Higher Order Component (HOC) - A component that takes in another component as an argument and returns a new component with enhanced functionality.
// input- RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white px-2 py-1 rounded-lg m-2">Fast Service Promoted</label>
                <RestaurantCard {...props} />

            </div>
        );
    }
}



export default RestaurantCard;
