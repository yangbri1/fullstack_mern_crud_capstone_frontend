/* import useEffect() hook to perform side effects/transitions(timer) in <NotFound> component
   useState() hook to hold state of counter */
import { useEffect, useState } from "react";
// useNavigate() hook to navigate away w/o use of <Link> component
import { useNavigate } from "react-router-dom";
import error_img from "../images/404_img.gif";
// create React functional component
export default function NotFound(){
    // create state "counter" with initial value of 10 (seconds)
    const [counter, setCounter] = useState(10);
    // create an instance of useNavigate() hook
    const nav = useNavigate();
    // invoke useEffect() hook to perform side effect
    useEffect(() => {
        // update state each second
        let countdown = setTimeout(() => {
            // talked about this in lecture ('=>' better way for changing pages)
            setCounter((timeAlloted) => timeAlloted - 1);
        }, 1000);   // 1000 ms (1s)
        // if counter hits 0 ... navigate to home page
        counter == 0 && nav(`/`);
    }, [counter]);  // setting dependencies array to "counter" so effect will trigger whenever "counter" state changes
    return(
        <>  
            <h1>Redirecting in {counter} ...</h1>
            {/* <div style={{backgroundImage: url('/error_img')}}></div> */}
            <div style={{
                backgroundImage: `url(${error_img})`, 
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundAttachment: `fixed`,
                backgroundPosition: `center`,
                // background: 'linear-gradient(to bottom right, rgba(255, 126, 95, 0.8), rgba(254, 180, 123, 0.8), rgba(128, 46, 226, 0.2))',
                height: `90vh`,
                width: `auto`,
                filter: 'brightness(0.4)'
                // filter: `brightness(50%)`
                }}>
                <h1>404 Not Found</h1>
                <h1>Hide Quick!</h1>
            </div>
        </>
    );
}