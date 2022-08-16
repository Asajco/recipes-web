import React, { useState, useEffect } from 'react'
import styles from "./Search.module.css"
import Card from './Card'
import {useForm} from 'react-hook-form'
import {v4 as uuidv4} from 'uuid'
import Spinner from "./Spinner"


const APP_ID = '242ba107'
const APP_KEY = 'f1235af9ebb7ade8278a6b1cb0454c61'

function Search() {
  const [ingrediences, setIngrediences] = useState([])
  const [recipe, setRecipe] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [findRecipe, setFindRecipe] = useState(false)
  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      ingredience: "",
    },
  });
  
  useEffect(()=>{
    async function getRecipeByIngredience(){
      const api = await fetch (
        `https://api.edamam.com/search?q=${ingrediences.map((ingredience) => ingredience.name)}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await api.json({});
    setRecipe(data.hits)
    }
    getRecipeByIngredience();
  },[ingrediences])
  
  // useEffect(()=> {
  //   setIsLoading(true)
  //   console.log(recipe)
  //   recipe.length===0 ?
  //   setTimeout(()=> {
  //     setIsLoading(false)
  //   }, 4000)
  //   : setTimeout(()=> {
  //     setIsLoading(false)
  //   }, 1000)
  // },[findRecipe])

  function onAddIngredience({ ingredience }) {
    // add the ingredience only if it's a new one
    if (!ingrediences.some((ingr) => ingr.name === ingredience)) {
      setIngrediences((prevIngrediences) => [
        { name: ingredience, id: uuidv4() },
        ...prevIngrediences,
      ]);
    }
    else{
    resetField("ingredience");
    alert("This ingredience is already in the list")
    }
  }
  
  
  function titleOfSpinner(){
    if(recipe.length===0){
    return <h1>Preparing everything...</h1>
    }else{
      return findRecipe ? <h1>Searcing for recipes</h1> : <h1>Kokt</h1>
    }
  }
  
  function wrapperFunction(){
    setIngrediences([])
    setFindRecipe(false)
  }
  
  return (
  <div>
   {isLoading ? 
   <div className={styles["spinner"]}>
      {titleOfSpinner()}
    <Spinner/>
    
   </div> 
   : 
    <div className={styles["body"]}>  
    <form
         onSubmit={handleSubmit(onAddIngredience)}
         className={styles["form-wrapper"]}>
         
         <input
           {...register("ingredience", { required: true })}
           type="text"
           placeholder="Type your ingrediece one by one..."
           className={styles["form-input"]}/>
         <button type="sumbit" className={styles["form-button"]}>
           <span>Add ingredience</span>
         </button>
         
       </form>
      
      <section>
      {ingrediences.length !== 0 && (
           <div className={styles["ingrediences-wrapper"]}>
             <button
               onClick={() => wrapperFunction() }
               className={styles["remove-allingredience-button"]}>
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
                   X
                 </button>
               </div>
             ))}
             <div className={styles["search-ingrediences-button-wrapper"]}>
           <button className={styles["ingrediences-for-search-button"]} onClick={()=> setFindRecipe(prevState=>!prevState)}>Search recipes</button>
           </div>
           </div>
         )}
         {findRecipe && ingrediences.length !== 0 &&(
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
                       meal.recipe.ingredientLines.length > 7 ? (
                        <div>
                            {meal.recipe.ingredientLines.length > 17 ?
                            
                            <p>Check ingrediences in recipe</p>
                          :  
                          <>
                            <h4>Ingrediences</h4>
                            <p className={styles["ingr-smaller"]}>
                           {meal.recipe.ingredientLines.map((ingr) => {
                             return <p>{ingr}</p>;
                           })}
                         </p>
                         </>
                            }
                         </div>
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
      
    </div>}
    </div>
   
  
  )
        }

export default Search