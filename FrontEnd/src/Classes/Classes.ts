import { IFillers, IBox, IDescription } from "../Interfaces/Interfaces";

export class Filler implements IFillers{
    name : string;
    price : number;
    id : number;
    img : string;
    onCart : boolean;
    constructor (Name : string, Price : number, Id : number, Img : string, OnCart : boolean)
    {
        this.name = Name;
        this.price = Price;
        this.id = Id;
        this.img = Img;
        this.onCart = OnCart;
    }
}

export class Box implements IBox{
    name : string;
    id : number;
    description : IDescription[];
    img : string;
    price: number;
    onCart : boolean;

    constructor (Name : string, Desc : IDescription[], Id : number, Img : string, Price : number, OnCart : boolean)
    {
        this.name = Name;
        this.description = Desc;
        this.id = Id;
        this.img = Img;
        this.price = Price;
        this.onCart = OnCart;
    }
}

export class Description implements IDescription{
    text: string;
    value: string;
    id: number;
    constructor(Id: number, Text: string, Value: string) {
 
        this.id = Id;
        this.value = Value;
        this.text = Text;
    }
}