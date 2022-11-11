import React from "react";
import {
    Routes,
    Route
  } from "react-router-dom";
import { MainPage, SignPage, ConstructorPage } from "../../pages";
import Layout from "../Layout";

export const App: React.FC = () => {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path="Auth" element={<SignPage/>}/>
                    <Route path="CreateGift" element={<ConstructorPage/>}/>
                </Routes>
            </Layout>
        </div>
    );
};