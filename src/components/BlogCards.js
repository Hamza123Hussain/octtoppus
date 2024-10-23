import React from "react";
import './css/BlogCards.css';
import { APIURL, backendUrl } from "../Datasets/data";

const BlogCards = ({content}) =>{

    return(
        <div className="bcard-container" 
        style={{
        maxWidth: '400px', 
        maxHeight: '340px', 
        border: '1px solid grey', 
        boxSizing: 'border-box', 
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0px 10px 30px rgba(0,0,0,.3)',

        }}>
            <a href={backendUrl + '/blog/' + content.title_link} style={{textDecoration: 'none', color: 'initial'}}>
                <div style={{ height: '150px', padding: '5px 20px',}}>
                    <h4 style={{fontWeight: '500', fontSize: '1.8em', marginBottom: 0, marginTop: '24px'}} className="blog-heading">{content.title}</h4>
                    <p style={{marginTop: 0, fontSize: '14px', color: 'grey'}}>{new Date(content.date).toLocaleString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}</p>
                </div>
                <div style={{
                    overflow: 'hidden'
                
                }}>
                    <img className="blog-image" style={{
                        width: '400px',
                        transition: 'transform .3s ease'
                    }} src={APIURL + content.image_link} alt={content.title} />
                </div>
            </a>


        </div>

    );
}

export default BlogCards;