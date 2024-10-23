import React from "react";

const BlogComment = ({p_name, comment, replies}) =>{

    return(
        <>
        <div className="single-comment-section"
        style={{
            padding: '10px 20px',
            margin: '20px 0px',
            backgroundColor: 'var(--opaque-dark)',
            borderRadius: '5px'

        }}
        >
            <div className="comment-content">
                <h5 className="comment-name"
                style={{
                    margin: '10px 0px',
                    fontSize: '1em',
                }}>{p_name}</h5>
                <p className="comment-content" style={{
                    margin: '10px 0px',
                    fontSize: '0.9em',
                }}>{comment}</p>

            </div>
        </div>
        {replies && replies.map(reply =>(
            <div className="replied-comment" key={reply.id}
            style={{
                padding: '5px 15px',
            margin: '20px 0px 20px 50px',
            backgroundColor: 'var(--opaque-dark)',
            borderLeft: '2px solid var(--primary-color)',
            borderRadius: '10px'
            }}
            >
                <p style={{fontSize: '0.8em', color: 'grey'}}>replied:</p>
                <div className="comment-content">
                
                <h5 className="comment-name"
                style={{
                    margin: '10px 0px',
                    fontSize: '1em',
                }}>{reply.name}</h5>
                <p className="comment-content" style={{
                    margin: '10px 0px',
                    fontSize: '0.9em',
                }}>{reply.reply}</p>

                </div>
            
            </div>
        ))} 


        
        </>
    );


}

export default BlogComment;