import React from 'react';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const data = response.json();
    
    if(!response.ok){

        throw new Error('Something went wrong');
    }
}


const page = () => {
    return (
        <div>
            <p>Profile Page</p>
        </div>
    );
};

export default page;