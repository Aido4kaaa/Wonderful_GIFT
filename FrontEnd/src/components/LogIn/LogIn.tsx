import React from 'react';
import "./LogIn.scss"


export const LogIn: React.FC = () => {
    const ToSignInClick = () => {
        const container = document.getElementById("container");
        container?.classList.remove("right-panel-active");
        console.log('1');
      };
    const ToSignUpClick = () => {
        const container = document.getElementById("container");
        container?.classList.add("right-panel-active");
        console.log('2');
    };

    return(
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1>Регистрация</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='LogInButton'>Регистрация!</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Вход</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='LogInButton'>Войти!</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Здравствуйте!</h1>
            <p>У вас уже есть аккаунт?</p>
            <button className="ghost" id="signIn" onClick={ToSignInClick}>Войти</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>C возвращением!</h1>
            <p>У вас нет аккаунта?</p>
            <button className="ghost" id="signUp" onClick={ToSignUpClick}>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
    );
}