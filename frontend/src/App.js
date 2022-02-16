import {Component} from 'react'
import './App.css';

const todoItems = [
  {
    id: 1,
    title: "Go to grocery store",
    description: "Buy ingredients to cook lunch.",
    completed: true
  },
  {
    id: 2,
    title: "Exercise",
    description: "Do strength routine.",
    completed: false
  },
  {
    id: 3,
    title: "Go to library",
    description: "Check out new books to read.",
    completed: true
  },
  {
    id: 4,
    title: "Web application",
    description: "Build web application with React and Django.",
    completed: false
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    }
  }
  displayCompleted = status => {
    if (status) {
      return this.setState({viewCompleted: true})
    }
    return this.setState({viewCompleted: false})
  }
  renderTabList = () => {
    return (
      <div className='my-5 tab-list'>
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >Completed</span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >Incomplete</span>
      </div>
    )
  }
  renderItems = () => {
    const {viewCompleted} = this.state
    const newItems = this.state.todoList.filter(
      item => item.completed === viewCompleted
    )
    return newItems.map(item => (
      <li key={item.id}
      className='list-group-item d-flex justify-content-between align-items-center'>
        <span className={`todo-title me-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
        title={item.title}>{item.title}</span>
        <span>
          <button className='btn btn-info me-2'>Edit</button>
          <button className='btn btn-danger me-2'>Delete</button>
        </span>
      </li>
    ))
  }
  render() {
    return (
      <main className='content p-3 mb-2 bg-info'>
        <h1 className='text-white text-uppercase text-center my-4'>Todo List</h1>
        <div className='row'>
          <div className='col-md-6 col-sma-10 mx-auto p-0'>
            <div className='card p-3'>
              <div><button className='btn btn-warning'>Add Todo</button></div>
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        <footer className='my-3 mb-2 bg-info text-white text-center'>
          Copyright &copy;2022 All rights reserved.
        </footer>
      </main>
    )
  }
}

export default App;
