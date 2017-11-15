import React from "react"
import PropTypes from "prop-types"
import Todo from "./Todo.jsx"

var TodoList = ({ todos, handleCompletion }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo
          text={todo.text}
          hour={todo.hour}
          handleCompletion={handleCompletion}
        />
      ))}
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
