import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className='md:w-[57%] grid grid-cols-1 lg:grid-cols-2 gap-6'>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleWantToCook={handleWantToCook}></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipes;
