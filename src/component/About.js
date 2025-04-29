import React from 'react';
function About(){
    const queryParams = new URLSearchParams(window.location.search);
    const topic = queryParams.get('topic');
    return <h1>Welcome, {topic} </h1>;
}

export default About;