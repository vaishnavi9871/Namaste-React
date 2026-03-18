import { useEffect } from "react";
import { useState } from "react";
import { MENU_API_URL } from "./constants";
const useRestaurantMenu = (resId) => {
    //fetch data
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async() => {
        try {
            const data = await fetch(MENU_API_URL + resId);
            const json = await data.json();
            setResInfo(json?.data);
        } catch (error) {
            setResInfo(null);
        }
    }

    return resInfo;
}
export default useRestaurantMenu;