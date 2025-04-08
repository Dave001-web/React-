import React from 'react'
import LastViewedProduct from './LastViewedProduct';

const LastViewed = () => {
     const Products = [
       {
         id: 1,
         image:
           "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/8679172/1.jpg?5940",
         title: "Cap",
         price: 14500,
       },
       {
         id: 2,
         image:
           "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/0412362/1.jpg?4383",
         title: "Royal 43 inches Smart Tv",
         price: 249000,
       },
       {
         id: 3,
         image:
           "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/0033821/1.jpg?0073",
         title: "Iron",
         price: 20000,
       },
     ];
  return (
    <div className="max-[1200px] mx-auto">
      <div className=" bg-purple-500 text-3xl font-bold p-3 rounded-t-2xl text-white">
        <h1>Last Viewed</h1>
      </div>
      <section className="flex gap-2 items-center mt-2.5">
        {Products.map((product) => {
          return <LastViewedProduct key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}

export default LastViewed
