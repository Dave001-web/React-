import {useFetch} from "./hooks/useFetch"
import { useState, useEffect } from "react";
import { BounceLoader } from 'react-spinners';
const url = "https://example-data.draftbit.com/authors?_limit=10";
const GetAuthors = () => {
  const  {isLoading, data: authors} = useFetch(url)

      if (isLoading) {
        return<BounceLoader/>
      }
  return (
    <div>
      <h1>List of authors</h1>
      <section className="flex flex-wrap gap-3">
       {authors.map((author) => {
        return (
          <div key={author.id} className="max-w-[320px] shadow-md w-full">
            <img
              src={author.imgUrl}
              alt=""
              className="w-full h-60"
            />
            <p>
              {author.person}
            </p>
            <p>{author.description}</p>
            <a href={author.articleUrl} target="_blank"> Read More</a>
          </div>
        );
       })} 
      </section>
    </div>
  )
}
export default GetAuthors;