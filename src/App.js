import { useState } from 'react'
/* сначала глобальные импорты */

/* потом локальные импорты */
/* import TodoList from './components/TodoList/TodoList.js' 
такой путь очень длинный */
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

/* рекомендуется создавать приложение сначала без стилей
апотом уже стилизовать и позиционировать размечать
 */
function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }
  /*   создаем функцию которая будет добавлять строку в список 
в данной функции мы берем массив деструктуризируем его для
удобства и доавляем туда наш текст */

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {/* 1 действие передаем функцию как свойство в файл
      todoform  */}
      <TodoList todos={todos} />
      {/* 1 действие передаем наш список как переменную в файл TodoList.js */}
    </div>
  )
}

export default App
