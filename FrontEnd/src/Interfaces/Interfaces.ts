export interface IDescription{
    text? : string;
    value? : string;
    id? : number;
}
  
export interface IBox{
    id? : number;
    name? : string;
    price?: number;
    description? : IDescription[];
    img? : string;
    onCart? : boolean;
}
  
export interface IFillers{
    name? : string;
    img? : string;
    price? : number;
    id? : number;
    onCart? : boolean;
    description? : string;
}

export interface IReadyBox{
    id? : number;
    name? : string;
    fillers : IFillers[];
    img? : string;
    box? : IBox;
    price? : number;
    onCart? : boolean;
    description? : string;
}