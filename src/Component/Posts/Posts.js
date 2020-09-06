import React, { useEffect, useState } from 'react';
import DisplayAllPosts from '../DisplayAllPosts/DisplayAllPosts';
const Posts = () => {
    const [posts, setPost] = useState([]);
            useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPost(data));
            },[]);
    return (
        <div style={{margin:"1rem"}}>
            {
                posts.map(post => <DisplayAllPosts post={post}></DisplayAllPosts>)
            }
        </div>
    );
};

export default Posts;