import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBarContainer from './containers/SideBarContainer'
import EditForm from './containers/EditForm'

class App extends React.Component {

state = {
  listArray: []
}

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/list_items")
    .then(res => res.json())
    .then(res => this.setState({
        listArray: res
    }))
  }



  render() {
    return (
      <div id="app">
        <h1>Procrastinator Newsfeed</h1>
        <SideBarContainer listArray={this.state.listArray} />
      </div>
    );
  }
}

export default App;
