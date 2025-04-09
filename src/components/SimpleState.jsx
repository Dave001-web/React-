import React from 'react'
import { useState } from 'react'
const SimpleState = () => {
    const [name, setName] = useState("Declan")
    const handleNameChange = () => {
    if (name === "Declan") {
        setName("Declan")
    }
}
const [num, setNum] = useState(0)
const handleIncrease = () => {
    setNum(num + 1)
} 
const handleDecrease = () => {
    setNum(num - 1)
}
const details = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa autem porro et natus quos consequatur, mollitia explicabo, esse iste dolorem, earum culpa. Dignissimos ducimus reprehenderit consequuntur minima quaerat corporis.lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consectetur autem omnis est, cumque labore a maxime repellat accusantium nulla laboriosam excepturi ex aliquam culpa placeat praesentium magni dicta, laudantium temporibus saepe accusamus doloremque officiis vero! Hic tempore fugit pariatur laboriosam, facilis sapiente id. Voluptates aperiam architecto est voluptas beatae.`
const [show, setShow] = useState(false)
const handleShowDetails = () => {
    setShow(!show)
}


  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold">UseState 1</h1>
      <p>My name is {name} </p>
      <button className="mybtn" onClick={handleNameChange}>
        Change Name
      </button>

      <h1 className="text-3xl my-3.5"> {num} </h1>
      <button className="mybtn" onClick={handleIncrease}>
        Increase
      </button>
      <button className="mybtn" onClick={() => setNum(0)}>
        Reset
      </button>
      <button className="mybtn" onClick={handleDecrease}>
        Decrease
      </button>

      <div className="max-w-[600px].mx-auto.p-3.shadow-lg">
        m <h1 className="text-4xl font-bold"> Top Footballs News</h1>
        <h2 className="text-2xl text-red-500 my-2">
          Madrid Demolished at the Emirates stadium
        </h2>
        <p> {show ? details : details.substr(0, 10)} </p>
        <button className="mybtn" onClick={handleShowDetails}>{show ? "Show Less" : "Show More"}</button>
      </div>
    </div>
  );
}



export default SimpleState