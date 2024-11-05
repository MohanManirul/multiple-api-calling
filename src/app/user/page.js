import React from 'react';

async function getData() {

    try{

        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const products = await fetch('https://dummyjson.com/products');
        const posts = await fetch('https://dummyjson.com/posts');

        const usersData     = await users.json();
        const productsData  = await products.json();
        const postsData     = await posts.json();

        return {

                usersData : usersData ,
                productsData : productsData,
                postsData : postsData 
            
            }


    }catch(e){
        throw new Error('Error');
    }



}



const page = async() => {

    const data = await getData();

    return (
        <div>
            <p>User Data</p>
            <p><span className='text-danger'>users Data :  </span>{JSON.stringify(data['usersData'])}</p>
            <p><span className='text-danger'>products Data :  </span>{JSON.stringify(data['productsData'])}</p>
            <p><span className='text-danger'>posts Data :  </span>{JSON.stringify(data['postsData'])}</p>
        </div>
    );
};

export default page;