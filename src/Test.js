import React from 'react';
import { useState } from 'react';

export const Test=()=>{
    const [name,setName]=useState("Arvind Menariya");
    const nameHandler=()=>{
        setName("Mayank Soni");
    }
    return <div className='container'>
        <h2>Hi react from Test Component</h2>
        <p>{name}</p>
        <button className="btn" onClick={nameHandler}>Change name</button>
    </div>
}