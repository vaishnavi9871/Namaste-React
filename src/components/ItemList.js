import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem =(item) =>{
        //Dispatch an action
        dispatch(addItem(item))
    };
    return (
        <div>
            {items?.map((item) => (
                <div key={item?.card?.info?.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                        <div className="py-3 px-3">
                            <span className="font-semibold">{item?.card?.info?.name}</span>
                            <span className="text-sm"> - ₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}</span>
                        </div>
                        <p className="text-xs px-3">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                    <button className=" p-2 mx-1 my-1 rounded-lg bg-black text-white shadow-lg "
                        onClick = {() => handleAddItem (item)}
                    >
                        Add + </button>
                    </div>
                    <img 
                            src={CDN_URL + item?.card?.info?.imageId} 
                            alt={item?.card?.info?.name} 
                            className="w-32 h-24 p-1 rounded-lg object-cover"
                    />
                
                    </div>
                </div>
            
                
                
            ))}
        </div>
    );
};

export default ItemList;