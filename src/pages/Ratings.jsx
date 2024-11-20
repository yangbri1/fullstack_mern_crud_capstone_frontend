
import { useParams } from "react-router-dom";

export default function Ratings(){
    // destructure out values from "Literary_Works" obj {}
    const { title, ratings, type } = useParams();

    return(
        <>
            <h4>{title}</h4>
            <p>{ratings}</p>
        </>
        
    )
}