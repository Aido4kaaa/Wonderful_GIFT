import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import { URL } from "../../Classes/Constants";
import { IFillers, IBox, IReadyBox } from "../../Interfaces/Interfaces";
import { MainPage, SignPage, ConstructorPage, ShopPage } from "../../pages";
import Layout from "../Layout";

export const App: React.FC = () => {
    const [Fillers, SetFillers] = React.useState(new Array<IFillers>);
    const [Boxes, SetBoxes] = React.useState(new Array<IBox>);
    const [RBoxes, SetRBoxes] = React.useState(new Array<IReadyBox>);
    

    const loadAllFillersAndBoxes = async () => {
        const responseFiller = await fetch(URL.concat("FillersAndBoxes/GetAllFillers"))
        const FillersData = await responseFiller.json();
        SetFillers(FillersData);
        const responseBoxes = await fetch(URL.concat("FillersAndBoxes/GetAllBoxes"))
        const BoxesData = await responseBoxes.json();
        SetBoxes(BoxesData);
        const responseRBoxes = await fetch(URL.concat("FillersAndBoxes/GetAllRBoxes"))
        const RBoxesData = await responseRBoxes.json();
        SetRBoxes(RBoxesData);
        console.log(RBoxesData);
    }

    if (Boxes.length == 0 && Fillers.length == 0)
        loadAllFillersAndBoxes();

    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="Auth" element={<SignPage/>}/>
                    <Route path="CreateGift" element={<ConstructorPage AllFillers={Fillers} AllBoxes={Boxes}/>}/>
                    <Route path="Shop" element={<ShopPage ReadyBoxes={RBoxes}/>}/>
                </Routes>
            </Layout>
        </div>
    );
};