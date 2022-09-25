import { useState } from 'react'

function TodoForm({ addTodo }) {
    /* 2 действие принимаем функцию как переменную
    которую будем использовать позже при 
    submit формы */

    const[text, setText] = useState('')
    const onSubmitHandler = (event) => (
        event.preventDefault()
        /* делаем все действия чтбы изежать при submit 
        перехода на другую страницу */
        addTodo(text)
        setText('')
        /* все это делаем для того чтобы текст 
        пропал из формы setText и позже добавляем
        текст в наш списко 2 действие AddTodo */
    )

    return (
        <form onSubmit={onSubmitHandler}>
            <input placeholder="Enter new todo" value={text} onChange={(e) => e.target.value} />
            {/* onChange значит значение из поля ввода value это контролируемое поле ввода*/}
            <button tyoe="submit">Submit</button>
        </form>
    )
}

export default TodoForm