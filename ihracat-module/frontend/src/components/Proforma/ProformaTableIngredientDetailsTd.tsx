import React from "react";
import IngredientDetailsWrapper from "./IngredientDetailsWrapper";

interface ProformaTableIngredientDetailsTdComponen {
  data: dataProps;
  index: number | null;
}

interface dataProps {
  ingredients: string[] | null;
  ingredients_data: any[];
}

const ProformaTableIngredientDetailsTd = ({
  data,
  index,
}: ProformaTableIngredientDetailsTdComponen) => {
  const RowIndex = index;
  if (!data.ingredients) {
    return null;
  }

  return (
    <>
      <div>
        {data.ingredients.map((ingredient: string, idx: number) => {
          const ingredient_info = data?.ingredients_data[idx];
          return (
            <IngredientDetailsWrapper
              key={idx}
              info={ingredient_info}
              data={ingredient}
              index={RowIndex}
              count={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProformaTableIngredientDetailsTd;
