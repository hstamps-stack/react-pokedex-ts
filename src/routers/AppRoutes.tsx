import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import SinglePokemonPage from '../pages/SinglePokemon';
import Navbar from "../components/Navbar"

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        {/* Nav Component */}
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route
            path='/pokemon/:pokemonName'
            exact
            component={SinglePokemonPage}
          />
        </Switch>
        {/* Footer */}
      </div>
    </div>
  );
};

export default AppRoutes;
