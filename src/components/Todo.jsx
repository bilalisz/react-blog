import React from "react";

const Todo = (props) => {
  const { todos, deleteTod } = props;

  {
    return todos.length ? (
      <div>
        <ul className="center">
          {todos.map((todo) => (
            <li className="collection-item" key={todo.id}>
              {todo.content}
              <span className="btn" onClick={() => deleteTod(todo.id)}>
                delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className="center">
        <h3>No Item</h3>
      </div>
    );
  }
};

export default Todo;
