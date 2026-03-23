import {render} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu"; 
import MOCK_DATA_MENU from '../mocks/mockResMenu.json'
global.fetch = jest.fn(() => 
    Promise.resolve ({
        json: () => Promise.resolve(MOCK_DATA_MENU)
    })
);



it("should load restaurant menu component",async () => {
    await act (async () => render(<RestaurantMenu/>)
)
})