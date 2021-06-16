import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../../components/UI/Button/Button'

export default class Auth extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  onSubmitHandler = event => {
    event.preventDefault()
  }

  render() {
    return(
      <div className={classes.Auth}>
        <div>
          <h1>Aвторізація</h1>
          <form onSubmi={this.onSubmitHandler} className={classes.AuthForm}>
            <input type="text"/>
            <input type="text"/>

            <Button 
              type="success" 
              onClick={this.loginHandler}
            >
              Увійти
            </Button>

            <Button 
              type="primary" 
              onClick={this.registerHandler}
            >
              Зареєструватися
            </Button>
          </form>
        </div>
      </div>
    )
  }
}