import React from "react"

const NewTodo = ({ handleCreation }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <input type="text" />
        <input type="button" value="Add" />
      </div>
    </div>
  )
}

export default NewTodo
