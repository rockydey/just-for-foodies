import Cooking from "../Cooking/Cooking";
import Recipes from "../Recipes/Recipes";

const RecipeContainer = () => {
  return (
    <div className='max-w-[1320px] mx-auto my-[100px]'>
      <div>
        <h3 className='text-center text-4xl font-semibold text-[#150B2B] mb-6'>
          Our Recipes
        </h3>
        <p className='text-center text-[#150B2B99] text-base font-normal mb-12'>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className='md:flex gap-6'>
        <Recipes></Recipes>
        <Cooking></Cooking>
      </div>
    </div>
  );
};

export default RecipeContainer;
