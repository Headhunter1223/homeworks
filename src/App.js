import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyTodoList />
      </header>
    </div>
  );
}

export default App;

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Name 1",
        description: "What needs to be done",
        completed: 0
      },
      {
        id: 2,
        name: "Name 1",
        description: "What needs to be done",
        completed: 0
      },
      {
        id: 3,
        name: "Name 1",
        description: "What needs to be done",
        completed: 0
      }
    ]
  };

  MapTasks() {
    console.log(typeof this.state.tasks[0].id);
    return this.state.tasks.map((t) => (
      <Task
        key={t.id}
        id={t.id}
        name={t.name}
        description={t.description}
        completed={t.completed}
      />
    ));
  }

  render() {
    return <div>{this.MapTasks()}</div>;
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.completed = props.completed;
  }
  handleClick(prop) {
    console.log(prop.id, "Status: ", prop.completed);
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>

        <div>{this.props.description}</div>

        <div>
          {this.props.completed}
          <button onClick={() => console.log(this.props.id, "Status: ", this.props.completed)} />
        </div>
      </div>
    );
  }
}
