// bring in <Link> component to navigate to internal pages --- for external just use anchor tags <a> (tho this will refresh/re-render page [DO NOT WANT!])
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navbar" alt="nav bar" title="Navigation bar">
            <nav style={{ display: 'flex', gap: '20px', padding: "20px"}}>
                
                    {/* "linked to path ..." */}
                    <Link to={'/'}>Home{"\t "}</Link>
                    <Link to={'/animations'}>Animations🎞️{"\t "}</Link>
                    <Link to={'/literary_works'}>Literary Works📚{"\t "}</Link>
                    <Link to={'/forums'}>Forums⛩️{"\t "}</Link>
                    <Link to={'/forums/addComment'}>Suggestions💭{"\t "}</Link>
                    {/* /forums/update_mention path deliberately never created so will re-direct to 404 NOT FOUND (catch all *) Page*/}
                    <Link to={'/forums/update_mention'}>Report⁉️</Link>
                    {/* actual catch all * page */}
                    {/* <Link to={'/*'}>Report All</Link> */}
                
            </nav>
        </div>
    );
}