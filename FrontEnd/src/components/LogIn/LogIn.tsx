import React from 'react';
import "./LogIn.scss"

export const LogIn: React.FC = () => {
    const [IsSignIn, SetIsLogin] = React.useState(false);
    const [ClassName, SetClassName] = React.useState("pinkbox");
    const [DisplaySignIn, SetDisplaySignIn] = React.useState("signin");
    const [DisplaySignUp, SetDisplaySignUp] = React.useState("signup nodisplay");

    const toggleFormClick = () => {
      SetIsLogin(!IsSignIn);
      if (IsSignIn)
      {
        SetDisplaySignIn("signin")
        SetDisplaySignUp("signup nodisplay")
        SetClassName("pinkbox");
      }
      else
      {
        SetDisplaySignIn("signin nodisplay")
        SetDisplaySignUp("signup")
        SetClassName("pinkbox right-panel-active");
      }
    };

    return(
      <div className="container">
      <div className="welcome">
        <div className={ClassName}>
          <div className={DisplaySignUp}>
            <h1 className='h1'>Регистрация</h1>
            <div className='form'>
              <input className='input' type="text" placeholder="Имя пользователя"/>
              <input className='input' type="email" placeholder="Адрес эл. почты"/>
              <input className='input' type="password" placeholder="Пароль"/>
              <button className="button buttons submit">Создать аккаунт</button>
            </div>
          </div>
          <div className={DisplaySignIn}>
            <h1 className='h1'>Войти</h1>
            <div className="more-padding form">
              <input className='input' type="text" placeholder="Имя пользователя"/>
              <input className='input' type="password" placeholder="Пароль"/>
              <button className="button buttons submit">Войти</button>
            </div>
          </div>
        </div>
        <div className="leftbox">
          <h2 className="title">
            <span className='span'>
              WONDERFUL
            </span>
            <br/>
            GIFTS
          </h2>
          <p className="desc p">Соберите ваш лучший <span className='span'>подарок</span></p>
          <img className="flower smaller" src="https://cdn-icons-png.flaticon.com/512/4383/4383917.png" alt="1357d638624297b"/>
          <p className="account p">Уже есть аккаунт?</p>
          <button className="button buttons" id="signin" onClick={toggleFormClick}>Войти</button>
        </div>
        <div className="rightbox">
          <h2 className="title">
            <span className='span'>
              WONDERFUL
            </span>
            <br/>
            GIFTS
          </h2>
          <p className="desc p"> Соберите ваш лучший <span className='span'>подарок</span></p>
          <img className="flower" src="https://cdn-icons-png.flaticon.com/512/4383/4383883.png"/>
          <p className="account p">Ещё нет аккаунта?</p>
          <button className="button buttons" id="signup" onClick={toggleFormClick}>Зарегистрироваться</button>
        </div>
      </div>
     </div>
    
    );
}