import PropTypes from "prop-types";
import { useState } from "react";

const Cooking = ({ wantToCooks, setWantToCooks }) => {
  const [cookingItems, setCookingItems] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handlePreparing = (item) => {
    const filterItems = wantToCooks.filter(
      (filterCookItem) => filterCookItem.recipe_id !== item.recipe_id
    );
    setWantToCooks(filterItems);
    const findItem = wantToCooks.find(
      (cookItem) => cookItem.recipe_id === item.recipe_id
    );
    const newCookItem = [...cookingItems, findItem];
    setCookingItems(newCookItem);

    cookingItems.forEach((cookedItem) => {
      const totalCookedTime = totalTime + cookedItem.preparation_time;
      setTotalTime(totalCookedTime);
      const totalGainCalories = totalCalories + cookedItem.calories;
      setTotalCalories(totalGainCalories);
    });
  };
  return (
    <div className='md:w-[45%] border border-[#28282833] py-8 rounded-2xl'>
      <div className='mb-8'>
        <h3 className='text-center text-[#282828] font-semibold text-2xl'>
          Want to Cook: 0{wantToCooks.length}
        </h3>
        <div className='border-b mx-20 my-6'></div>
        <div className='overflow-x-auto '>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-[#878787] text-base font-medium'>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='bg-[#28282808]'>
              {/* row */}
              {wantToCooks.map((wantToCook, idx) => (
                <tr
                  key={wantToCook.recipe_id}
                  className='text-[#282828B3] text-base font-normal'>
                  <th className='pl-6'>{idx + 1}</th>
                  <td>{wantToCook.recipe_name}</td>
                  <td>{wantToCook.preparation_time} minutes</td>
                  <td>{wantToCook.calories} calories</td>
                  <th className='pr-6'>
                    <button
                      onClick={() => {
                        handlePreparing(wantToCook);
                      }}
                      className='bg-[#0BE58A] py-2 px-4 rounded-full border border-[#0BE58A] text-[#150B2B] text-base font-medium cursor-pointer'>
                      Preparing
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className='text-center text-[#282828] font-semibold text-2xl'>
          Currently Cooking: 0{cookingItems.length}
        </h3>
        <div className='border-b mx-20 my-6'></div>
        <div className='overflow-x-auto '>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-[#878787] text-base font-medium'>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className='bg-[#28282808]'>
              {/* row */}
              {cookingItems.map((cookingItem, idx) => (
                <tr
                  key={cookingItem.recipe_id}
                  className='text-[#282828B3] text-base font-normal'>
                  <th className='pl-6'>{idx + 1}</th>
                  <td>{cookingItem.recipe_name}</td>
                  <td>{cookingItem.preparation_time} minutes</td>
                  <td>{cookingItem.calories} calories</td>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr className='text-[#282828CC] text-base font-medium'>
                <th></th>
                <th></th>
                {cookingItems.length === 0 ? (
                  <th></th>
                ) : (
                  <th>
                    Total Time = <span className='block'></span> ${totalTime}{" "}
                    minutes
                  </th>
                )}
                {cookingItems.length === 0 ? (
                  <th></th>
                ) : (
                  <th>
                    Total Calories = <span className='block'></span>{" "}
                    {totalCalories} calories
                  </th>
                )}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  wantToCooks: PropTypes.array.isRequired,
  setWantToCooks: PropTypes.func.isRequired,
};

export default Cooking;
