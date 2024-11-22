import { useParams } from "react-router-dom"
// import useEffect() to fetch data from backend
// import useState() to hold state
import { useEffect, useState } from "react"
/* Note: "Components (little pieces add to a page) are parts of a page (entire URL)" */
// create React functional component
export default function Forums(){

    // set state posts initially to null (NOT "null" (not a falsy value))
    let [posts, setPosts] = useState(null);

    useEffect(() => {
        async function getData(){
            try {
                // fetch data from forums endpoint in backend
                let res = await fetch(`http://localhost:3000/forums/`);
                // convert to usable JSON string format (obj)
                let data = await res.json();    // omit this step while using axios (inherently done)
                // sets "posts" state to retrieved data
                setPosts(data);
            } catch (err) {
                // console out error in encounter any
                console.error(err);
            }
        }
        // invoke above asynchronous fn
        getData();
    }, []); // dependencies list/array set to empty -- only render initially (once)
    
    return(
        <>
            <h1>Forum Page</h1>
            <div className="forums">
                {/* if posts exists, call JS array method .map() on it to create a new copy w/ wanted filters */}
                {posts ? posts.map((remark) => {
                    // destructure out wanted info
                    const { heading, message, signed } = remark;
                    return(
                        <>
                            <h2>{heading}</h2>
                            <h4>{message}</h4>
                            <p><b>Username</b>: <i>{signed}</i></p>
                        </> 
                    );
                // if posts do NOT exist push out "Loading ..." indicator
                }) : <h1>Loading ...</h1>}
            </div>
        </>
    );
}