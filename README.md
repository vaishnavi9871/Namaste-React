

#Namaste React
#parcel
-Dev build
-Local server
-Hot Module Replacement


Two types of EXPORT/IMPORT:
1.Default : export default <name of variable or component name>

import variable or component name from "path";

2.Named:

export const variable/component name;

import {variable/component name} from "path";

NOTE:In one file we cant export more than one variable if using default import/export
FOR that we use named ones.


//if no dependancy array=> useEffect will be called on every render
// if dependancy array is empty=> useEffect will be called only on first render
//if dependancy arry is [btnNameReact]=> useEffect will be called on first render and every time btnNameReact value changes

    useEffect(() => {console.log("useEffect called");
    }, [btnNameReact]);

never create useState outside of the compmonent
usestate used for creating local state variable inside ur functional component


never create usestate inside if else/functiom n for loop


# 2 types Routing in web pages
-Client Side Routing:no network call (Single page application)
-Server Side Routing:make network call and API data is coming from server


#Redux Toolkit
    -Install @reduxjs/toolkit and react-redux
    -Build our store
    -Connect our store to our app
    -Slice (cartslice)
    -dispatch(action)
    -selector