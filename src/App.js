import React, { useState } from 'react';

function Todo({ todo, index, completedTodo, removeTodo }) {
  return (
    <div style={{color: todo.isCompleted ? 'green' : 'red'}}>
      {
        todo.content
      }
      &nbsp;&nbsp;
      <button onClick={ () => completedTodo(index)}>Done</button>
      <button onClick={ () => removeTodo(index)}>Delete</button>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [ value, setValue ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

function App() {
  const [ todos, setTodos ] = useState([
    {
      content: 'Eat',
      isCompleted: false,
    },
    {
      content: 'Drink',
      isCompleted: true,
    },
    {
      content: 'Sleep',
      isCompleted: false,
    },
    {
      content: 'Walk',
      isCompleted: false,
    }
  ]);

  const addTodo = content => {
    const newTodos = [ ...todos, { content } ];
    setTodos(newTodos);
  }

  const completedTodo = index => {
    const newTodos = [ ...todos ];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [ ...todos ];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <div>
        {
          todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completedTodo={completedTodo}
              removeTodo={removeTodo}
            />
          ))
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
