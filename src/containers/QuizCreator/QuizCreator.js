import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../components/UI/Button/Button';

export default class QuizCreator extends Component {

  submitHandler = (event) => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuestionHandler = () => {

  }

  render() {
    return(
      <div className={classes.QuizCreator}>
        <div>
          <h1>Cтворення тесту</h1>

          <form onSubmit={this.submitHandler}>
            <input type={"text"}/>
            <hr/>
            <input type={"text"}/>
            <input type={"text"}/>
            <input type={"text"}/>
            <input type={"text"}/>

            <select></select>
            <Button
              type="primory"
              onClick={this.addQuestionHandler}
            >
              Додати питання
            </Button>

            <Button
              type="success"
              onClick={this.createQuestionHandler}
            >
              Створити тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}