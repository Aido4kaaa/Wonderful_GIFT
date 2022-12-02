import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import { Filler, Box, Description } from "../../Classes/Classes";
import { IFillers, IBox, IDescription } from "../../Interfaces/Interfaces";
import { MainPage, SignPage, ConstructorPage } from "../../pages";
import Layout from "../Layout";

export const App: React.FC = () => {
    const [Fillers] = React.useState(new Array<IFillers>);
    const [Descriprions] = React.useState(new Array<IDescription>);
    const [Boxes] = React.useState(new Array<IBox>);
    Fillers.push(new Filler("Айфон",50000, 1,"https://i.pinimg.com/564x/d3/cc/64/d3cc64c1f2d8abad5dd8c6ed6dd0df90.jpg",false));
    Fillers.push(new Filler("Леденец",300, 2,"https://i.pinimg.com/564x/f6/11/52/f611522bcd4c580acd3fc6930ab99941.jpg",false));
    Fillers.push(new Filler("Конфета",150, 3,"https://i.pinimg.com/564x/af/6d/73/af6d73ba99d8fa7aa92d6d5273ec324c.jpg",false));
    Fillers.push(new Filler("Скитлс",150, 4,"https://i.pinimg.com/564x/a5/1e/2f/a51e2fdc8053bf75b864ed8702cb7db7.jpg",false));
    Fillers.push(new Filler("Подушка",400, 5,"https://i.pinimg.com/564x/e8/54/78/e8547816040e2e498daa90d624d0a443.jpg",false));
    Fillers.push(new Filler("Мишка",300, 6,"https://i.pinimg.com/564x/88/aa/e2/88aae284b9fe9a5700abc03ffc759d06.jpg",false));
    Fillers.push(new Filler("Кот",300, 7,"https://i.pinimg.com/564x/1c/a8/8d/1ca88d1b06e8357433d3125eefbdb1d3.jpg",false));
    Fillers.push(new Filler("Кролик",400, 8,"https://i.pinimg.com/564x/44/80/18/448018d4564faf2f353a964c2496c19d.jpg",false));
    Fillers.push(new Filler("Пяточёк",400, 9,"https://i.pinimg.com/564x/e7/f9/2f/e7f92f43ff8783be10c6e47dcbc55878.jpg",false));
    Descriprions.push(new Description(1, "Цена" , "5000"));
    Descriprions.push(new Description(2, "Объём" , "20х20х20"));
    Descriprions.push(new Description(3, "Макс. Вес" , "1кг"));
    Boxes.push(new Box("Коробка", Descriprions, 10, "https://i.pinimg.com/564x/56/9a/8b/569a8bf4239d0c44918e1665b3ceb38a.jpg", 0,false));
    Boxes.push(new Box("Коробка", Descriprions, 11, "https://i.pinimg.com/564x/9b/8f/ae/9b8faee348507d3089b4f389deb7e4c2.jpg", 300,false));
    Boxes.push(new Box("Коробка", Descriprions, 12, "https://i.pinimg.com/564x/fa/6e/10/fa6e1014f2ed59503794a351dc13e781.jpg", 150,false));
    Boxes.push(new Box("Коробка", Descriprions, 13, "https://i.etsystatic.com/igwp/74ea59/1345531058/igwp_600xN.1345531058_4mrxtegx.jpg?version=0", 100,false));
    Boxes.push(new Box("Коробка", Descriprions, 14, "https://i.pinimg.com/564x/1c/cd/0d/1ccd0de33437ba80580592b3c38e1f94.jpg", 200,false));
    Boxes.push(new Box("Коробка", Descriprions, 15, "https://i.pinimg.com/564x/69/a1/c0/69a1c0b323e58522e78aaf4ef5eba89e.jpg", 200,false));
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="Auth" element={<SignPage/>}/>
                    <Route path="CreateGift" element={<ConstructorPage AllFillers={Fillers} AllBoxes={Boxes}/>}/>
                </Routes>
            </Layout>
        </div>
    );
};