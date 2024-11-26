// useState() to create & manage state for 'News.jsx' component below
// useEffect() hook used to fetching data from News API
import { useState, useEffect } from "react";
// fetch data from News API
import axios from 'axios';

import Loading from "./Loading";
// create a React functional component later to be exported to root component 'App.jsx'
export default function News(){
    // create a state for <News> component intialized to value of empty array []
    let [news, setNews] = useState([]);
    
    useEffect(() => {
        // need "async" function in order to "await" fetch from db
        async function getData(){
            // importing API_KEY from .env
            const API_KEY = import.meta.env.VITE_apiKey;
            // URL with specific endpoints and queries
            const URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${API_KEY}`
            
            // using try-catch error check since accessing API/database -- better safe than sorry
            try {
                // fetching data from API
                let res = await axios.get(URL);
                // collect news articles (array of objs) from response data
                setNews(res.data.articles);
            } catch (err) {
                console.error("Failed to fetch data from API", err);
            }
        }
        // invoke getData() to do the actual fetching
        getData();
    }, []); // dependencies list set to empty [] -- render only initially

    
    return(

        <div  className="news" alt="news" title="News headlines">
            {/* ternary operator used in conditionally rendering, if there is news available for this query ...
            create a copy of the story, and return wanted fields */}
            {news.length > 0 ? news.map((story) => {
                // destructure out attributes value from "story" (res.data.articles)
                const { title, description, urlToImage } = story;

                return(
                    // React fragments needed here to establish an over-arching parent otw errors
                    <div key={story.urlToImage}>
                        <h3 style={{color: "#14213d"}}>{title}</h3>
                        <h4><u>{description}</u></h4>
                        <img src={urlToImage} alt="some news" style={{width:"300px", borderRadius: "10px"}}/>
                    </div>
                );

                // if fails to load API
            }) : <h1>Loading <Loading /></h1>}
        </div>
    );
}