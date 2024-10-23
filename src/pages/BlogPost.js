import React, { useState, useEffect } from "react";
import './css/BlogPost.css';
import Loading from "../components/Loading";
import { APIURL, facebook, instagram, linkedin } from "../Datasets/data";
import BlogComment from "../components/BlogComment";
import LinkButton from "../components/LinkButton";
import FormBold from "../components/FormBold";
import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet";

function BlogPost(props) {
  const [blogPost, setBlogPost] = useState(null);
  const [fetched, setFetched] = useState(false);
  const [postid, setPostid] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState([]);
  const [response, setResponse] = useState('');



  useEffect(() => {
    const { postuid } = props;
    setPostid(postuid);
    fetchBlogPost(postuid);
    fetchComments(postuid);
    // Equivalent to componentWillUnmount
    return () => {
      // Clean-up code here if needed
    };
  }, [props]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'comment':
        setComment(value);
        break;
      default:
        break;
    }
  }
   

  const handleSubmit = (e) =>{
    e.preventDefault();
    const FormAPI = APIURL + 'api_add_comment.php';

    const queryString = new URLSearchParams({
        name: name,
        email: email,
        comment: comment,
        blog_id: postid,
    });


    fetch(FormAPI + '?' + queryString)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        fetchComments(postid);
      })
      .catch((error) => {
        console.error('Error posting comment:', error);
      });
  }

  const fetchComments = (id) =>{
    fetch(APIURL + `fetch_comment.php?blog_id=${id}`)
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Set the comments data in the state
        setShowComments(data);
        // console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }

  const fetchBlogPost = (postId) => {
    let link = APIURL + `blog_fetch.php?id=${postId}`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        setBlogPost(data);
        setFetched(true);
        // Set document title after state has been updated
        // document.title = data.title;
        ReactGA.send({
          hitType: 'pageview',
          page: '/' + data.title_link,
          title: data.title,
        })
      })
      .catch(error => console.error('Error fetching blog post:', error));
  };

  return (
    <Loading fetchedData={fetched}>
      <div className="BlogPost-container">
        {blogPost && (
          <div className="Post-upper-area" style={{backgroundImage: `url(${APIURL + blogPost.image_link})`}}>
            <Helmet>
            <title>{blogPost.title} | Octtoppus</title>
            <meta name="robots" content="index, follow" />
            <meta name="description" content={blogPost.blog_description} />
            <meta name="author" content={blogPost.blog_author} />
            <meta property="og:title" content={blogPost.title} />
            <meta property="og:image" content={APIURL + blogPost.image_link} />
            <meta property="og:url" content={"https://octtoppus.com/blog/" + blogPost.title_link} />
            <meta property="og:type" content="article" />
            <meta property="og:description" content={blogPost.blog_description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={blogPost.title} />
            <meta name="twitter:description" content={blogPost.blog_description} />
            <meta name="twitter:image" content={APIURL + blogPost.image_link} />

            </Helmet>
            <div className="upper-sub-container">
              <h1 className="Post-heading">{blogPost.title}</h1>
              <div className="date-icon-container">
                <div className="Post-date">{new Date(blogPost.date).toLocaleString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                </div>
                <div className="social-icons">
                  <a href={linkedin} rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href={facebook} rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href={instagram} rel="noopener noreferrer" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {blogPost && (
          <div className="Post-content" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        )}
        <div className="comments-container">
          <div className="add_comments_form">
            <h4 style={{margin: '10px 0px'}}>Post your Comment</h4>
            <form action="" method="post" onSubmit={handleSubmit}>
              <div className="form-section">
                <input type="text" placeholder="Name" name="name"  value={name} onChange={handleChange} required />
              </div>
              <div className="form-section">
                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={handleChange} required />
              </div>
              <div className="form-section"><textarea name="comment" id="comment" placeholder="Write your comment here..." value={comment} onChange={handleChange}/></div>
              <div className="form-section">
                <LinkButton type='submit' ButtonText={'Post'}  />
              </div>
               <div className="response" style={{ opacity: response ? 1 : 0, transition: 'opacity 0.3 ease', backgroundColor: '#35E526', padding: '15px 20px', margin: '20px 0px', borderRadius: '5px', fontFamily: 'Helvetica', color: 'white'}}>
                  {response}
                </div>
            </form>
          </div>
          <div className="show-comments">
            
            {showComments.map((comment, index) => (
              <BlogComment key={index} p_name={comment.person_name} comment={comment.person_comment} />
            ) )}
          </div>
        </div>
      </div>
      <div className="secondary-dark-background">
        <FormBold />
      </div>
    </Loading>
  );
}


export default BlogPost;
