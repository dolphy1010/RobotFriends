import React from  'react';
import CardList from './CardList';
import { robots } from './robots';
import Searchbox from './searchbox';

const App = () => {
    return (
        <div className = 'tc'>
            <h2>Robot Friends</h2>
            <Searchbox />
            <CardList robots = { robots } />
        </div>
    );
}

export default App;