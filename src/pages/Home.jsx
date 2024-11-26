// import useState() hook to hold state (& change state later)
// import useEffect() hook to show window.alert() pop-up animation
import { useState, useEffect } from "react";
/* import useNavigate hook to re-direct inside a function upon a certain action
Why not just use <Link>? --- What if there's no button to prompt Link action? --> useNavigate() comes in play */
import { useNavigate } from "react-router-dom";

import News from "../components/News";

// create React functional component
export default function Home(){
    // initialize state to hold input form data w/ initial value of empty String "", later setFormData function will manipulate state
    const [formData, setFormData] = useState("");

    // initialize variable "nav" to hold useNavigate() for use
    const nav = useNavigate();

    // handleChange() function redeclare formData's value to input value
    function handleChange(event){
        setFormData(event.target.value);
    }
    // handleSubmit() function form prompts this
    function handleSubmit(event){
        // prevent default behavior (page refresh/re-render GAAAHHH)
        event.preventDefault();
        // apply string interpolation ${} within template literals (``) to dynamically navigate to the URL of formData
        
        nav(`/animations/animation/${formData}`)
    }

    // window.addEventListener('popstate', (event) => {
    //     window.alert("WARNING: YOU'VE BEEN INFECTED! ")
    // });

    // useEffect() hook to simulate pop-up on initial render
    useEffect(() => {
        // window.alert(`🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 \n WARNING: YOUR COMPUTER MAY BE INFECTED \n🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨`)
        window.alert(`⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️ \n\n🚨 WARNING! 🚨 \n\n🚨 VIRUS DETECTED !!! 🚨 \n\n ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️`)
    }, []); // dependency list set to empty [] for initial render

    return(
        // React fragments needed as React only returns 1 parent
        <>
            {/* window.alert("hello infected") */}
            <h1>Today's Headlines</h1>
            {/* fires off handleSubmit() function upon submission */}
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="search-bar">
                    //Why not onClick? -- Only accounts for button clicks not entering
                    <input onChange={handleChange} id="search-bar" placeholder="Pick a song" title="Choose a song" type="text"  />
                    <input id="search-btn" type="submit"  />
                </label>
            </form> */}

            <News />
        </>
    );
}