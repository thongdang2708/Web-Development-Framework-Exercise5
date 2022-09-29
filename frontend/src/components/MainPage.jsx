import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URL = "/test";

function MainPage() {
    let [message, setMessage] = useState("");
    const fetchData = async () => {
        
        const response = await axios("http://localhost:8000");
        const data = response.data;
        setMessage(data.message);
    }

   

    useEffect(() => {
        fetchData();
    },[]);
   


  return (
    <div>
      <h1 className='title'> {message }</h1>
    </div>
  )
}

export default MainPage