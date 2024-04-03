/* eslint-disable react/prop-types */
export function RecipesShow(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.updateRecipe(props.recipe.id, params, () => event.target.reset());
  }

  const handleClick = () => {
    props.deleteRecipe(props.recipe);
  }

  return(
    <div>
      <div>
        <h1>{props.recipe.name}</h1>
        <img src={props.recipe.image} />
        <p>Description: {props.recipe.description}</p>
        <p>Ingredients:{props.recipe.ingredients}</p>
        <p>Instructions:{props.recipe.instructions}</p>
        <p>Time:{props.recipe.time}</p>
        <p>Creator:{props.recipe.user_id}</p>
        <p>Servings:{props.recipe.servings}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" defaultValue={props.recipe.name}/>
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input name="image" type="file" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" cols="16" rows="1" defaultValue={props.recipe.description}></textarea>
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea name="ingredients" id="ingredients" cols="16" rows="1" defaultValue={props.recipe.ingredients}></textarea>
        </div>
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <textarea name="instructions" id="instructions" cols="16" rows="1" defaultValue={props.recipe.instructions}></textarea>
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input name="time" type="text" defaultValue={props.recipe.time}/>
        </div>
        <div>
          <label htmlFor="user_id">User_ID: </label>
          <input name="user_id" type="number" min={1} defaultValue={props.recipe.user_id}/>
        </div>
        <div>
          <label htmlFor="servings">Servings: </label>
          <input name="servings" type="number" min={1} defaultValue={props.recipe.servings}/>
        </div>
        <button type="submit" >Update Recipe</button>
      </form>
      <button onClick={handleClick}> Delete Recipe </button>
    </div>
  )
}