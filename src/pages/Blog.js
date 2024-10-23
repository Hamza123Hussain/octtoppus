import React, { useState, useEffect } from "react";
import './css/Blog.css';
import Loading from "../components/Loading";
import { updatePageMetadata } from "../components/PageMetadata";
import { APIURL, bg_image_5 } from "../Datasets/data";
import BlogCards from "../components/BlogCards";
import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet";

const Blog = () => {
    const [blogposts, setBlogposts] = useState([]);
    const [fetched, setFetched] = useState(false);

    ReactGA.send({
        hitType: 'pageview',
        page: '/blog',
        title: 'Blogs - Octtoppus'
      })

    useEffect(() => {
        const title = "Blogs - Octtoppus";
        const description = "Read What the Octtoppus Writes!";
        updatePageMetadata(title, description);

        const link = APIURL + 'blog_fetch_all.php';
        // Fetch list of blog posts from the backend
        fetch(link) 
          .then(response => response.json())
          .then(data => {
              setBlogposts(data);
              setFetched(true);
          })
          .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    if(!fetched){
        <Loading />
    }

    return (
        <div className="blogs-page">
            <Helmet>
                <title>Blogs | Octtoppus</title>
                <meta name="description" content="Read What the Octtoppus Writes!" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Octtoppus" />
                <meta property="og:title" content="Blogs | Octtoppus" />
                <meta property="og:description" content="Read What the Octtoppus Writes!" />
            </Helmet>
                <div className="blog-hero-container" style={{backgroundImage: `url(${bg_image_5})`}}>
                    <div className="blog-sub-container">
                        <h5>Read What the Octtoppus Writes!</h5>
                        <h1>Octtoppus Insights</h1>
                        <p>Discover the latest trends and innovations in technology with Octtoppus Insights. Our blogs provide a unique perspective on the tech world, offering thought-provoking articles, expert analysis, and inspiring stories. Join us as we navigate the ever-evolving digital landscape, exploring new ideas and insights along the way.</p>
                    </div> </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', margin: '70px 0px'}}>
                    <div className="Blog-Card-container">
                        {Array.isArray(blogposts) && blogposts.map(card => (
                            <BlogCards
                                key={card.id}
                                content={card}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default Blog;
