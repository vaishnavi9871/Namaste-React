import RestaurantCard from "../RestaurantCard"
import {render,screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


it("should render RestaurantCard component with props Data.", () => {
    render (<RestaurantCard resData={MOCK_DATA}/>)
    const name=screen.getByText("Pizza Paradise");
    expect(name).toBeInTheDocument();
});