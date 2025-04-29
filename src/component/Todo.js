import React from 'react';
function Todo(){
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    const regno = queryParams.get('regno');
    const section = queryParams.get('section');
    return <ul>Welcome <li>Your Email: {email}</li> <li>Regno: {regno}</li> <li> Section: {section} </li></ul>;
}

export default Todo;
