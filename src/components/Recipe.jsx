import React from "react";
import { SyncLoader } from "react-spinners";
import { useFetch } from "./hooks/usefetch";

const Recipe = () => {
  const {
    data: { recipes },
    isLoading,
  } = useFetch("https://dummyjson.com/recipes");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <SyncLoader color="#ff0000" />
      </div>
    );
  }
  return (
    <div>
      <h1 className="font-extrabold text-3xl">Preparing Your Favorite Meal</h1>
      <section>
        <div className=" justify-center flex flex-col w-[80%] h-full">
          {recipes.map((recipe) => {
            const {
              id,
              name,
              image,
              ingredients,
              instructions,
              prepTimeMinutes,
              mealType,
            } = recipe;
            return (
              <div key={id} className=" text-center max-w-[1240px] w-full ">
                <p className="text-2xl font-bold">
                  Name of Food
                  <span className="font-medium text-xl"> {name}</span>
                </p>
                <img src={image} alt={name} className="" />
                <p>Preparation Time:{prepTimeMinutes} minutes</p>
                <div>
                  <h1 className="text-2xl font-semibold">Ingredients</h1>
                  <ol>
                    {ingredients.map((ing, i) => {
                      return <li key={i}>{ing}</li>;
                    })}
                  </ol>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">How To Prepare</h1>
                  <ul>
                    {instructions.map((ing, i) => {
                      return <li key={i}>{ing}</li>;
                    })}
                  </ul>
                  <div>
                    <ol>
                      {mealType.map((meal, i) => {
                        return <li key={i}>{meal}</li>;
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Recipe;
