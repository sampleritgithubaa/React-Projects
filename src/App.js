import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Recipe from "./recipe/recipe";
import RecipeList from "./recipeList.json";

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const bg_color = {
    backgroundColor: "#e3f2fd",
  };

  
  useEffect(()=> {
    if(RecipeList && RecipeList.data && RecipeList.data.recipeList) {
      setRecipeList(RecipeList.data.recipeList);
    }
  }, []); 

  useEffect(() => {
  }, [selectedRecipe])
const onRecipeDropDownChange = (e) => {
    setSelectedRecipe(e.target.value);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-light" style={bg_color}>
        <a className="navbar-brand">Recipe Visualization</a>
      </nav>
      <div className="row p-4">
        <div className="col">
          <select
            className="form-select w-50"
            onChange={(e) => onRecipeDropDownChange(e)}
          >
            <option value="">Select Recipe</option>
            {recipeList && recipeList.map((item) => {
              return (<option value={item.value}>{item.label}</option>)
            })}
          </select>
        </div>
        <div className="col">
          <div className="d-flex">
            <div className="legend recipe-color"></div>
            <p className="rep me-2"> Recipe</p>
            <div className="legend step-color"></div>
            <p className="rep me-2"> Steps</p>
            <div className="legend activity-color"></div>
            <p className="rep me-2">Activities</p>
            <div className="legend parameter-color"></div>
            <p className="rep me-2">Parameter</p>
          </div>
        </div>
      </div>
        {selectedRecipe && <Recipe recipeId={selectedRecipe}/>}
    </div>
  );
}