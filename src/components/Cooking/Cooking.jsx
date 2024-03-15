import PropTypes from "prop-types";

const Cooking = ({ wantToCooks }) => {
  return (
    <div className='md:w-[43%] border border-[#28282833] py-8 px-6 rounded-2xl'>
      <h3 className='text-center text-[#282828] font-semibold text-2xl'>
        Want to Cook : 0{wantToCooks.length}
      </h3>
      <div className='border-b mx-20 my-6'></div>
      <div className='overflow-x-auto'>
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
          <tbody>
            {wantToCooks.map((wantToCook, idx) => (
              <tr key={wantToCook.recipe_id}>
                <th>{idx + 1}</th>
                <td>{wantToCook.recipe_name}</td>
                <td>{wantToCook.preparation_time} minutes</td>
                <td>{wantToCook.calories} calories</td>
                <th>
                  <button className='bg-[#0BE58A] py-2 px-4 rounded-full border border-[#0BE58A] text-[#150B2B] text-base font-medium cursor-pointer'>
                    Preparing
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooking.propTypes = {
  wantToCooks: PropTypes.array.isRequired,
};

export default Cooking;
