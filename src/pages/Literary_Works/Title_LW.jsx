/* import useParams() hook to access URL parmaeters, particularly for dynamic routes */
import { useParams } from "react-router-dom";
// useEffect() hook to make API call 
// useState() hook to hold state
import { useEffect, useState } from "react";

export default function Title_LW(){
    // destructure to pull out params (:id) from  obj --- dynamic route '/literary_works/literary_work/:id'
    const { id } = useParams();
    
    // initialize state "info" for backend data 
    const [info, setInfo] = useState(null);

    // "async" function required to "async" fetch data from db
    async function getData(){
        try {
            // fetch get from HTTP GET one document by :id
            let res = await fetch(`http://localhost:3000/literary_works/literary_work/${id}`);
            // convert incoming data to JSON format
            let data = await res.json();    // this step automatically done if using axios
            // set state "info" from null to data being feed in
            setInfo(data);
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
                {/* {name} */}
                <div>
                    <h1>{info.title}</h1>
                    <h3>{info.ratings}</h3>
                    <p>{info.synopsis}</p>
                </div>
            </>
        )
    }
    // ternary operator with && logical operator to conditionally render
    return info && info.title ? loaded() : loading();

    // return(
    //     <>
    //         <h4>{name}</h4>
    //     </>
    // )
    
}