import React from "react";
import "./RecipesList.scss";
import { Link } from "react-router-dom";
function RecipesList({ recipes = [] }) {

    const checkForRecipes = () => {
        if (recipes.length === 0)
          return <div className="noRecipes" >No Recipes Found, search for the different item</div>
        else 
           return renderList()
        
    }


  const renderList = () => {
    return (
      <div className="list">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`}>
            <div className="cardContainer">
              <div className="cardHeader">{recipe.title}</div>
              <div className="recipeInfo">
                <span className="tag level">{recipe.level} </span>
                <span className="tag time">{recipe.time} </span>
                <span className="tag veg">
                  {recipe.isVeg ? "veg" : "non-veg"}{" "}
                </span>
              </div>
              <img className="image" src={recipe.image} alt={recipe.title} />
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="recipeList">
      <h3 className="title">Check out these Recipes</h3>
      {checkForRecipes()}
    </div>
  );
}

export default RecipesList;
