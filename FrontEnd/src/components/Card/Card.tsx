import React from 'react';
import { IDescription } from '../../Interfaces/Interfaces';
import Description from '../Description';
import "./Card.scss"

interface IProps{
    img?: string,
    price?:number,
    name?:string,
    id? : number,
    onCart? : boolean,
    Descriptions? : IDescription[];
    AddToCartEvent(id?: number) : void;
}


export const Card : React.FC<IProps> = ({img, price, name, Descriptions, id, AddToCartEvent, onCart}) => {
    const AddToCart = () => {
        AddToCartEvent(id);
    }

    if (!onCart)
    return (
    <div className="wrapper">
        <div className="container">
            <div className="top">
                <img src={img} className='img'/>
            </div>
            <div className="bottom">
            <div className="left">
                <div className="details">
                <h1>{name}</h1>
                <p>{price}₽ {onCart} </p>
                </div>
                <div className="buy" onClick={AddToCart}>
                    <img src='https://cdn-icons-png.flaticon.com/512/1632/1632686.png'/>
                </div>
            </div>
            <div className="right">
                <div className="done"><i className="material-icons">done</i></div>
                <div className="details">
                <h1>{name}</h1>
                <p>Добавлено в корзину</p>
                </div>
                <div className="remove">
                    <i className="material-icons">
                        Удалить
                    </i>
                </div>
            </div>
            </div>
        </div>
        <div className="inside">
            <div className="icon">
                <img src='https://cdn-icons-png.flaticon.com/512/5393/5393011.png'/>
            </div>
            <div className="contents">
                {
                    Descriptions?.map(d => (
                            <Description key={d.id} text={d.text} value={d.value}/>
                        ))
                }
            </div>
        </div>
    </div>
    );
    else
    return (
        <div className="wrapper">
            <div className="container">
                <div className="top">
                    <img src={img} className='img'/>
                </div>
                <div className="bottom clicked">
                <div className="left">
                    <div className="details">
                    <h1>{name}</h1>
                    <p>{price}₽ </p>
                    </div>
                    <div className="buy" onClick={AddToCart}>
                        <img src='https://cdn-icons-png.flaticon.com/512/1632/1632686.png'/>
                    </div>
                </div>
                <div className="right">
                    <div className="done"><i className="material-icons">done</i></div>
                    <div className="details">
                    <h1>{name}</h1>
                    <p>Добавлено в корзину</p>
                    </div>
                    <div className="remove">
                        <i className="material-icons">
                            Удалить
                        </i>
                    </div>
                </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon">
                    <img src='https://cdn-icons-png.flaticon.com/512/5393/5393011.png'/>
                </div>
                <div className="contents">
                    {
                        Descriptions?.map(d => (
                                <Description key={d.id} text={d.text} value={d.value}/>
                            ))
                    }
                </div>
            </div>
        </div>
        );
}

