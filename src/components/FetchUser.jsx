import React, { useState } from "react";
import { useSate, useEffect } from "react";
//firstname lastname, image, gender, address(626, main street, pheonix missisipi) city,
const url = "https://dummyjson.com/users";
const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data.users);
    };
    getUsers();
  }, []);

  return (
    <div className="max-w-[1200px] w-full mx-auto p-3">
      <h1 className="text-center font-[800] mb-[20px] text-2xl">
        List of Users
      </h1>
      <section className="flex flex-wrap gap-5 items-center justify-center">
        {users.map((user) => {
          const { image, firstName, lastName, gender, address } = user;
          return (
            <div className="shadow-md max-w-[350px] w-full h-[300px] rounded-lg">
              <img
                src={image}
                alt={`${firstName} ${lastName}`}
                className="w-full h-[70%] object-cover"
              />
              <div>
                <p>
                  {" "}
                  <span className="font-[700]">Name:</span>{" "}
                  {`${firstName} ${lastName}`}
                </p>
                <p
                  className={
                    gender === "male" ? "text-blue-600" : "text-pink-500"
                  }
                >
                  <span className="text-black font-[700]">Gender:</span>
                  {gender}
                </p>
                <p>{`${address.address}, ${address.city}, ${address.state} `}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchUsers;
