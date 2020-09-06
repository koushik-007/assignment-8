import React from 'react';

const Image = (props) => {
    const image = props.img;
    const {url} = image;
    return (
        <div>
            <img src={url} alt="" height="100px" style={{borderRadius: "50%", padding: "10px"}} />
        </div>
    );
};

export default Image;