
import { useParams } from "react-router-dom";

export default function Rating(){
    // destructure out ratings value from "Literary_Works" obj {}
    const { title, ratings } = useParams();

    return(
        <h4>{ratings}</h4>
    )
}