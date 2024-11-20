// bring in <Link> component to navigate to internal pages --- for external just use anchor tags <a> (tho this will refresh/re-render page [DO NOT WANT!])
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            {/* "linked to path ..." */}
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </nav>
    )
}