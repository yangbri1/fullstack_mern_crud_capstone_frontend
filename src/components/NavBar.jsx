// bring in <Link> component to navigate to internal pages --- for external just use anchor tags <a> (tho this will refresh/re-render page [DO NOT WANT!])
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navbar">
            <nav style={{ display: 'flex', gap: '20px'}}>
                <h2>
                    {/* "linked to path ..." */}
                    <Link to={'/'}>Home{"\n "}</Link>
                    <Link to={'/animations'}>Animations</Link>
                    <Link to={'/literary_works'}>Literary Works</Link>
                    <Link to={'/forums'}>Forums</Link>
                    <Link to={'/forums/addComment'}>Suggestion</Link>
                    {/* /forums/update_mention path deliberately never created so will re-direct to 404 NOT FOUND (catch all *) Page*/}
                    <Link to={'/forums/update_mention'}>Report</Link>
                    {/* actual catch all * page */}
                    {/* <Link to={'/*'}>Report All</Link> */}
                </h2>
            </nav>
        </div>
    );
}