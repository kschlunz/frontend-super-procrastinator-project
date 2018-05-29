import React from "react"

const ToggleForm = (props) => {
  return(
    <li>
      <input type="checkbox" checked={props.newsObj.checked} onChange={() => props.handleToggle(props.newsObj.website)} /> {props.newsObj.website}
    </li>
  )
}

export default ToggleForm
