var React = require('react');
var CreateReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
require('./css/index.css');
//Module requires
var TodoItem = require('./todoItem');

//Create component
var TodoComponent = CreateReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up!', 'eat some cheese!', 'take a nap!', 'buying flowers!']
        }
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return (
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            )
        }.bind(this));
        return(
            <div id="todo-list">
                <p>Todo list:</p>
                <ul>{todos}</ul>
            </div>
        );
    },
    //Custom function
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    }
    
});

//Custom function


//Put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));