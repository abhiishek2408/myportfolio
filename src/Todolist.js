
import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};

const Todolist = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD', payload: text });
      setText('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: '10px' }}>
            <span
              onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}
              style={{ marginLeft: '10px' }}
            >
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
