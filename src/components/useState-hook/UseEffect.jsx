import React, { useEffect, useState } from "react";

function UseEffect(){
    const [resourceType, setResourceType] = useState('');
    const [mydata,setMyData] =useState("Hii");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then((json) =>{setMyData(JSON.stringify(json))})
        
    }, [resourceType]);

    return(
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>POST</button>
                <button onClick={() => setResourceType('users')}>USERS</button>
                <button onClick={() => setResourceType('comments')}>COMMENTS</button>

            </div>
            <hr></hr>
            <div>{mydata}</div>
        </>
    );
}

export default UseEffect;