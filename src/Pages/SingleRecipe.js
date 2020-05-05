import React, { useContext, useEffect } from 'react';
import { RecipeContext } from '../Context';
import { Link } from 'react-router-dom';
const SingleRecipe = (props) => {
    const {getSingleRecipe} = useContext(RecipeContext);
    const slug = props.match.params.slug
    const recipeData = getSingleRecipe(slug);
    useEffect(()=>{
        console.log(recipeData);
    },[recipeData])
    if(!recipeData){
        return(
            <h1 style={{textAlign:'center',marginTop:'6rem'}}>
                No Recipe Found
            </h1>
        )
    }
    return ( 
        <div className='single-recipe'>
            <div className='col-1'>
                <h2>{recipeData.recipe.label.length < 35 ? recipeData.recipe.label : `${recipeData.recipe.label.substring(0,25)}...` }</h2>
                <img src={recipeData.recipe.image} alt=""/>
                <h3>Publisher : {recipeData.recipe.source}</h3>
                <h3>For More Information <a href={recipeData.recipe.shareAs} target='_blank'  rel="noopener noreferrer" >Click Here</a></h3>   
                <Link to='/'><button>Back Home</button></Link>
            </div>
            <div className='col-2'>
                <h2>{recipeData.recipe.ingredientLines.length} ingredients</h2>
                <ul >
                    {recipeData.recipe.ingredientLines.map((item,index) =>(<li key={index}>{item.length < 20 ? item :`${item.substring(0,50)}...` }</li>))}
                </ul>  
            </div>
        </div>
     );
}
 
export default SingleRecipe;
