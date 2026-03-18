import { useRouteError } from "react-router-dom";
const Error =() =>{
    const err = useRouteError();
    return (
        <div>
            <h1>
                OOPS! Something went wrong. Please try again later.
            </h1>
            <h3>{err.status} - {err.statusText}</h3>
        </div>
    )
}
export default Error;