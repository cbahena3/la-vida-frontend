import axios from "axios";
import { useState, useEffect } from "react";
import { Recipes } from "./RecipesIndex"


export function Content(){
  const [recipes, setRecipes] = useState([]);
  const recipesIndex = () =>{
    axios.get("http://localhost:3000/recipes.json").then((response) =>{
      setRecipes(response.data)
    })
  }

  useEffect(recipesIndex, []);

  return(
    <div>
      <h1>The Content: </h1>
      <Recipes recipes = {recipes}/>
    </div>
  )
}