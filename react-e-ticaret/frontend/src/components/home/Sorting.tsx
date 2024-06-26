import React from "react";

interface SortingProps {
  setSort: React.Dispatch<React.SetStateAction<string>>;
} 

const Sorting = ({setSort} : SortingProps) => { 

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  }; 

  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select onChange={handleSortChange} name="" id="" className="bg-white-200 py-3 px-5">
        <option disabled selected value="">
          Seciniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
