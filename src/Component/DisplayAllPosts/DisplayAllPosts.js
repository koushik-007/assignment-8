import React from 'react';
import { Button, Card, CardContent,Typography,CardActions} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const DisplayAllPosts = (props) => {
    const post = props.post;
    const {title, body, id} = post;
    
    return (
        <div style={{margin:"1rem"}}>
            <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto', padding: "55px", textAlign: "center" }}>
            <h2> {title} </h2>
            <p style={{textAlign: "justify"}}> {body} </p>
            <Button variant="contained" color="primary" href={"/details/"+id}>
            Click To See Details
            </Button>
        </Typography>
      </Container>
    </React.Fragment>
        </div>
    );
};


export default DisplayAllPosts;