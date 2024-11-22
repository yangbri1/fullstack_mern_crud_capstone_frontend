// import useParams hook (acts similarly to access Express' HTTP req.params) to allow dynamically updating some element
// import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
// <Link> components to navigate to other pages via visible button, links, etc.
import { Link } from "react-router-dom";

export default function Animations(){
    // declare variable to store parameters
    // Note: if know params' name can useParams() hook to destructure in place otw will have to use dot notation to call upon properties from params obj {}
    // const { name } = useParams();

    const [animations, setAnimations] = useState(null);
    // return(
    //     // use previously destructured params here for dynamic
    //     <h1>Welcome {name}!!</h1>
    // )

    // async function to retrieve data from MongoDB db
    async function getData(){
        try {
            let res = await fetch(`http://localhost:3000/animations/`);
            let data = await res.json();  // convert data into readable JSON format
        
            setAnimations(data);
        } catch (err) {
            console.error(err);
        
        }
    }  

    // useEffect setup w/ arrow fn
    useEffect(() => {
    // invoke getData() fn to connect to custom server-side db & retrieve collections from db
    getData();
    }, []);   // dependencies list/array of [] means only run on initial render 

    // display when data do NOT exist
    const loading = () => {
    return(<h1>Loading (insert spinner)</h1>)
    }
    // loaded function when data is successfully fetched
    const loaded = () => {
    return(
        // functional components outside of <Routes> components DN change per page, each Route/page may change
    <>
        <h1>List of Animations</h1>
        <div className="animations">
            {/* create a copy of animations using array .map() method where ... */}
            {animations.map((piece) => {
                // destructure out properties of Animations obj dataset from backend
                const { name, year} = piece;
                return(
                    // populate page with fetched animations datasets & dynamically <Link> up each one to own page
                    <Link key={name} to={`/animations/animation/${piece._id}`}>
                        <h3>{name} [{year}]</h3>
                    </Link>
                );
            })}
        </div>
    </>
    );
    }
    // if animations exist & has a year, invoke loaded() fn otw call forth loading()
    return animations && animations.year ? loaded() : loading();
    
}
