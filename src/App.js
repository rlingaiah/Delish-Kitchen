import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ToDoInput from './components/todoInput';
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todos:[
        {id:0,text:"biryani"},
        {id:1, text:"chicken"},
        {id:2,text:"pizza"},

      ],
      data:[],
      nextId:3

    }
    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
    //this.fetchData=this.fetchData.bind(this);
  }
  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id:this.state.nextId, text:todoText});

    this.setState({
      todos: todos,
      nextId:++this.state.nextId,
    });
  }
  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo,index)=>todo.id!==id)
    })
  }
  componentDidMount(){
    fetch('http://api.edamam.com/search?q=chicken&app_id=794d7285&app_key=db242d9e1784b30c6783fb9dc70489a6').
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      console.log(findresponse.hits)
      this.setState({
        data:findresponse.hits,
      })
    })
  }

  render() {
    return (
      <div className="App">
      <div className= "todo-wrapper">
      <Header />
      <ToDoInput todoText="" addTodo={this.addTodo}/>

    </div>
    </div>
  )
}
  }

export default App;
