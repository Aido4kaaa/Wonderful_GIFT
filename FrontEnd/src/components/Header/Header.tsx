import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className="Header">
        <NavLink className="Header-Logo">
        <span className='span'>
              WONDERFUL
            </span>
            GIFTS
        </NavLink>
        <div className="Header-Menu">
            <Link className="Header-Menu-Item" to='./'>
            Магазин
            </Link>
            <Link className="Header-Menu-Item" to='CreateGift'>
            Конструктор подарков
            </Link>
            <Link className="Header-Menu-Item" to='Auth'>
            Авторизация
            </Link>
        </div>
    </header>
  );
};
