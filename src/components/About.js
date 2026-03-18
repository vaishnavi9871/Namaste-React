import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props) {
        // console.log("Parent Constructor called");
        super(props);
    }
    componentDidMount(){
        // console.log("Parent Component Mounted");
    }
   
    render() {
        // console.log("Parent Render called");
    return (
        <div className="user-card">
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=> (<h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            
            <UserClass name= {"Vaishnavi Agrahari class based"} email={"vaishnavi1.agrahari@gmail.com"} location={"Hyderabad, Telangana"}/>

            
        </div>
    );
}
}   
export default About;