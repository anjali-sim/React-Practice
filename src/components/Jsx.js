import React from 'react'

function greet(user){
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName:"Anjali",
    lastName:"Ghetia"
};

const element =<h1>Hello, {greet(user)}</h1>

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);