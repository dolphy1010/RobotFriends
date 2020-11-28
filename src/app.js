import React from 'react';
import CardList from './CardList';
import Searchbox from './searchbox';
import './app.css';
import Scroll from './Scroll.js';

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
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })
        if (this.state.robots.length === 0) {
            return <h1 className = 'tc'>Loading</h1>
        } else {
        return (
            <div className = 'tc'>
                <h1 className = 'f2'>Robot Friends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots = { filteredRobots } />
                </Scroll>      
            </div>
        );}
    }
}

export default App;