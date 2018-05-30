import React from 'react'
import ToggleForm from '../components/ToggleForm'

class EditForm extends React.Component{

  state = {
    selectedNews: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/api/v1/list_items")
    .then(res => res.json())
    .then(res => {
      const allNewsNames = res.map((newsItem) => newsItem.website)
      const namesArray = [...new Set(allNewsNames)]
      const newsList = namesArray.map((newsItem) => Object.assign({}, {website: newsItem, checked: true}))

      this.setState({
        selectedNews: newsList
    })})
  }

  handleToggle = (website) => {
    const newSelectedNews = this.state.selectedNews.map((newsObj) => {
      if(newsObj.website === website){
        newsObj.checked = !newsObj.checked
        return newsObj
      }
      else {
        return newsObj
      }
    })

    this.setState({selectedNews: newSelectedNews}, this.props.handleEditSubmit(this.state.selectedNews))
  }

  render(){

    const detailNews = this.state.selectedNews.map((newsObj) => {return <ToggleForm newsObj = {newsObj} handleToggle={this.handleToggle}/>})

    const form = (
      <div id="popup_inner">
        <div id="popup_innermost">
          <form>
            <ul>
              {detailNews}
            </ul>
          </form>
          <button onClick = {this.props.handleEditClick}>Close Window</button>
        </div>
      </div>
    )

    return(
      <div id={this.props.display ? "popup" : ""}>
          {this.props.display ? form : ""}
      </div>
    )
  }
}
export default EditForm
