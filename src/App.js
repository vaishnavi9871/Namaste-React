import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'; 
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Grocery= lazy(() => import("./components/Grocery")); //lazy loading of Grocery component, it will be loaded only when user navigates to /grocery route

const AppLayout = () => {

    const [userName,setUserName] = useState();

    useEffect(() => {
        const data = { 
            name:"Vaishnavi Agrahari",
        };
        setUserName(data.name);
    }, []);

    
    return (
        <Provider store={appStore}>
            <UserContext.Provider value = {{loggedInUser :userName,setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,  //parent route
        children:[
    {
        path:"/",
        element: <Body/>,
    },
    {
        path:"/about",
        element: <About/> ,
    },
    {
        path:"/contact",
        element: <Contact/>,
    },
    {
        path:"/grocery",
        element: <Suspense fallback="Loading..."><Grocery/></Suspense>,
    },
    {
        path:"/cart",
        element: <Cart/>,
    },
    {
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
    }
        ],
        errorElement: <Error/>
    },
    
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);




























//JSX-is not HTML IN JS,it is HTML/XML like syntax only
//JSX code is transpiled before it reaches JS engine(Transpileing is done by parcel(Babel-js package))
//Transpiling:converting one form of code to another form of code that browser understands
//Babel job is to convert JSX into react.createElement() 
//JSX=>React.createElement=>Object=>HTML(DOM) Element on render

//attributes in JSX are written using camelCase
//class in JSX is written as className
//React Element-Is a JSX
