import React from 'react';
import './recipe.css';

export default class Recipe extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="division">
      <button className="recipetodo" onClick={(e)=> this.componentDidMount(this.props.id) }>remove</button>{this.props.todo.text}
      </div>
    )
  }
}
