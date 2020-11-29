import React from 'react';
import CardList from '../componenets/CardList';
import Searchbox from '../componenets/searchbox';
import './app.css';
import Scroll from '../componenets/Scroll.js';

class App extends React.Component {    

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {     
        this.setState({searchfield: event.target.value})
    }

    render () {
        const {robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); 
        })
        return !robots.length ?
           <h1 className = 'tc'>Loading</h1> :
           (
            <div className = 'tc'>
                <h1 className = 'f2'>Robot Friends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = { filteredRobots } />
                </Scroll>      
            </div>
        );
    }
}

export default App;