import React from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {
          task: 'Сходить в магазин',
          id: Date.now(),
          completed: false,
          description: 'no description'
        }
      ],
      name: '',
      description: ''
    }
  }

  clearPrevent = e => e.preventDefault()

  toggleComplete = (todo, index) => {
    const stateCopy = {...this.state}
    stateCopy.todos[index].completed = !stateCopy.todos[index].completed
    this.setState(stateCopy)
  }

  clearCompleted = () => {
    this.setState({name: ''})
    this.setState({description: ''})
  }

  inputChangeHandler = e => {
    this.setState({[e.target.getAttribute('data-role')]: e.target.value})
  }

  addTask = () => {
    if (this.state.name && this.state.description) {
      const todos = [...this.state.todos]
      todos.push({
        task: this.state.name,
        id: Date.now(),
        completed: false,
        description: this.state.description
      })
      this.setState({todos})
      return
    }
    alert('У вас не заполнены все поля.')
  }

  render() {
    return (
      <div className="App">
        <h2>Todo app</h2>

        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />

        <TodoForm
          todos={this.state.todos}
          name={this.state.name}
          description={this.state.description}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default App
