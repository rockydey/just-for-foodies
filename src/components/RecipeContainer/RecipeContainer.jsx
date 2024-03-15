import { useState } from "react";
import Cooking from "../Cooking/Cooking";
import Recipes from "../Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";

const RecipeContainer = () => {
  const [wantToCooks, setWantToCooks] = useState([]);

  const handleWantToCook = (item) => {
    const filterItems = wantToCooks.filter(
      (cookItem) => cookItem.recipe_id === item.recipe_id
    );
    if (filterItems.length === 0) {
      const newItem = [...wantToCooks, item];
      setWantToCooks(newItem);
    } else {
      filterItems.forEach((filterItem) => {
        if (filterItem.recipe_id !== item.recipe_id) {
          const newItem = [...wantToCooks, item];
          setWantToCooks(newItem);
        } else {
          toast("Item already added to cook!");
        }
      });
    }
  };

  return (
    <div className='max-w-[1320px] mx-auto my-[100px]'>
      <div className="px-2">
        <h3 className='text-center text-4xl font-semibold text-[#150B2B] mb-6'>
          Our Recipes
        </h3>
        <p className='text-center text-[#150B2B99] text-base font-normal mb-12'>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className='flex flex-col-reverse md:flex-row items-start gap-6'>
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Cooking wantToCooks={wantToCooks} setWantToCooks={setWantToCooks}></Cooking>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeContainer;
