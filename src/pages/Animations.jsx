// import useParams hook (acts similarly to access Express' HTTP req.params) to allow dynamically updating some element
import { useParams } from "react-router-dom";

export default function Animations(){
    // declare variable to store parameters
    // Note: if know params' name can useParams() hook to destructure in place otw will have to use dot notation to call upon properties from params obj {}
    const { name } = useParams();
    return(
        // use previously destructured params here for dynamic
        <h1>Welcome {name}!!</h1>
    )
}
