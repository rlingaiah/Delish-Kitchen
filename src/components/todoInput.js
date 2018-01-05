import React from 'react';
import './todoInput.css';
export default class TodoInput extends React.Component{
  constructor(props){
    super(props)
    this.state={value: "",
                flag:true, data:[]};
    this.handleChange=this.handleChange.bind(this);
    this.addTodo=this.addTodo.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});

  }
  addTodo(todo){
    if(todo.length>0){
    this.props.addTodo(todo);
    this.setState({value: ""});
    }
  }

  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
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


  render(){
    return(
      <div>
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      <button onClick={this.fetchData()} >Submit</button>
      {
      //  if(flag){
        this.state.data.map((data)=>
        <div>

          {data.recipe.label}
          {data.recipe.ingredientLines}
        </div>)
      }

      </div>
    );
  }}
