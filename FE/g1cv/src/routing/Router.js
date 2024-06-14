import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Screens/Home';

const Router = () => {
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
};

export default Router;