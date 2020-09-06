import React, { useState, useEffect } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';



const CommentSection = (props) => {
    const id = parseFloat(props.id);
    
    
    const [comments, setComments] = useState([]);
            useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
            },[]);
            const comment = comments.filter( comment => comment.postId === id);
            
    return (
        <div>
            <h1>Comments</h1>
            <div>
            {
                comment.map(comment => <CommentDetails comment={comment}></CommentDetails>)
            }
            </div>

        </div>
        

    );
};

export default CommentSection;