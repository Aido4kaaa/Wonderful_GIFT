import React from 'react';
import { Card, ConstructorCart } from '../../components';
import { IFillers, IReadyBox } from '../../Interfaces/Interfaces';
import { IBox } from '../../Interfaces/Interfaces';
import "./ShopPage.scss"


interface IProps{
    ReadyBoxes : IReadyBox[];
}

export const ShopPage : React.FC<IProps> = ({ReadyBoxes}) => {
    const [Fillers, SetFillers] = React.useState(new Array<IFillers>);
    const [Box, SetBox] = React.useState<IBox>();
    const AddFillersToCart = (id: number) => {
        ReadyBoxes.forEach(element => {
            if (element.id == id)
            {
                SetBox(element.box);
                element.fillers.forEach(element => {
                    SetFillers(Fillers => [...Fillers, element]);
                })
                element.onCart = true;
            }
        });
    }

    const DeleteFillersFromCart = (id: number) => {
        SetFillers(new Array<IFillers>);
        SetBox(undefined);
        ReadyBoxes.forEach(element => {
            if (element.id != id && element.onCart)
            {
                element.fillers.forEach(element =>{
                    SetFillers(Fillers => [...Fillers, element]);
                })
            }
            else {
                element.onCart = false;
            }
        });
    }

    

    return(
	<div className='ConstructorPage'>
        <div className="ConstructorPage-container">
            {
                ReadyBoxes.map(af => (
                    <Card key={af.id} img={af.img} name={af.name} price={af.price} AddToCartEvent={AddFillersToCart} DeleteFromCartEvent={DeleteFillersFromCart} id={af.id} onCart={af.onCart} fillersDescriptions={af.description}/>
                ))
            }
        </div>
        <div className='CartAndButton'>
            <ConstructorCart Fillers={Fillers} Box={Box}/>
        </div>
	</div>
    );

}
