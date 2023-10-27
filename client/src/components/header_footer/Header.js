import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom'
import FromData from 'form-data';
import axios from 'axios';
import './Header.css'
import AddToCart from '../../pages/addToCartPage/AddToCart'
import SearchArea from '../searchArea/SearchArea'
import homeImg from '../../assets/home.png'
import addDataImg from '../../assets/database.png'
import logoutImg from '../../assets/logout.png'
import userImg from '../../assets/trash.png'


export default function Header({ addToCart, setPPCartData, PPCartData, isLogin, setIsLogin, setBuyProductData }) {

	const[userImg, setUserImg] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		getUserImage();
	}, [isLogin]);

	const getUserImage = async () => {
		const token = Cookies.get("auth_token");
		let fromData = new FromData();
		fromData.append("token", token);
		const result = await axios.post("http://localhost:5000/getUserImage", fromData,);
		setUserImg(result.data.userImg);
	}

	const logout = () => {
		Cookies.remove("auth_token");
		setIsLogin(false);
		navigate('/register');
	}

	return (
		<div className='header flex3'>
			<div className='headerLogoArea'>
				Gift-House
			</div>
			<div className='headerLinkArea'>
				{
					isLogin
						?
						<>
							<Link className='link navLink flex' to='/'><img src={homeImg} /></Link>
							<Link className='link navLink flex' to='/addData'><img src={addDataImg} /></Link>
							<SearchArea addToCart={addToCart} setBuyProductData={setBuyProductData} />
							<AddToCart PPCartData={PPCartData} setPPCartData={setPPCartData} />
							<Link className='link navLink flex' onClick={logout} to='/register'><img src={logoutImg} /></Link>
							<Link className='link navLink flex' to='/'><img className='profileImg' src={userImg} /></Link>
						</>
						:
						<>
							<Link className='link' to='/register'>Signin</Link>
							<Link className='link' to='/login'>Login</Link>
						</>
				}
			</div>
		</div>
	)
}