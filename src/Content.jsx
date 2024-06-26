import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import {RecipesNew} from "./RecipesNew";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { UsersShow } from "./UsersShow";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";

export function Content(){
  const [recipes, setRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [showUser, setShowUser] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const recipesIndex = () =>{
    axios.get("http://localhost:3000/recipes.json").then((response) =>{
      setRecipes(response.data);
    })
  };

  const displayRecipe = (recipe) => {
    setShowRecipe(true);
    setCurrentRecipe(recipe);
  };

  const onCloseRecipe = () => {
    setShowRecipe(false);
  };

  const recipesCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/recipes.json", params).then((response) =>{
      setRecipes([...recipes, response.data]);
      successCallback();
    })
  };

  const displayUser = (user) => {
    console.log("displayUser", user);
    setShowUser(true);
    setCurrentUser(user);
  };

  const updateRecipe = (id, params, successCallback)=>{
    console.log("handleUpdatePhoto", params);
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      setRecipes(
        recipes.map((recipe)=>{
          if(recipe.id === response.data.id){
            return response.data;
          } else {
            return recipe;
          }
        })
      );
      successCallback();
      closeRecipe();
    });
  };

  const deleteRecipe = (recipe) => {
    // eslint-disable-next-line no-unused-vars
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`).then((response) => {
      setRecipes(recipes.filter((p)=> p.id !== recipe.id));
      closeRecipe();
    })
  }

  useEffect(recipesIndex, []);

  return(
    <div>
      
      <Routes>
        {/* User Routes */}
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/logout" element = {<Logout />}/>

        {/* User Account */}
        <Route path = "/account-information" element = {<UsersShow user = {currentUser} />}/>

        {/* For The Recipes */}
        <Route path = "/recipes" element = { <RecipesIndex recipes = {recipes} displayRecipe = {displayRecipe}/>}/>
        <Route path = "/create-recipe" element = {<RecipesNew onCreateRecipe = {recipesCreate} />}/>

        {/* Home Page */}
        <Route path = "/" element = {<Home recipes = {recipes} displayRecipe = {displayRecipe}/>}/>
      </Routes>

      <Modal show = {showRecipe} onCloseRecipe = {onCloseRecipe}>
        <RecipesShow recipe = {currentRecipe} updateRecipe = {updateRecipe} deleteRecipe = {deleteRecipe}/>
      </Modal>

      
    </div>
  )
}