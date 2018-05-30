import React from 'react';
import NewsListContainer from './NewsListContainer'
import MainContainer from './MainContainer'
import EditForm from './EditForm'

class SideBarContainer extends React.Component{
  state ={
    listArray: [],
    currentNewsObj: "",
    display: false
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/list_items")
    .then(res => res.json())
    .then(res => this.setState({
        listArray: res
    }))
  }

  handleClick = (newsName) => {
      this.setState({
        currentNewsObj: newsName
      })
  }

  handleEditClick = () => {
    this.setState({
      display: !this.state.display
    })
  }

  handleEditSubmit = (selectedNews) => {
    const uncheckedNews = selectedNews.filter((newsObj) => !newsObj.checked).map((newsObj) => newsObj.website)
    const newNewsArray = this.props.listArray.filter((newsObj) => !uncheckedNews.includes(newsObj.website))

    this.setState({ listArray: newNewsArray })

  }

  render(){
    return(
      <div>
        <div id="flexContainer">
          <NewsListContainer listArray = {this.state.listArray} handleClick= {this.handleClick}/>
          <MainContainer currentNewsObj = {this.state.currentNewsObj} listArray = {this.state.listArray}/>
        </div>
        <EditForm handleEditClick={this.handleEditClick} display={this.state.display} listArray = {this.state.listArray} handleEditSubmit={this.handleEditSubmit}/>
        <button onClick = {this.handleEditClick}>Edit List</button>
      </div>
    )
  }
}

export default SideBarContainer;
