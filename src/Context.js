import React, { useState, useEffect, createContext } from 'react';

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const [recipe,setRecipe] = useState([]); 
    const [query,setQuery] = useState('chicken');
    const APP_ID = 'b52a12a0';
    const APP_KEY = '8935844f37db8dc94dca5efb56bea776';
    const URL =  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getRecipeData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setRecipe(data.hits)
    }
    useEffect(()=>{
        getRecipeData();
    },[query])
    const getSingleRecipe = (slug) => {
        let tempRecipes = [...recipe];
        tempRecipes = tempRecipes.find(item => Math.floor(item.recipe.calories) == slug);
        return tempRecipes;
    }
    return (  
        <RecipeContext.Provider value={{recipe,setQuery,getSingleRecipe}}>
            {props.children}
        </RecipeContext.Provider>
    );
}
 
export default RecipeContextProvider;