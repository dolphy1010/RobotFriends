import React from  'react';
import CardList from './CardList';
import { robots } from './robots';

const App = () => {
    return (
        <div className = 'tc'>
        <h2>Robot Friends</h2>
         <CardList robots = { robots } />
        </div>
    );
}

export default App;