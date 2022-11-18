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
    Fillers.push(new Filler("Айфон",50000, 1,"https://im8.bloha.ru/2022/05/iphones_new.jpeg?x10609",false));
    Fillers.push(new Filler("Конфета",300, 2,"https://gipermix.ru/upload/iblock/072/072d35a4dba67e63a79c687c904de667.jpg",false));
    Fillers.push(new Filler("Ноутбук",30000, 3,"https://torg-pc.ru/upload/iblock/6c4/pjxe27muntuzsn7payuc4r4qw92nbks9/Acer-Extensa-EX2519-2.jpg",false));
    Fillers.push(new Filler("Конфета",3000, 4,"http://klublady.ru/uploads/posts/2022-02/1644750734_36-klublady-ru-p-konfeti-sonata-foto-44.jpg",false));
    Fillers.push(new Filler("Айфон",50000, 5,"https://im8.bloha.ru/2022/05/iphones_new.jpeg?x10609",false));
    Fillers.push(new Filler("Айфон",50000, 6,"https://im8.bloha.ru/2022/05/iphones_new.jpeg?x10609",false));
    Descriprions.push(new Description(1, "Цена" , "5000"));
    Descriprions.push(new Description(2, "Объём" , "20х20х20"));
    Descriprions.push(new Description(3, "Макс. Вес" , "1кг"));
    Boxes.push(new Box("Коробка", Descriprions, 1, "https://ex-garant.ru/wp-content/uploads/2020/12/dostavka-korporativnyh-podarkov-spb.png", 900,false));
    Boxes.push(new Box("Коробка", Descriprions, 2, "https://i.etsystatic.com/igwp/74ea59/1345531058/igwp_600xN.1345531058_4mrxtegx.jpg?version=0", 800,false));
    Boxes.push(new Box("Коробка", Descriprions, 3, "https://ex-garant.ru/wp-content/uploads/2020/12/dostavka-korporativnyh-podarkov-spb.png", 600,false));
    Boxes.push(new Box("Коробка", Descriprions, 4, "https://i.etsystatic.com/igwp/74ea59/1345531058/igwp_600xN.1345531058_4mrxtegx.jpg?version=0", 500,false));
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