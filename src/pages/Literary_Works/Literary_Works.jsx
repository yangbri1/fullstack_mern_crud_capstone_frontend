// import <Link> component to navigate to other pages
import { Link } from "react-router-dom";
// import useState(), useEffect() React hooks combo to manage 
import { useEffect, useState } from "react";
// import custom loading spinner functional component
import Loading from "../../components/Loading";

// create React functional component 
export default function Literary_Works(){
    // declare a state for this functional component -- to fetch backend data 
    let [works, setWorks] = useState(null);

    // sample data from "literary_work_data.mjs" in the back-end server
    const literary_works = [
        {
            title: "Solo Leveling",
            type: "manhwa",
            ratings: 8.66,
            status: "COMPLETED",
            genre: "FANTASY",
            synopsis: "Sung Jin-Woo dubbed the 'World's Weakest' was left out to dry when D-Ranked dungeon went awry. Little did they know from his sacrifice, he was endowed a new ability by the [Developer(s)] --- the ability to gain exp, constantly growing. Soonafter, he achieved lvls over 9000 and went back to the traitors that rue his day...",
            serialized: false
        },
        {
            title: "Hunter X Hunter",
            type: "manga",
            ratings: 8.75,
            status: "ONGOING",
            genre: "ADVENTURE",
            synopsis: "Story centered around Gon Freecss wants to become a Hunter so he can find his father, who abandoned him when he was young in search for adventure. Along Gon's journey, he encountered many unforeseened events, befriended many other Hunters, and expanded his knowledge of Nen",
            serialized: false,
        },
        {
            title: "Qianzhi Gaoshou",
            type: "manhua",
            ratings: 8.20,
            status: "COMPLETED",
            genre: "ACTION",
            synopsis: "Ye Xiu was the pinnacle of his Esport, when rumors of his retirement came about. He never planned to retire; however, his team thought otherwise as they want to capitalized on bringing on a new upcoming, hotshot player. As Ye Xiu wouldn't budge the scence gets nasty as they orchestrate ways to professional end his career ...",
            serialized: true
        }
    ];

    // fetching from backend server
    useEffect(() => {
        // require "async" function in order to "asynchronously" fetch from backend (and to use "await")
        async function getData(){
            try {
                // fetching from backend always require "async"/"await" as well as most of time try-catch (b/c why not)
                let res = await fetch(`http://localhost:3000/literary_works/`);
                let data = await res.json();    // this step automatically done if using axios
                // change state to retrieve data from backend
                setWorks(data);
            } catch (err) {
                console.error(err);
            }
        }
        // invoke getData() to fetch info from backend server
        getData();
    }, []); // dependencies array set to empty -- only run once on initial render

    return(
        // React fragment
        <>
            <h1>List of Literary Works</h1>
            <div className="literary_works">
                {/* need to use JS array methods .map(), .filter() or other techniques to manipulate data in React (normal .push() etc DN work) */}
                {/* using .map() method to copy "literary_works" array , perform some action and reveal a NEW array */}
                {works ? works.map((comic) => {
                    // destructure out some attributes from array literary_works "props" placed in "comic" obj {} for later use
                    const { title, type, ratings } = comic;
                    // create some <link> components to listed works dynamically
                    return(
                        <Link key={comic._id} to={`/literary_works/literary_work/${comic._id}`}>
                            <h3>{title} [{type}]</h3>
                        </Link>
                    );
                }) : <h1>Loading <Loading /> </h1>}
            </div>
        </>
    
    );
}

// export default { Literary_Works };