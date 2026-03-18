import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{
                name:"Dummy Name",
                login:"Dummy Email",
                location:"Dummy Location"
            }
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vaishnavi9871")
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        
    }
    componentDidUpdate(){
       }
    componentWillUnmount(){
        }
    render() {
       
        const {name,login,location} = this.state.userInfo;

        return ( <div className = "user-card">
        
        <h2>Name:{name}</h2>
        <h3>Email: {login}</h3>           
        <h4>Location: {location}</h4>
</div>
        );
    }
}

export default UserClass;

/*

<RENDER PHASE>
Parent Constructor called
Parent Render called
Child1 Constructor called
Child1 Render called
Child2 Constructor called
Child2 Render called

<DOM updated- IN SINGLE BATCH>
<COMMIT PHASE>
Child1 Component Mounted
Child2 Component Mounted
Parent Component Mounted
*/
