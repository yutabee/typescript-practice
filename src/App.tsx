import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import { Text } from './Text';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { User } from './types/user';
import UserProfile from './UserProfile';

const user:User = {
  name: 'ダーマン',
  // hobbies:['映画','ゲーム'],
}

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      });
  }

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color='red' fontSize='20px' ></Text>
      <button onClick={onClickFetchData}>データを取得する</button>
      {todos.map((todo:TodoType, index) => (
        <Todo key={index} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
