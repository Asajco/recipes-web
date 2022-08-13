import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import styles from "./Search.module.css";

const APP_ID = "242ba107";
const APP_KEY = "f1235af9ebb7ade8278a6b1cb0454c61";

function Search() {
  const [ingrediences, setIngrediences] = useState([]);
  const [recipe, setRecipe] = useState([]);

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      ingredience: "",
    },
  });

  useEffect(() => {
    async function getRecipeByIngredience() {
      const api = await fetch(
        `https://api.edamam.com/search?q=${ingrediences}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await api.json();
      setRecipe(data.hits);
    }
    getRecipeByIngredience();
  }, [ingrediences]);

  // function that is called when 'Add ingredience' form is submitted
  function onAddIngredience({ ingredience }) {
    // add the ingredience only if it's a new one
    if (!ingrediences.some((ingr) => ingr.name === ingredience)) {
      setIngrediences((prevIngrediences) => [
        { name: ingredience, id: uuidv4() },
        ...prevIngrediences,
      ]);
    }
    resetField("ingredience");
  }

  function displayAllIngrediences() {
    console.log("cicky");
  }

  return (
    <div className={styles["body"]}>
      <form
        onSubmit={handleSubmit(onAddIngredience)}
        className={styles["form-wrapper"]}
      >
        <input
          {...register("ingredience", { required: true })}
          type="text"
          placeholder="Type your ingrediece one by one..."
          className={styles["form-input"]}
        />

        <button type="sumbit" className={styles["form-button"]}>
          Add ingredience
        </button>
      </form>
      <section>
        {ingrediences.length !== 0 && (
          <div className={styles["ingrediences-wrapper"]}>
            <button
              onClick={() => setIngrediences([])}
              className={`${styles["form-button"]} ${styles["self-center"]}`}
            >
              Remove all ingrediences
            </button>
            {ingrediences.map((ingredience) => (
              <div
                key={ingredience.id}
                className={styles["input-of-ingredience"]}
              >
                <p>{ingredience.name}</p>
                <button
                  type="button"
                  className={styles["remove-ingredience-button"]}
                  onClick={() =>
                    setIngrediences((prevIngrediences) =>
                      prevIngrediences.filter(
                        (ingr) => ingr.id !== ingredience.id
                      )
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        {recipe.length !== 0 && (
          <div className={styles["recipes-container"]}>
            {recipe.map((meal) => {
              return (
                <div>
                  <Card
                    key={meal.recipe.label}
                    title={meal.recipe.label}
                    image={meal.recipe.image}
                    cousine={meal.recipe.cuisineType}
                    mealType={meal.recipe.mealType}
                    link={meal.recipe.url}
                    listOfIngrediences={
                      meal.recipe.ingredientLines.length > 8 ? (
                        <button onClick={displayAllIngrediences()}>
                          Kokotko
                        </button>
                      ) : (
                        <p className={styles["ingr"]}>
                          {meal.recipe.ingredientLines.map((ingr) => {
                            return <p>{ingr}</p>;
                          })}
                        </p>
                      )
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Search;
