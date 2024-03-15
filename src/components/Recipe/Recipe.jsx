import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_name,
    recipe_img,
    description,
    ingredients,
    preparation_time,
    calories,
  } = recipe;
  return (
    <div className='card p-6 border border-[#28282833] rounded-2xl'>
      <img className='rounded-2xl' src={recipe_img} alt='recipe image' />
      <div className='mt-6 mb-3'>
        <h4 className='text-xl font-semibold text-[#282828] mb-4'>
          {recipe_name}
        </h4>
        <p className='text-[#878787] text-base font-normal'>{description}</p>
      </div>
      <hr />
      <div className='my-3 card-body p-0'>
        <h4 className='text-[#282828] text-lg font-medium mb-4'>
          Ingredients: {ingredients.length}
        </h4>
        <ul className='list-disc text-[#878787] text-lg font-normal ml-8 space-y-2'>
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div className='mt-3 card-actions'>
        <div className='flex gap-5 items-center mb-6'>
          <div className='flex gap-2 items-center'>
            <IoMdTime className='w-5 h-5' />
            <p className='text-[#282828CC] text-base'>
              {preparation_time} minutes
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <AiOutlineFire className='w-5 h-5' />
            <p className='text-[#282828CC] text-base'>{calories} calories</p>
          </div>
        </div>
        <button
          onClick={() => {
            handleWantToCook(recipe);
          }}
          className='bg-[#0BE58A] py-3 px-6 rounded-full border border-[#0BE58A] text-[#150B2B] text-lg font-medium cursor-pointer'>
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
};

export default Recipe;
