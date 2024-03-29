import { IFillers, IBox, IDescription, IReadyBox } from "../Interfaces/Interfaces";

export class Filler implements IFillers{
    name : string;
    price : number;
    id : number;
    img : string;
    onCart : boolean;
    description? : string;
    constructor (Name : string, Price : number, Id : number, Img : string, OnCart : boolean, Description? : string)
    {
        this.name = Name;
        this.price = Price;
        this.id = Id;
        this.img = Img;
        this.onCart = OnCart;
        this.description = Description
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

export class ReadyBox implements IReadyBox{
    id? : number;
    name? : string;
    fillers : IFillers[];
    img?: string;
    box? : IBox;
    price? : number;
    onCart? : boolean;
    descriptipon? : string;
    constructor(Id: number, Name: string, Fillers: IFillers[], Box: IBox, Price:number, OnCart : boolean, Img : string, Description : string) {
        this.id = Id;
        this.name = Name;
        this.fillers = Fillers;
        this.box = Box;
        this.price = Price;
        this.onCart = OnCart;
        this.img = Img;
        this.descriptipon = Description;
    }
}