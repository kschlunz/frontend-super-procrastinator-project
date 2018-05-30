import React from 'react'
import ListItem from '../components/ListItem'

class NewsListContainer extends React.Component {




  render(){


    const newsList = [...new Set(this.props.listArray.map((newsItem) => newsItem.website))].sort()

    const detailNews = newsList.map((newsName) => {return <ListItem newsName = {newsName} handleClick={this.props.handleClick}/>})




    return(
        <ul>
          {detailNews}
        </ul>
    )
  }
}

export default NewsListContainer
