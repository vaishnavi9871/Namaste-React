import { useEffect, useState } from "react";   

const User = ({name,email,location}) => {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    useEffect(() => {
        
    },[])

    async function getUserInfo () {
        
    }






return (
    <div className = "user-card">
    
<h2>User Name: {name}</h2>
<h3>Email: {email}</h3>           
<h4>Location: {location}</h4>
<button onClick={() => {
    setCount1(count1+1);
    setCount2(count2+1);
}}>Click me</button>
</div>
);
};
export default User;