import React from "react";

const Sorting = () => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select name="" id="" className="bg-white-200 py-3 px-5">
        <option disabled value="">
          Seciniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
