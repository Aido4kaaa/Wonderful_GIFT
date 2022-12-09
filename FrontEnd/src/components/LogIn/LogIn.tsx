import React from 'react'
import { URL } from '../../Classes/Constants';
import "./LogIn.scss"

export const LogIn: React.FC = () => {
    const [IsSignIn, SetIsLogin] = React.useState(false);
    const [ClassName, SetClassName] = React.useState("pinkbox");
    const [DisplaySignIn, SetDisplaySignIn] = React.useState("signin");
    const [DisplaySignUp, SetDisplaySignUp] = React.useState("signup nodisplay");
    const [Email, SetEmail] = React.useState("");
    const [Name, SetName] = React.useState("");
    const [Password, SetPassword] = React.useState("");


    const SignInQuery = async () => {
      if (Name.length > 0 && Password.length > 0)
        {
            const response = await fetch(URL.concat("User/SignIn/" + Name + "/" + Password))
            const data = await response.json();
            console.log(data);
            localStorage.setItem("UserName", data.name);
            window.location.assign("http://localhost:4000/CreateGift");
        }
      else
        alert("что-то пошло не так")        
    }

    const SignUpQuery = async () => {
      if (Email.length > 0 && Password.length > 0 && Name.length > 0)
        {
            const response = await fetch(URL.concat("User/SignUp"), {
                method: "POST",
                headers: {"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    name : Name,
                    email : Email,
                    password : Password,
                }),
            })
            if (response.ok === true) {
                const data = await response.json()
                localStorage.setItem("UserName", data.name);
                window.location.assign("http://localhost:4000/CreateGift");
                console.log(data);
            } else {
                const errorData = await response.json();
                console.log("errors", errorData);
                alert("Что-то пошло не так")
            }
        }
        else
            alert("Что-то пошло не так");
    }

    const toggleFormClick = () => {
      SetIsLogin(!IsSignIn);
      SetEmail("");
      SetName("");
      SetPassword("");
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
              <input className='input' value={Name} type="text" placeholder="Имя пользователя" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetName(e.target.value)}/>
              <input className='input' value={Email} type="email" placeholder="Адрес эл. почты" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetEmail(e.target.value)}/>
              <input className='input' value={Password} type="password" placeholder="Пароль" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetPassword(e.target.value)}/>
              <button className="button buttons submit" onClick={SignUpQuery}>Создать аккаунт</button>
            </div>
          </div>
          <div className={DisplaySignIn}>
            <h1 className='h1'>Войти</h1>
            <div className="more-padding form">
              <input className='input' type="text" value={Name} placeholder="Имя пользователя" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetName(e.target.value)}/>
              <input className='input' type="password" value={Password} placeholder="Пароль" onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => SetPassword(e.target.value)}/>
              <button className="button buttons submit" onClick={SignInQuery}>Войти</button>
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