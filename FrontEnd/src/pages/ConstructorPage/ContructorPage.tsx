import React from 'react';
import { Card, ConstructorCart } from '../../components';
import { IFillers } from '../../Interfaces/Interfaces';
import { IBox } from '../../Interfaces/Interfaces';
import "./ConstructorPage.scss"


interface IProps{
    AllFillers : IFillers[];
    AllBoxes : IBox[];
}

export const ConstructorPage : React.FC<IProps> = ({AllFillers, AllBoxes}) => {
    const [IsFillersVisible, SetFillersVisible] = React.useState(true);
    const [Fillers, SetFillers] = React.useState(new Array<IFillers>);
    const [Box, SetBox] = React.useState<IBox>();

    const AddFillersToCart = (id: number) => {
        AllFillers.forEach(element => {
            if (element.id == id)
            {
                SetFillers(Fillers => [...Fillers, element]);
                element.onCart = true;
            }
        });
    }

    const ChooseBox = (id: number) => {
        AllBoxes.forEach(element => {
            if (element.id == Box?.id)
            {
                element.onCart = false;
                console.log(element)
            }
            if (element.id == id)
            {
                element.onCart = true;
                SetBox(element);
                console.log(element);
            }
        });
    }

    if (IsFillersVisible)
    return(
	<div className='ConstructorPage'>
        <div className="ConstructorPage-container">
            {
                AllFillers.map(af => (
                    <Card key={af.id} img={af.img} name={af.name} price={af.price} AddToCartEvent={AddFillersToCart} id={af.id} onCart={af.onCart}/>
                ))
            }
        </div>
        <div className='CartAndButton'>
            <ConstructorCart Fillers={Fillers} Box={Box}/>
            <button onClick={() => SetFillersVisible(false)} className="button" type='submit'>
                Дальше
            </button>
        </div>
	</div>
    );
    else
    return(
    <div className='ConstructorPage'>
        <div className="ConstructorPage-container">
            {
                AllBoxes.map(ab => (
                    <Card key={ab.id} name={ab.name} Descriptions={ab.description} img={ab.img} price={ab.price} AddToCartEvent={ChooseBox} id={ab.id} onCart={ab.onCart}/>
                ))
            }
        </div>
        <div className='CartAndButton'>
            <ConstructorCart Fillers={Fillers} Box={Box}/>
            <button onClick={() => SetFillersVisible(false)} className="button" type='submit'>
            Дальше ➡
            </button>
            <button onClick={() => SetFillersVisible(true)} className="button" type='submit'>
            ⬅ Назад
            </button>
        </div>
	</div>
    );
}
