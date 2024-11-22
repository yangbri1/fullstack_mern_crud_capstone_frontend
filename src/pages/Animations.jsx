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

    // useEffect setup w/ arrow fn
    useEffect(() => {
        // async function to retrieve data from MongoDB db
        async function getData(){
            try {
                let res = await fetch(`http://localhost:3000/animations/`);
                let data = await res.json();    // this step automatically done if using axios
                
                setAnimations(data);
            } catch (err) {
                console.error(err);
            }
        }
        // invoke getData() fn to connect to custom server-side db & retrieve collections from db
        getData();
    }, []); // dependencies array set to empty -- only run once on initial render

    return(
        <>
            <h1>List of Animations</h1>
            <div className="animations">
                {/* create a copy of animations using array .map() method where ... */}
                {animations ? animations.map((piece) => {
                    // destructure out "props" in Animations obj dataset from backend 
                    const { name, year } = piece;
                    // create some <link> components to listed works dynamically
                    return(
                        // populate page with fetched animations datasets & dynamically <Link> up each one to own page
                        <Link key={piece._id} to={`/animations/animation/${piece._id}`}>
                            <h3>{name} [{year}]</h3>
                        </Link>
                    );
                }) : <h1>Loading ... </h1>}
            </div>
        </>
    
    );
}
