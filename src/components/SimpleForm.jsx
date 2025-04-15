import React from 'react'

const SimpleForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState ("")


    const handleFormSubmit = (e)=> {
        e.preventDefault()
    }
  return (
    <div>
      <form onSubmit={handleFormSubmit} className=' myform '>
        <h1 className='text-2xl font-medium '>Submit Name</h1>
        <input
          type="  text"
          placeholder="FirstName"
          className=" myinput rounded-md p-2 w-full border-black my-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input type="text"
         placeholder='Last Name'
         className='myinput rounded-md p-2 w-full border border-black my-2' 
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         />
         <button type='submit'  className='mybtn'>Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm