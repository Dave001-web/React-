import React, { useState } from 'react'
import {useEffect} from "react"
import { BounceLoader, SyncLoader } from 'react-spinners'
const url = "https://dummyjson.com/products"
const FetchData = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect (() => {
    const getProducts = async () => {
        const res = await fetch (url)
        const data = await res.json()
        console.log(data.product);
        setProducts(data.products);
        setIsLoading(false)
    }
    getProducts();
    })
    if (isLoading) {
        return (
            <div className='flex items-center justify-center h-60'>
                <SyncLoader color='#ff0000' />
            </div>
        )
    }
  return (
    <div>
        <h1>List of product</h1>
        <section className='flex gap-2.5 items-center flex-wrap'>
            {products.map((products) =>{
                    const {id, title, price, images, stock} = products
                    return ( 
                <div key={id} className="w-full max-w-[320px] shadow-md h-[300px]">
              <img
                src={images[0]}
                alt={title}
                className=" object-cover h-[70%]"
              />
              <p className="text-lg">{title}</p>
              <div className="flex gap-2 items-center">
              <p className="font-bold">${price}</p>
              <p className={stock >= 30 ? "text-green-400" : "text-red-500" }>
                {stock} left in stock</p>
              </div>
            </div>
          );
           })
            }
        </section>
    </div>
 )
}

export default FetchData