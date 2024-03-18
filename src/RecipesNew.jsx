/* eslint-disable react/prop-types */
export function RecipesNew(props){
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRecipe(params, ()=> event.target.reset());
  };

  return(
    <div>
      <h1> Recipes New</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input name="image" type="file" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" cols="16" rows="1"></textarea>
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea name="ingredients" id="ingredients" cols="16" rows="1"></textarea>
        </div>
        <div>
          <label htmlFor="instructions">Instructions: </label>
          <textarea name="instructions" id="instructions" cols="16" rows="1"></textarea>
        </div>
        <div>
          <label htmlFor="time">Time: </label>
          <input name="time" type="text" />
        </div>
        <div>
          <label htmlFor="user_id">User_ID: </label>
          <input name="user_id" type="number" min={1} />
        </div>
        <div>
          <label htmlFor="servings">Servings: </label>
          <input name="servings" type="number" min={1} />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  )
}
