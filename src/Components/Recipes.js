import React, { useContext } from 'react';
import { RecipeContext } from '../Context';
import { Link } from 'react-router-dom';

const Recipes = () => {
    const {recipe} = useContext(RecipeContext)
    return (  
        <div className='recipe-container'>
               {recipe.map((item,index) => {
                   return(
                    <div key={index}className="recipe-box">
                        <img src={item.recipe.image} className='recipe-img' alt=""/>
                        <div className='recipe-title'>
                        {item.recipe.label.length < 20 ? item.recipe.label : `${item.recipe.label.substring(0,25)}...` }
                       </div>
                       <Link to={`/${Math.floor(item.recipe.calories)}`}>
                       <button className='recipe-btn'>View Recipe</button>
                       </Link>
                    </div>
                   )
               })}
        </div>
    );
}
 
export default Recipes;