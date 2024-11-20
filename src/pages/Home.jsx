// import useState() hook to hold state (& change state later)
import { useState } from "react";
/* import useNavigate hook to re-direct inside a function upon a certain action
Why not just use <Link>? --- What if there's no button to prompt Link action? --> useNavigate() comes in play */
import { useNavigate } from "react-router-dom";

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

    return(
        // React fragments needed as React only returns 1 parent
        <>
            <h1>Home Page</h1>
            {/* fires off handleSubmit() function upon submission */}
            <form onSubmit={handleSubmit}>
                {/* Why not onClick? -- Only accounts for button clicks not entering */}
                <input type="text" onChange={handleChange} />
                <input type="submit"  />
            </form>
        </>
    );
}