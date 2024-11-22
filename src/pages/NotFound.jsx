// import useEffect() hook to perform side effects / transitions in <NotFound> component
import { useEffect } from "react";
// useNavigate() hook to navigate away w/o use of <Link> component
import { useNavigate } from "react-router-dom";
import error_img from "../images/404_img.gif";
// create React functional component
export default function NotFound(){
    return(
        <>
            <h1>404 Not Found</h1>
            {/* <div style={{backgroundImage: url('/error_img')}}></div> */}
            <div style={{
                backgroundImage: `url(${error_img})`, 
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundAttachment: `fixed`,
                backgroundPosition: `center`,
                // background: 'linear-gradient(to bottom right, rgba(255, 126, 95, 0.8), rgba(254, 180, 123, 0.8), rgba(128, 46, 226, 0.2))',
                height: `100vh`,
                filter: 'brightness(0.4)'
                // filter: `brightness(50%)`
                }}>
                <h1>404 NOT FOUND</h1>
            </div>
        </>
    );
}