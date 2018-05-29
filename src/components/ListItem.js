import React from "react"

const ListItem = (props) => {

    return(
      <li onClick ={ () => props.handleClick(props.newsName)}> {props.newsName} </li>
    )
}

export default ListItem
