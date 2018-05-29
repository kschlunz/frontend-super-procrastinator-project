import React from "react";

const Detail = (props) => {

  return(
    <ul>
        <a href = {props.newsItem.url} target="_blank" > {props.newsItem.title} </a> <br/> {props.newsItem.website}

    </ul>
  )
}

export default Detail
