import React from 'react';
import Description from '../Description';
import "./Card.scss"

export const Card = () => (
    <div className="wrapper">
        <div className="container">
            <div className="top" style={{
                background : "url(https://i.pinimg.com/564x/72/14/81/7214819a44f3e5f7722e3370b8741a80.jpg) no-repeat center center",
            }}></div>
            <div className="bottom">
            <div className="left">
                <div className="details">
                <h1>Коробка</h1>
                <p>250₽ </p>
                </div>
                <div className="buy">
                    <img src='https://cdn-icons-png.flaticon.com/512/1632/1632686.png'/>
                </div>
            </div>
            <div className="right">
                <div className="done"><i className="material-icons">done</i></div>
                <div className="details">
                <h1>Chair</h1>
                <p>Добавлено в корзину</p>
                </div>
                <div className="remove"><i className="material-icons">clear</i></div>
            </div>
            </div>
        </div>
        <div className="inside">
            <div className="icon">
                <img src='https://cdn-icons-png.flaticon.com/512/5393/5393011.png'/>
            </div>
            <div className="contents">
                <Description text='Цена' value='250₽'/>
                <Description text='Объём' value='20х20х20'/>
                <Description text='Вес' value='1кг'/>
            </div>
        </div>
    </div>
)
