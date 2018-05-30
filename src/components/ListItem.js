import React from "react"

const ListItem = (props) => {

    return(
      <li> <span onClick ={ () => props.handleClick(props.newsName)}>{props.newsName}</span> </li>
    )
}

export default ListItem
