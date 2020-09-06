import React, { useEffect, useState } from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';

const DisplayDetailsPost = (props) => {
    const id = props.id;
    const [post, setPost] = useState([]);
            useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
            },[]);
            const {title, body} = post;
            
    return (
        <div style={{margin:"1rem"}}>
            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto', padding: "55px", textAlign: "center", fontSize: "1.2rem" }}>
            <h2> {title} </h2>
            <p style={{textAlign: "justify"}}> {body} </p>
        </Typography>
      </Container>
    </React.Fragment>
        </div>
    );
};

export default DisplayDetailsPost;