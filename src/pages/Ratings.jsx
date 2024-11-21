/* import useParams() hook to access URL parmaeters, particularly for dynamic routes */
import { useParams } from "react-router-dom";
// useEffect() hook to make API call 
// useState() hook to hold state
import { useEffect, useState } from "react";

export default function Ratings(){
    // destructure to pull out params (:title) from  obj --- dynamic route '/literary_works/ratings/:title'
    const { title } = useParams();
    
    // hold drama state
    const [drama, setDrama] = useState(null);

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmEzZjEwNGIzY2RiZTI2ZWYwZjg3OWJiZTg4YjYwYiIsIm5iZiI6MTczMjE2MjkxOC44NTUwMDI5LCJzdWIiOiI2NzNlYWZjNDM3NGE2OTk1Mjc4OTcwZDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wLDuUywshUbOlif7P_Vhf4BbODq1ugrthm2m5u1fai4'
        }
      };
      
    // async function to retrieve data from db
    async function getData(){
        try {
            let res = await fetch(url);
            let data = await res.json();    // this step automatically done if using axios
        } catch (err) {
            console.error(err);
        }
    }
    return(
        <>
            <h4>{title}</h4>
        </>
        
    )
}