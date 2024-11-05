import React from 'react';


async function getData() {
   
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const responseStatus = response.status;

        const Connection = response.headers.get('Connection')
        const XPoweredBy = response.headers.get('X-Powered-By')
        const ContentType = response.headers.get('Content-Type')

        return {

            responseStatus : responseStatus,
            Connection : Connection,
            XPoweredBy : XPoweredBy,
            ContentType : ContentType

        }

    }catch(e){
        throw new Error('Error');
    }


}


const page = async() => {

    const data = await getData();
    return (
        <div>
            <h1>Headers Data</h1>
            <p>{JSON.stringify(data['responseStatus'])}</p>
            <p>Connection : {JSON.stringify(data['Connection'])}</p>
            <p>X-Powered-By : {JSON.stringify(data['XPoweredBy'])}</p>
            <p>Content Type : {JSON.stringify(data['ContentType'])}</p>
        </div>
    );
};

export default page;