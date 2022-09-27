import { RiTodoFill } from 'react-icons/ri'
/* из внешних пакетов делаем импрот сверху */

import styles from './Todo.module.css'


function Todo({ todo, index, deleteTodo }) {
    /* 3 действие принимаем наш список из TodoList и выводим по одной строке */
  return (
    <div className={styles.todo} 
    onDoubleClick={() => deleteTodo(index)}>
      {/* по двойному клику вызываем функциб deleteTodo и передаем
      index из map */}
      <RiTodoFill className={styles.todoIcon}/>
      {/* иконка из установленного нпм пакета react icons */}
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
