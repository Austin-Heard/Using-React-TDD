import { useEffect, useState } from 'react';

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipeList, addNewRecipe] = useState({});

  let submitRecipe = (event) => {
    //Appends all information to a state object

  };

  useEffect(() => {
    //Updates to show the recipes if not on the recipe form sheet

  },[recipeList])

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        recipeFormShown ? 
          <>
            <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe}>
              <label htmlFor="newRecipeName">Recipe name: </label>
              <input type="text" id="newRecipeName" />
              <label htmlFor="newRecipeInstructions">Instructions:</label>
              <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." />
              <input type="submit" />
            </form>
          </>
          : 
          <>
            {/* Needs to change if there are recipes: <p>There are no recipes to list.</p>*/}
            <button onClick={ () => showRecipeForm(!recipeFormShown) }>Add Recipe</button>
          </>
      }
    </div>
  );
}

export default App;