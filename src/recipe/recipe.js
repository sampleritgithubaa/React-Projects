import React, { useEffect, useState } from "react";
import recipe_1 from "../recipe_1.json";
import recipe_2 from "../recipe_2.json";
import recipe_3 from "../recipe_3.json";
import "bootstrap/dist/css/bootstrap.css";
import "./recipe.css";
import Step from "../step/step";

export default function Recipe({ recipeId }) {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipeDetails, setRecipeDetails] = useState();

  useEffect(() => {
    if (recipeId !== selectedRecipeId) {
      setSelectedRecipeId(recipeId);
      loadRecipeData(recipeId);
    }
  }, [recipeId]);

  const loadRecipeData = (recipeId) => {
    switch (recipeId) {
      case "recipe_1":
        setRecipeDetails({ ...recipe_1.data.recipe });
        break;
      case "recipe_2":
        setRecipeDetails({ ...recipe_2.data.recipe });
        break;
      case "recipe_3":
        setRecipeDetails({ ...recipe_3.data.recipe });
        break;
    }
  };

  return (
    <div>
      <div>
        <div className="recipe">
          {recipeDetails && (
            <svg width="300px" height="80">
              <rect
                x="0"
                y="0"
                width="100%"
                height="80px"
                fill="#f298a1"
                stroke="white"
                stroke-width="8px"
              />

              <text
                x="50%"
                y="50%"
                dominant-Baseline="middle"
                fill="black"
                text-anchor="middle"
                fontWeight="bold"
              >
                {recipeDetails?.name}
              </text>
            </svg>
            
          )}
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&darr;</h1>
        </div>
        {recipeDetails && <Step recipeData={recipeDetails} />}
      </div>
    </div>
  );
          }