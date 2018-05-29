import React from 'react'
import Detail from '../components/Detail'

class MainContainer extends React.Component {

  render (){
    const findNews = this.props.listArray.filter((newsItem) => { return newsItem.website === this.props.currentNewsObj })

    const newsDetail = findNews.map((newsItem) => {return <Detail newsItem = {newsItem} /> })
    return(
      <div>
        {newsDetail}
      </div>
    )
  }

}

export default MainContainer
