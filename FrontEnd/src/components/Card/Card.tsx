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
    DeleteFromCartEvent(id?: number) : void;
}


export const Card : React.FC<IProps> = ({img, price, name, Descriptions, id, AddToCartEvent,DeleteFromCartEvent, onCart, }) => {
    const AddToCart = () => {
        AddToCartEvent(id);
    }

    const DeleteFromCart = () => {
        DeleteFromCartEvent(id);
    }

    if (!onCart)
    return (
    <div className="wrapper">
        <div className="container">
            <div className="top" style={{
                background : `url(${img}) no-repeat center center`,
                backgroundSize : "100%",
            }}>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="details">
                    <h1>{name}</h1>
                    <p>{price}₽ {onCart} </p>
                    </div>
                    <div className="buy" onClick={AddToCart}>
                        <img src='https://cdn-icons-png.flaticon.com/512/992/992651.png' referrerPolicy='no-referrer'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="inside">
            <div className="icon">
                <img src='https://cdn-icons-png.flaticon.com/512/5393/5393011.png' referrerPolicy='no-referrer'/>
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
                <div className="top" style={{
                    background : `url(${img}) no-repeat center center`,
                    backgroundSize : "100%",
                }}/>
                <div className="bottom clicked">
                <div className="left">
                    <div className="details">
                    <h1>{name}</h1>
                    <p>{price}₽ </p>
                    </div>
                    <div className="buy" onClick={AddToCart}>
                        <img src='https://cdn-icons-png.flaticon.com/512/992/992651.png' referrerPolicy='no-referrer' className='imgBuyCancel'/>
                    </div>
                </div>
                <div className="right">
                    <div className="done">
                        <img src='https://cdn-icons-png.flaticon.com/512/1442/1442912.png' referrerPolicy='no-referrer' className='imgBuyCancel'/>
                    </div>
                    <div className="details">
                    <h1>{name}</h1>
                    <p>Добавлено в корзину</p>
                    </div>
                    <div className="remove">
                        <img src='https://cdn-icons-png.flaticon.com/512/1617/1617543.png' referrerPolicy='no-referrer' className='imgBuyCancel' onClick={DeleteFromCart}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="inside">
                <div className="icon">
                    <img src='https://cdn-icons-png.flaticon.com/512/5393/5393011.png' className='imgBuyCancel'/>
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

