import './ThirdPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/card/Card';


export default function ThirdPage({ addToCart, setBuyProductData }) {

    const params = useParams();

    useEffect(() => {
        get_TP_Producs();
    }, [])

    const [productList, setProductList] = useState();

    const get_TP_Producs = async () => {
        const result = await axios.get(`https://gift-house-back.onrender.com/get_tp_producs/${params.productTypeToken}`);
        setProductList(result.data);
    }

    return (
        <div className='thirddPage'>
            <div className='boxArea'>
                {
                    productList ?
                        productList.map((e) => {
                            return (
                                <Card cardData={e} addToCart={addToCart} setBuyProductData={setBuyProductData} />
                            );
                        })
                        :
                        <></>
                }
            </div>
        </div>

    )
}
