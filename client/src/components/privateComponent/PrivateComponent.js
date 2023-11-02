import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import FromData from 'form-data';

import FrontPage from '../../pages/frontPage/FrontPage';
import SecondPage from '../../pages/secondPage/SecondPage';
import ThirdPage from '../../pages/thirdPage/ThirdPage';
import BuyPage from '../../pages/buy/BuyPage';
import BuyChart from '../../pages/buy/BuyChart';
import Register from '../../pages/login_register/Register';
import Login from '../../pages/login_register/Login';

export default function PrivateComponent({ isLogin, setIsLogin, addToCart, buyProductData, setBuyProductData }) {

    const navigate = useNavigate();
    useEffect(() => {
        check_Auth_Token();
    }, []);

    const check_Auth_Token = async () => {
        const token = Cookies.get("auth_token");
        if (token) {
            let fromData = new FromData();
            fromData.append("token", token);
            const result = await axios.post("https://gift-house-back.onrender.com/getToken", fromData,);
            if (result.data.message) {
                setIsLogin(true);
                navigate('/');
            } else {
                Cookies.remove("auth_token");
                setIsLogin(false);
                navigate('/register');
            }
        } else {
            setIsLogin(false);
            navigate('/register');
        }
    }

    return (
        <Routes>
            {
                isLogin ?
                    <>
                        <Route path='/' element={<FrontPage />} />
                        <Route path='/secondPage/:catagoryToken' element={<SecondPage />} />
                        <Route path='/thirdPage/:productTypeToken' element={<ThirdPage addToCart={addToCart} setBuyProductData={setBuyProductData} />} />
                        <Route path='/buyPage' element={<BuyPage buyProductData={buyProductData} addToCart={addToCart} />} />
                        <Route path='/buyChart' element={<BuyChart />} />
                    </>
                    :
                    <>
                        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
                        <Route path='/register' element={<Register />} />
                    </>
            }
        </Routes>
    )

}
