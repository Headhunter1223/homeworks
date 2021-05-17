import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "123",
          id: Date.now(),
          completed: false,
          description: "assd"
        },
        {
          task: "53453",
          id: Date.now(),
          completed: false,
          description: "assd"
        },
        {
          task: "74754",
          id: Date.now(),
          completed: false,
          description: "assd"
        },
        {
          task: "47577",
          id: Date.now(),
          completed: false,
          description: "assd"
        }
      ],
      todo: ""
    };
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTask = (event) => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ""
    });
  };

  toggleComplete = (todoItem, todoItemIndex) => {
    let stateCopy = { ...this.state };
    let item = stateCopy.todos[todoItemIndex];
    item.completed = !item.completed;
    this.setState(stateCopy, () =>
      console.log(this.state.todos[todoItemIndex])
    );
  };

  clearCompleted = (e) => {
    e.preventDefault();
    let stateCopy = { ...this.state };
    stateCopy.todos = stateCopy.todos.reduce(
      (acc, cur) => [...acc, { ...cur, completed: false }],
      []
    );
    this.setState(stateCopy);
  };

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
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

const TodoList = ({ todos, toggleComplete }) => {
  return (
    <div>
      {todos &&
        todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            toggleComplete={() => toggleComplete(todo, index)}
          />
        ))}
    </div>
  );
};

const Todo = (props) => {
  return (
    <div>
      <p>
        {props.todo.task}:{props.todo.completed ? "Сделано" : "Не сделано"}
        <button
          key={props.todo.id}
          onClick={() => {
            props.toggleComplete(props.todo);
          }}
        >
          Сделать
        </button>
      </p>
      <div>{props.todo.description}</div>
    </div>
  );
};

const TodoForm = (props) => {
  return (
    <form>
      <input
        name="todo"
        value={props.value}
        type="text"
        onChange={props.inputChangeHandler}
        placeholder="Enter new task"
      />
      <button onClick={props.addTask}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default App;