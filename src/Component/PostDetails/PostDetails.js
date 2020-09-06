import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayDetailsPost from '../DisplayDetailsPost/DisplayDetailsPost';
import CommentSection from '../CommentSection/CommentSection';


const PostDetails = (props) => {
    const {id} = useParams();
    
    return (
        <div>
            <div>
                <DisplayDetailsPost id={id}></DisplayDetailsPost>
            </div>
            <div>
                <CommentSection id={id}></CommentSection>
            </div>
        </div>
    );
};

export default PostDetails;