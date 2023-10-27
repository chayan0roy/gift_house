import React, { useState } from 'react'
import FromData from 'form-data';
import axios from 'axios';
import './AddData.css'
import downloadImg from '../../assets/downloadImg.png'


export default function AddData() {


    const allCatagory = ["Birth Day", "Anniversary","Congratulations", "Love", "For Her", "For Him",  "Unique", "Wedding", "For Kid_(M)", "For Kid_(F)"];
    const ProductType = ["Cake", "Flower", "Cosmetics", "Jewelry", "Toy", "Education", "Taddy", "Others"];


    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState();
    const [productType, setProductType] = useState(ProductType[0]);
    const [productTypeImage, setProductTypeImage] = useState("");
    const [productPrice, setProductPrice] = useState();
    const [catagory, setCatagory] = useState(allCatagory[0]);
    const [catagoryImage, setCatagoryImage] = useState("");
    const [description, setDescription] = useState();
    const [offer, setOffer] = useState();
    const [deliveryCharge, setDeliveryCharge] = useState();
    const [rating, setRating] = useState();


    const convertProductIMG = (e) => {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            setProductImage(fileReader.result);
        }
    }

    const convertProductTypeImage = (e) => {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            setProductTypeImage(fileReader.result);
        }
    }

    const convertCatagoryImage = (e) => {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            setCatagoryImage(fileReader.result);
        }
    }

    const handleSubmit = async () => {
        let fromData = new FromData();

        fromData.append("productName", productName);
        fromData.append("productImage", productImage);
        fromData.append("productType", productType);
        fromData.append("productTypeImage", productTypeImage);
        fromData.append("productPrice", productPrice);
        fromData.append("catagory", catagory);
        fromData.append("catagoryImage", catagoryImage);
        fromData.append("description", description);
        fromData.append("offer", offer);
        fromData.append("deliveryCharge", deliveryCharge);
        fromData.append("rating", rating);

        const result = await axios.post("https://gift-house-back.onrender.com/addData", fromData,);
        if (result.status == 201) {
            alert("Product Uploaded")
        }
    }

    return (
        <div className='addData flex'>
            <div className='leftSide'>
                <div class="input_box">
                    <input className='input_box' type='text' name='Product Name' required onChange={(e) =>
                        setProductName(e.target.value)}></input>
                    <span>Product Name</span>
                    <i></i>
                </div>
                <div class="select_box">
                    <select onChange={(c) => setProductType(c.target.value)}>
                        {
                            ProductType.map((c) => {
                                return (
                                    <option value={c}>{c}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div class="input_box">
                    <input className='input_box' type='text' name='price' required onChange={(e) =>
                        setProductPrice(e.target.value)}></input>
                    <span>Price</span>
                    <i></i>
                </div>
                <div class="select_box">
                    <select onChange={(c) => setCatagory(c.target.value)}>
                        {
                            allCatagory.map((c) => {
                                return (
                                    <option value={c}>{c}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div class="input_box">
                    <input className='input_box' type='text' name='description' required onChange={(e) =>
                        setDescription(e.target.value)}></input>
                    <span>Product Description</span>
                    <i></i>
                </div>
                <div class="input_box">
                    <input className='input_box' type='text' name='offer' required onChange={(e) =>
                        setOffer(e.target.value)}></input>
                    <span>% Off</span>
                    <i></i>
                </div>
                <div class="input_box">
                    <input className='input_box' type='text' name='deliveryCharge' required onChange={(e) =>
                        setDeliveryCharge(e.target.value)}></input>
                    <span>Delivery Charge</span>
                    <i></i>
                </div>
                <div class="input_box">
                    <input className='input_box' type='text' name='rating' required onChange={(e) =>
                        setRating(e.target.value)}></input>
                    <span>Rating</span>
                    <i></i>
                </div>
                <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
            </div>
            <div className='rightSide'>
                <div className='input_img_box flex'>
                    <img src={productImage == "" || productImage == null ? downloadImg : productImage}></img>
                    <input className='image_input' accept='image/*' name='image' type='file' onChange={convertProductIMG}></input>
                </div>
                <div className='input_img_box flex'>
                    <img src={productTypeImage == "" || productTypeImage == null ? downloadImg : productTypeImage}></img>
                    <input className='image_input' accept='image/*' name='image' type='file' onChange={convertProductTypeImage}></input>
                </div>
                <div className='input_img_box flex'>
                    <img src={catagoryImage == "" || catagoryImage == null ? downloadImg : catagoryImage}></img>
                    <input className='image_input' accept='image/*' name='image' type='file' onChange={convertCatagoryImage}></input>
                </div>
            </div>
        </div>
    )
}











// // "productName": "Gun",
// // "productImage": "Gun",
// // "productType" : "Gun",
// // "productTypeImage" : "Gun",
// // "productPrice": 400,
// // "catagory": "Birth Day",
// // "catagoryImage": "Birth Day",
// // "description": "fbdfbdf fdfdfgdg",
// // "offer": 50,
// // "deliveryCharge": 20,
// // "rating": 5

// // "productName": "CAR",
// // "productImage": "CAR",
// // "productType" : "CAR",
// // "productTypeImage" : "CAR",
// // "productPrice": 500,
// // "catagory": "Anniversary",
// // "catagoryImage": "Birth Day",
// // "description": "fbdfbdf fdfdfgdg",
// // "offer": 10,
// // "deliveryCharge": 20,
// // "rating": 4