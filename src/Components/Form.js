import React, { useContext,useState } from 'react';
import { RecipeContext } from '../Context';

const Form = () => {
    const {setQuery} = useContext(RecipeContext);
    const [search, setSearch] = useState('');
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setQuery(search)
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Enter Your Text Here'
            value={search}
            onChange={handleChange}
            />
            <button
            
            >Search</button>
        </form>
    );
}
 
export default Form;