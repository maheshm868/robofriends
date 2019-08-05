import React,{Component} from 'react';
import Cardlist from './Cardlist.js';
//import {arrRobots} from './robots.js'
import SearchBox from './SearchBox.js'
import './App.css';
import Scroll from './Scroll.js'

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchField:""
        }
    }
    onSearchChange = (event)=>{
        this.setState({searchField:event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1 className="tc">Please wait Loading!</h1>
        } else{
            return(
                <div className="tc">
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist robodetails={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{return response.json();})
        .then( users=>{this.setState({robots:users})});
    }
}
export default App;
