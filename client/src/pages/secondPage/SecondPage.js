import './SecondPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function SecondPage() {

	const params = useParams();

	useEffect(() => {
		get_SP_ProductType();
	}, [])

	const [productTypeList, setProductTypeList] = useState();

	const get_SP_ProductType = async () => {
		const result = await axios.get(`http://localhost:5000/get_sp_product_type/${params.catagoryToken}`);
		setProductTypeList(result.data);
	}

	return (
		<div className='secondPage'>
			<div className='boxArea'>
			{
					productTypeList ?
						productTypeList.map((e) => {
							return (
								<div className='card slideBoxDiv'>
									<div className='imgArea flex'>
										<img src={e.productTypeImage} />
									</div>
									<div className='textArea'>
										<h1>{e.productType}</h1>
										<div className='btnArea flex2'>
											<Link className="btnAreaBtn btn" to={`/thirdPage/${e.productTypeToken}`}>Click to go</Link>
										</div>
									</div>
								</div>
							);
						})
						:
						<></>
				}
			</div>
		</div>

	)
}

