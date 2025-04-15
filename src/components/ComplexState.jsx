import React from 'react'
import { useState } from 'react'
// arrays and object
// 1. maintain the data types
// 2. spread out values in the initial object {...initials, change: ''}
const ComplexState = () => {
    const [user, setUser] = useState ({
        fullname: "John Doe",
        age: 56,
        job: "Frontend Developer"
    });
    const handleChange = () => {
        setUser({...user, age: 60, job: "Backend Engineer"})
    }
    return <div>
        <div className='w-[300px] rounded-md shadow-2xl p-1.5 mx-auto my-3'>
            <h1 className='text-2xl'>Employer Card</h1>
            <p>Name : {user.fullname}</p>
            <p>Role : {user.job}</p>
            <p>Age : {user.age}</p>
            <button onClick={handleChange} className='mybtn'> Change </button>
        </div>
    </div>
}

export default ComplexState