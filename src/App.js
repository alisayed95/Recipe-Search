import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MainPage from './Pages/MainPage';
import RecipeContextProvider from './Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleRecipe from './Pages/SingleRecipe';

function App() {
  return (
    <RecipeContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/:slug' component={SingleRecipe} />
        </Switch>
      </Router>
    </RecipeContextProvider>
  );
}

export default App;
