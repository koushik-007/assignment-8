import React, { useEffect, useState } from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import Image from '../Image/Image';

const CommentDetails = (props) => {
    const comment = props.comment;
    const {body} = comment;
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => {
            const newData = data.slice(0,1);
            setImages(newData);
        })
    },[])
    return (
        
        <div style={{margin:"1rem"}}>
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
            <Typography component="div" style={{ color: "white",backgroundColor: 'rgb(41, 158, 228)', height: 'auto', padding: "12px",borderRadius: "10px", display: "flex", alignItems: "center"}}>
           {
                images.map(img => <Image img={img}></Image>)
           } <p style={{textAlign: "justify"}}> {body} </p>
            </Typography>
        </Container>
        </React.Fragment>
        </div>
    );
};

export default CommentDetails;