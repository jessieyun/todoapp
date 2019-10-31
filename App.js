import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import TodoItem from './app/components/TodoItem';

export default class App extends React.Component {

  state = {
    inputValue: "",
    todos : [
      {
        title: "To do",
        isComplete: false
      },
      {
        title : "Walk",
        isComplete: false
      }
    ]
  }
  _makeTodoItem = ({item, index}) => {
    return(
      <TodoItem text={item.title} isComplete={item.isComplete}/>
    )
  }

  _changeText = (value) => {
    this.setState({inputValue: value});
  }

  _addTodoItem = () => {
    const prevTodo = this.state.todos;
    const newTodo = { title: this.state.imputValue, isComplete : false};

    this.setState(
      {
        inputValue: '',
        todos:prevTodo.concat (newTodo)
      }
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do 입력"/>
          <Input
          value={this.state.inputValue}
          changeText={this._changeText}
          addTodo={this._addTodoItem}/>
        </View>
        <View style={styles.todoContainer}>
          <SubTitle title="To-Do List"/>
          <TodoItem text="알바 가기" isComplete={true}/>
          <TodoItem text="엄마한테 전화하기"isComplete={false}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  centered:{
    alignItems: "center"
  },
  inputContainer:{
    marginLeft: 20
  },
  todoContainer: {
    marginTop: 20,
    marginLeft:20
  }
});
