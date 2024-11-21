// import useParams hook (acts similarly to access Express' HTTP req.params) to allow dynamically updating some element
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
export default function Animations(){
    // declare variable to store parameters
    // Note: if know params' name can useParams() hook to destructure in place otw will have to use dot notation to call upon properties from params obj {}
    const { name } = useParams();

    const [info, setInfo] = useState(null);
    return(
        // use previously destructured params here for dynamic
        <h1>Welcome {name}!!</h1>
    )
}
    // async function to retrieve data from MongoDB db
    //   async function getData(){
    //     try {
    //       let res = await fetch(`http://localhost:3000/Animations`);
    //       let data = await res.json();  // convert data into readable JSON format
        
    //       setInfo(data);
    //     } catch (err) {
    //       console.error(err);
        
    //     }
    //   }  

    //   // useEffect setup w/ arrow fn
    //   useEffect(() => {
    //     // invoke getData() fn to connect to custom server-side db & retrieve collections from db
    //     getData();
    //   }, []);   // dependencies list/array of [] means only run on initial render 

    //   // display when data do NOT exist
    //   const loading = () => {
    //     return(<h1>Loading (insert spinner)</h1>)
    //   }
    //   // loaded function when data is successfully fetched
    //   const loaded = () => {
    //     return(
    //       // functional components outside of <Routes> components DN change per page, each Route/page may change
    //     <>
    //       <div>
    //         <h1>
    //           {info.year}
    //         </h1>
    //       </div>
    //     </>
    //     )
    //   }

    //   return info && info.year ? loaded() : loading();
