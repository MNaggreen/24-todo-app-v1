import Todo from './Todo'

function TodoList(props) {
  /* 2 действие принимаем наш список из app.js и перебираем его ниже */
  const { todos } = props
  /* делаем присваивание и сразу деструктуризацию
  из props т.е. мы получим массив todos из нашего
  app.js*/ 

  return todos.map((todo, index) => <Todo key={index} todo={todo} />)
}
/* передаем строки из списка в файл Todo - тут мы перемещаемся по всему списку todo и возвращаем
каждую строку из массива todo работает как i в цикле
for i in Range() 
index нужен чтобы программа коректно ыводила все строки*/
export default TodoList
